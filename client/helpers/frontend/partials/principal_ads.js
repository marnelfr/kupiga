let template = Template.principalAds

class BigAds {
    constructor () {
        this.avis
    }

    getUrl() {
        let sli = $('.slider')
        let url = sli[0].style.background
        url = url.split(' ')
        return url[0]
    }

    getInfo(name, id) {
        let url = this.getUrl()
        return {
            url: url,
            name: name,
            goodsId: id
        }
        return info
    }

    newComment(userId, goodsId, comment) {
        let old = Consult.findOne({
            userId: userId,
            goodsId: goodsId
        })
        if(old){
            old.comment = comment
            Consult.update(old._id, {$set: old}, (error) => {
                if(error) alert(erro.reason)
            })
        }
    }

    newConsult(userId, goodsId, avis) {
        Modal.show('commentAds')
        let old = Consult.findOne({
            userId: userId,
            goodsId: goodsId
        })
        let goods = Goods.findOne({
            _id: goodsId
        })
        if(goods){
            if(avis === "Masquer") goods.masquer = parseInt(goods.masquer) + 1
            if(avis === "Non") goods.non = parseInt(goods.non) + 1
            if(avis === "Oui") goods.oui = parseInt(goods.oui) + 1
            if(avis === "J'adore") goods.adorer = parseInt(goods.adorer) + 1
        }

        Goods.update(goods._id, {$set: goods}, (error) => {
            if(error) alert(error.reason)
        })
        if(old){
            old.times = parseInt(old.times) + 1
            old.avis = avis
            old.already = true
            Consult.update(old._id, {$set: old}, (error) => {
                if(error) alert(error.reason)
            })
        }else{
            Consult.insert({
                userId: userId,
                goodsId: goodsId,
                already: true,
                avis: avis,
                times: 1,
                consultedAt: new Date()
            })
        }
        let ids = Session.get('already')
        ids.push(goodsId)
        Session.set('already', ids)
    }

    newMasquage(userId, goodsId) {
        avis = "Masquer"
        let old = Consult.findOne({
            userId: userId,
            goodsId: goodsId
        })
        let goods = Goods.findOne({
            _id: goodsId
        })
        if(goods){
            goods.masquer = parseInt(goods.masquer) + 1
        }
        Goods.update(goods._id, {$set: goods}, (error) => {
            if(error) alert(error.reason)
        })
        if(old){
            old.times = parseInt(old.times) + 1
            old.avis = avis
            old.already = true
            Consult.update(old._id, {$set: old}, (error) => {
                if(error) alert(error.reason)
            })
        }else{
            Consult.insert({
                userId: userId,
                goodsId: goodsId,
                already: true,
                avis: avis,
                times: 1,
                consultedAt: new Date()
            })
        }
        let ids = Session.get('already')
        ids.push(goodsId)
        Session.set('already', ids)
    }


}

let bigAds = new BigAds()

template.onRendered(function(){
    let sli = $('.slider')

    let h = images.getHeight(sli);
    let w = images.getWidth(sli);

    if(this.data.goods._id === 'kUpiGaKUpigaKuPig'){
        sli.css({background: "url('/images/22.jpg') 0px 0px no-repeat", backgroundSize: w+"px "+h+"px"})
    }else{
        let imgs = images.getUrls(this.data.goods._id)

        let hh = parseInt(h)+200
        let ww = parseInt(w)+200

        sli.css({background: "url('" + imgs[0] + "') 0px 0px no-repeat", backgroundSize: w+"px "+h+"px"})

        let n = 1
        let img, g = 1000
        sli.css({
            transition: "background-size 16s, background-image 3s"
        })

        //Se charge de changer les photos chaque 8s et de l'animation
        setInterval(function () {
            img = imgs[n]
            n++
            n = n === 3 ? 0 : n
            sli.css({transition: "background-image 3s"})
            sli.css({background: "url('" + img + "') 0px 0px no-repeat", backgroundSize: w+"px "+h+"px"})
            sli.css({transition: "background-size 16s, background-image 3s"})
            setTimeout(function () {sli.css({backgroundSize: ww+"px "+hh+"px"})}, g)
            g === 1000 ? g = 7000 : g = 8000
        }, 16000)
    }
})

template.helpers({
    bgUrl: () => images.getFirstImageUrl(this.goods._id),
    question: (type) => {
        if(type === 'entreprise'){
            return 'Connaissez-vous l\'entreprise ?'
        }
        return `Connaissez-vous le ${type} ?`
    }
})


template.events({
    'click #like': function (e) {
        e.preventDefault()
        Meteor.call('userIp', (error, userId) => { //On a dans userId ici, l'id identifiant l'utilisateur suivant qu'il est connecté à un compte ou pas
            if(error) return alert(error.reason)
            Session.set('principal', null)
            let goodsId = this.goods._id
            let name = this.goods.name
            Session.set('goods-info', bigAds.getInfo(name, goodsId))
            bigAds.newConsult(userId, goodsId, "J'adore")
        })

    },
    'click #oui': function (e) {
        e.preventDefault()
        Meteor.call('userIp', (error, userId) => { //On a dans userId ici, l'id identifiant l'utilisateur suivant qu'il est connecté à un compte ou pas
            if(error) return alert(error.reason)
            Session.set('principal', null)
            let goodsId = this.goods._id
            let name = this.goods.name
            Session.set('goods-info', bigAds.getInfo(name, goodsId))
            bigAds.newConsult(userId, goodsId, "Oui")
        })

    },
    'click #non': function (e) {
        e.preventDefault()
        Meteor.call('userIp', (error, userId) => { //On a dans userId ici, l'id identifiant l'utilisateur suivant qu'il est connecté à un compte ou pas
            if(error) return alert(error.reason)
            Session.set('principal', null)
            let goodsId = this.goods._id
            let name = this.goods.name
            Session.set('goods-info', bigAds.getInfo(name, goodsId))
            bigAds.newConsult(userId, goodsId, "Non")
        })

    },
    'click #masquer': function (e) {
        e.preventDefault()
        Meteor.call('userIp', (error, userId) => { //On a dans userId ici, l'id identifiant l'utilisateur suivant qu'il est connecté à un compte ou pas
            if(error) return alert(error.reason)
            Session.set('principal', null)
            let goodsId = this.goods._id

            bigAds.newMasquage(userId, goodsId)
        })

    },
/*
    'click #masquer': function (e) {
        e.preventDefault()
        Meteor.call('userIp', (error, userId) => { //On a dans userId ici, l'id identifiant l'utilisateur suivant qu'il est connecté à un compte ou pas
            if(error) return alert(error.reason)
            let goodsId = this.goods._id
            // TODO: Masquer n'aura pas a affichier le modal
            bigAds.newConsult(userId, goodsId, "Masquer")
        })

    },
*/
    'click .el': function(e) {
        e.preventDefault()
        Meteor.call('userIp', (error, userId) => { //On a dans userId ici, l'id identifiant l'utilisateur suivant qu'il est connecté à un compte ou pas
            if(error) return alert(error.reason)


            let goodsId = this.goods._id
            let old = Consult.findOne({
                userId: userId,
                goodsId: goodsId
            })
            if(old){
                console.log(old)
            }else{
                //On traite les .nel ici donc already est à true et times est à zero
                Consult.insert({
                    userId: userId,
                    goodsId: goodsId,
                    already: true,
                    avis: 'ok',
                    comment: 'okokok',
                    times: 0,
                    consultedAt: new Date()
                })
            }
        })
    }
})
