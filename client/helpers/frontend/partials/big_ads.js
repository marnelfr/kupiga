let template = Template.bigAds

template.onCreated(() => {
    Session.set('secondaire', true)
    Session.set('already', [])
    Session.set('principal', null)
})

let ConsultTimes = (id) => {
    let old = Consult.find()
}

template.helpers({
    finded: () => goods.othersBigValideted(Goods),
    first: () => {
        if (Session.get('secondaire')) {
            Session.set('secondaire', false)
            return true
        }
        return false
    },
    last: (index) => parseInt(index) === Goods.find().count(),
    idPrincipal: () => goods.getPrincipal(Goods),
    isPrincipal: (bigAd) => {
        console.log('idPrincipal:', goods.getPrincipal(Goods));
        console.log('bidadId:', bigAd._id)
        return goods.getPrincipal(Goods) === bigAd._id
    },
    bigAds: () => {
        let goods = Goods.find({big: true, _id: {$not: {$in: Session.get('already')}}}).fetch(),
            i = 0,
            all = [],
            noprincipal = true
        let old = Consult.find()
        let consulted = false
        let principal = Session.get('principal')

        goods.forEach(function (ad) {
            if(principal === null){
                i++
                consulted = false
                old.forEach (function (ol) {
                    if(ol.goodsId === ad._id && !consulted){
                        consulted = true
                    }
                })
                if(!consulted && noprincipal){
                    noprincipal = false
                    ad.principal = true
                }else{
                    ad.principal = false
                }
            }else{
                if(ad._id === principal) ad.principal = true
                else ad.principal = false
            }
            all.push(ad)
        })
        if(noprincipal && !!all[0] && principal === null) {
            all[0].principal = true
        }
        return all
    },
    noBigAds: () => {
        let goods = Goods.find({big: true, _id: {$not: {$in: Session.get('already')}}}).fetch()
        return !goods.length
    },
    kupiga: () => {
        return {
            big: true,
            description: "La première application qui se preocupe de la satisfaction clientel. Vous n'avez pas aimé un produit particulier? Vous n'en revenez des bienfaits que vous procure tel produit? Kupiga vous offre la possibilité de vous exprimés, de donner votre avis par rapport aux produits que vous utilisez au quotidien.",
            name: "KUpiga",
            principal: true,
            statut: "publier",
            submitted: new Date(),
            valid: true,
            validateAt: new Date(),
            oui: 345,
            non: 3,
            adorer: 769,
            masquer: 57,
            _id: "kUpiGaKUpigaKuPig"
        }
    },
    douze: (index) => index < 13 //permet d'afficher le nombre moins un produits
})









