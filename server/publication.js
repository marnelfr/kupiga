import {ObjectId} from "bson";

function getId(){
    headers.ready(this)
    //Determination de l'utilisateur et stockage de son id
    if(!Meteor.userId()){
        let head = headers.get(this),
            ip = head['x-forwarded-for']

        let guest = Guest.findOne({ip: ip})
        if(!guest){
            guest = Guest.insert({ip: ip})
        }else{
            if(guest.ip !== ip){
                guest = Guest.insert({ip: ip})
            }else{
                guest = guest._id
            }
        }
        return guest
    }
    return Meteor.userId()
}

Meteor.publish("users", () => Meteor.users.find(
    {},
    {
        fields: {
            profile: 1
        }
    }
))

Meteor.publish("goodsEnAttente", () => {
    return Goods.find({valid: false}, {sort: {submitted: -1}})
})

Meteor.publish("images", (id) => {
    check(id, String)
    return Images.find({goodsId: id})
})




Meteor.publish("goodsPublier", function() {
    headers.ready(this)
    let id
    //Determination de l'utilisateur et stockage de son id
    if(!Meteor.userId()){
        let head = headers.get(this),
            ip = head['x-forwarded-for']

        let guest = Guest.findOne({ip: ip})
        if(!guest){
            guest = Guest.insert({ip: ip})
        }else{
            if(guest.ip !== ip){
                guest = Guest.insert({ip: ip})
            }else{
                guest = guest._id
            }
        }
        id = guest
    }else{
        id = Meteor.userId()
    }

    //console.log('id: ', id)

    //Renvoi tous les ids des big ads déjà afficher à l'utilisateur
    //par rapport auxquelles il n'a pas réagit d'une quelconque façon
    /*let oldConsult = Consult.find({userId: id, already: false}, {
        fields: {goodsId: true},
        sort: {times: 1}
    }).fetch()

    console.log('oldConsult: ', oldConsult.fetch())*/


    let already = Consult.find({userId: id, already: true}, {
        fields: {goodsId: true},
        sort: {times: 1}
    }).fetch()

    /*let oldIds = [] //Contient les ids à charger en dernière position
    let alreadyIds = [] //Contient les ids à ne plus charger
    oldConsult.forEach (function (id) {
        oldIds.push(id.goodsId)
    })
    alreadyIds = oldIds
    already.forEach(function (id) {
        alreadyIds.push(id.goodsId)
    })*/

    //console.log('oldIds:', oldIds)
    //console.log('alreadyIds:', alreadyIds)

    //console.log('oldConsult:', oldConsult)

    /*
    13 produits sont affichés en permanance mais pour le moment, on va souscrire à tout les produits publiers

        Si possible, on ameliorera le code après pour que ce ne soit que 13 produits qui sont renvoyer au client
        en permanence. Quand le client clique alors sur l'un des big ads , on charge automatiquement le dernier
        big ad de la liste. Genre une case vide va apparaitre, le spinner sera entrain de faire son tour pendant
        qu'on souscrit au produit à ajouter pour avoir les 13 afficher en permanance.

    Ce qui sera fait alors est de commencer par voir s'il y a des produits dans la base
    qui n'ont pas leur id dans oldConsult
    A ces produits, on ajoutera par _.extend, les produits de oldConsult pour le moment
        //Apres
        Si on en trouve et qu'ils atteignent 13, on les retournes simplement.
        Sinon, les ids de la tables consultes etant par ordres de times croissant, on recupère
        les premiers venu pour combler le manquant à 13
        On retourne alors les 13
    */

    //console.log(id)
    //Les produits qui n'ont encore jamais été presenté à l'utilisateur
    /*let recentGoods = Goods.find(
        {
            valid: true,
            statut: 'publier',
            _id: {$nin: alreadyIds}
        },
        {sort: {validateAt: -1}}
    )*/

    let nopub = []

    already.forEach(function (id) {
        nopub.push(id.goodsId)
    })

    //console.log('already: ', already)
    //console.log('nopub: ', nopub)

    //Si on peut utiliser 'sort' en lui fournissant les valeurs des _ids, alors, c'est fait si non, il faut trouver le moyen de faire '$in or $nin' puis que pour le moment le comportement par defaut est '$in and $nin'
    return Goods.find(
        {
            valid: true,
            statut: 'publier',
            _id: {$nin: nopub}
        },

        {sort: {validateAt: -1}}
    )

    //console.log('rencentGoods:', recentGoods.fetch())
    //Les produits qu'il a dejà vu une fois. On va éssayer des les ranger par ordre croissant de 'times'
    /*let consultedGoods = Goods.find( // TODO: S'assurer que les produits ici sont dans l'ordre des ids oldConsult
        {valid: true, statut: 'publier', _id: {$in: oldIds}},
        {sort: {validateAt: -1}}
    )*/

    //console.log('consultedGoods', consultedGoods.fetch())


    //TODO: Il faut pouvoir mettre recentGoods et consultedGoods ensemble et les renvoyer si on utiise 'alreadyIds'

    //recentGoods = [...recentGoods, ...consultedGoods]
    //console.log('rencentGoodsFinal:', recentGoods.fetch())
    //return recentGoods
})








Meteor.publish("userConsult", function (goodsIds) {
    check(goodsIds, Array)
    headers.ready(this)
    let id
    //Determination de l'utilisateur et stockage de son id
    if(!Meteor.userId()){
        let head = headers.get(this),
            ip = head['x-forwarded-for']

        let guest = Guest.findOne({ip: ip})
        if(!guest){
            guest = Guest.insert({ip: ip})
        }else{
            if(guest.ip !== ip){
                guest = Guest.insert({ip: ip})
            }else{
                guest = guest._id
            }
        }
        id = guest
    }else{
        id = Meteor.userId()
    }
    let ids = goodsIds
    let tab = []
    ids.forEach(function (id) {
        tab.push(id._id)
    })
    return Consult.find({
        userId: id,
        goodsId: {$in: tab}
    })
})

Meteor.publish("goodsImagesPublier", () => {
    let ids = Goods.find({valid: true, statut: 'publier'}, {fields: {_id: true}, sort: {submitted: -1}}).fetch()
    let tab = []
    ids.forEach(function (id) {
        tab.push(id._id)
    })
    return Images.find({"goodsId" : {$in : tab}})
})

Meteor.publish("goodsQuiz", (goodsId) => {
    check(goodsId, String)
    return Quiz.find({goodsId: goodsId})
})


Meteor.publish("consulted", function(goodsId) {
    headers.ready(this)
    let id
    //Determination de l'utilisateur et stockage de son id
    if(!Meteor.userId()){
        let head = headers.get(this),
            ip = head['x-forwarded-for']

        let guest = Guest.findOne({ip: ip})
        if(!guest){
            guest = Guest.insert({ip: ip})
        }else{
            if(guest.ip !== ip){
                guest = Guest.insert({ip: ip})
            }else{
                guest = guest._id
            }
        }
        id = guest
    }else{
        id = Meteor.userId()
    }
    return oldConsult = Consult.find({userId: id, already: false}, {
        fields: {goodsId: true},
        sort: {times: 1}
    })
})