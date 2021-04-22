let template = Template.eachSmallGoods

let i = 5


class SmallAds {
    constructor () {
        this.avis
    }
    newConsult(userId, goodsId, avis) {
        let old = Consult.findOne({
            userId: userId,
            goodsId: goodsId
        })
        if(old){
            old.times = parseInt(old.times) + 1
            old.avis = avis
            old.already = true
            Consult.update(old._id, {$set: old}, (error) => {
                if(error) alert(erro.reason)
            })
        }else{
            Consult.insert({
                userId: userId,
                goodsId: goodsId,
                already: true,
                avis: avis,
                times: 0,
                consultedAt: new Date()
            })
        }
        let ids = Session.get('already')
        ids.push(goodsId)
        Session.set('already', ids)
    }
}

let smallAds = new SmallAds()

template.onRendered(function () {
    let imgs = images.getUrl(this.data.goods._id),
        div = $('#'+this.data.goods._id),
        duree = this.data.rang,
        n = 1
    div.css({
        transition: "background-image 2s"
    })
    duree = (duree+3)%6
    if(duree === 0) duree = 3
    if(duree === 1) duree = 4
    if(duree === 2) duree = 6
    setInterval(function () {
        img = imgs[n]
        n++
        n = n === 3 ? 0 : n
        div.css({background: "url('" + img + "') 0px 0px no-repeat", backgroundSize: "cover"})
    }, duree*1000)
})

template.helpers({
    name: function() {
        return this.goods.name
    },
    urls: function () {
        return images.getUrl(this.goods._id)[0]
    },
    id: function () {
        return this.goods._id
    },
    desc: function () {
        return this.goods.description.substr(0, 48) + '...'
    },
    description: function () {
        return this.goods.description
    }
})

template.events({
    'click #know': function(e) {
        e.preventDefault()
        Meteor.call('userIp', (error, userId) => { //On a dans userId ici, l'id identifiant l'utilisateur suivant qu'il est connecté à un compte ou pas
            let w3l = $('.w3l-popular-ads');
            w3l.animate({
                opacity: 0
            }, 200)
            if(error) return alert(error.reason)
            let goodsId = this.goods._id
            smallAds.newConsult(userId, goodsId, "Oui")
            $('#ad'+goodsId).slideUp()
            w3l.animate({
                opacity: 1
            }, 900)
        })
    },
    'click #noknow': function(e) {
        e.preventDefault()
        Meteor.call('userIp', (error, userId) => { //On a dans userId ici, l'id identifiant l'utilisateur suivant qu'il est connecté à un compte ou pas
            if(error) return alert(error.reason)
            let goodsId = this.goods._id
            smallAds.newConsult(userId, goodsId, "Non")
            $('#ad'+goodsId).slideUp()
        })
    }
})