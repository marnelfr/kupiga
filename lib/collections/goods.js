//Goods ne peut être mise à local au fichier parce que je l'utilise quand même dans les autres fichiers pour par exemple les publications
Goods = new Mongo.Collection('goods')

Goods.allow({ // TODO: a perfectionner après
    insert: (userId, file) => {
        return false
    },
    update: (userId, file) => {
        return true
    },
    remove: (userId, file) => {
        return false
    }
})

Meteor.methods({
    goodInsert: (postAttributes, quiz = {}) => {
        let userId = Meteor.userId();
        check(userId, String)
        check(postAttributes.big, Boolean)
        if(postAttributes.big){
            check(postAttributes, {
                name: String,
                description: String,
                big: Boolean,
                type: String,
                valid: Boolean, //un produit peut être validé et rejeter ou valider et publier
                oui: Number,
                non: Number,
                masquer: Number,
                adorer: Number
            })
        }else{
            check(postAttributes, {
                name: String,
                description: String,
                big: Boolean,
                valid: Boolean, //un produit peut être validé et rejeter ou valider et publier
                oui: Number,
                non: Number
            })
        }
        check(quiz, Object)

        //Une même entreprise ne peut poster un même produit dans la même catégorie
        let old = Goods.findOne({name: postAttributes.name, big: postAttributes.big, userId: userId})

        if(old){
            return {
                goodsExist: true,
                _id: old._id
            }
        }

        let user = Meteor.user(),
            post = _.extend(postAttributes, {
                userId: user._id,
                author: user.profile.name,
                statut: 'attent', //publier, rejeter, expirer
                submitted: new Date()
            }),
            postId = Goods.insert(post),
            iQuiz = _.extend(quiz, {
                goodsId: postId
            })
        Quiz.insert(iQuiz)
        return {_id: postId}
    }
})


class GoodsInfo {

    constructor () {
        this.p = null
    }

    big (Goods) {
        return Goods.find({big: true})
    }

    setPrincipal (id) {
        this.p = id
    }

    getPrincipal (Goods) {
        if(!this.p){
            let ans = Goods.findOne({big: true}, {
                fields: {_id: true},
                sort:{validateAt: -1}
            })
            this.p = ans._id
        }
        return this.p
    }


    all (Goods) {
        return Goods.find()
    }

    othersBigValideted (Goods) {
        let all = Goods.find({big: true}, {sort:{validateAt: -1}}).fetch()
        return all.length > 1
    }

    smallGoods (Goods) {
        let all = Goods.find({big: false}, {sort:{validateAt: -1}}).fetch()
        return all.length > 1
    }

}

goods = new GoodsInfo