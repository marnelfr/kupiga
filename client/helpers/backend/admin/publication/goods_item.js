let template = Template.goodsItem

template.helpers({
    extrait: (description) => {
        return description.substr(0, 100)+'...'
    },
    type: (big) => {
        if(big) return 'Principale'
        else return 'Secondaire'
    }
})

template.events({
    'click #show-goods': function(e) {
        e.preventDefault()
        Session.set('show-goodsId', this._id)
        Session.set('number', 0)
        Modal.show('showGoods')
    },
    'click #publier-goods': function(e) {
        e.preventDefault()
        let goods = Goods.update(this._id, {$set: {
            valid: true,
            statut: 'publier',
            validateAt: new Date(),
            adminId: Meteor.userId()
        }})
    },
    'click #rejeter-goods': function(e) {
        e.preventDefault()
        let goods = Goods.update(this._id, {$set: {
            valid: true,
            statut: 'rejeter',
            validateAt: new Date(),
            adminId: Meteor.userId()
        }})
    }
})