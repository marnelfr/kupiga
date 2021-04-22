let template = Template.eachBigGoods
let i = 5


class EachBigAds {
    constructor () {}

    newConsult(userId, goodsId) {
        let old = Consult.findOne({
            userId: userId,
            goodsId: goodsId
        })
        if(old){
            old.times = parseInt(old.times) + 1
            old.already = false
            old.consultedAt = new Date()
            Consult.update(old._id, {$set: old}, (error) => {
                if(error) alert(erro.reason)
            })
        }else{
            Consult.insert({
                userId: userId,
                goodsId: goodsId,
                already: false,
                times: 1,
                consultedAt: new Date()
            })
        }
    }
}



template.onRendered(function () {
    let imgs = images.getUrl(this.data.good._id),
        div = $('#'+this.data.good._id),
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
    name: function() { return this.good.name },
    urls: function () {
        return images.getUrl(this.good._id)[0]
    },
    id: function () {
        return this.good._id
    },
    afficher: function () { // TODO: A coder pour que quand on clique sur un big ads, il prenne la place du principal
        return '/produit/'+this.good._id
    }
})

template.events({
    'click .beprincipal': function(e) {
        e.preventDefault()
        let goodsId = this.good._id;
        Session.set('principal', goodsId)
        let eachBigAds = new EachBigAds()

        Meteor.call('userIp', (error, userId) => {
            if(error) return alert(error.reason)
            eachBigAds.newConsult(userId, goodsId)
        })
    }
})