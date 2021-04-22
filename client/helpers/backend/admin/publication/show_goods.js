let template = Template.showGoods

template.helpers({
    goods: () => Goods.findOne({_id: Session.get('show-goodsId')}),
    type: (big) => {
        if(big) return 'Principale'
        else return 'Secondaire'
    },
    images: () => {
        Meteor.subscribe("images", Session.get('show-goodsId'))
        return Images.find()
    },
    position: (index) => {
        if(index === 0) return 'Première'
        if(index === 1) return 'Deuxième'
        if(index === 2) return 'Troisième'
    },
    active: (index) => {
        if(index === 0){
            return 'active'
        }
    }
})

template.events({
    'click #publier': function(e) {
        e.preventDefault()
        let id = $('#token').val()
        let goods = Goods.update(id, {$set: {
            valid: true,
            statut: 'publier',
            validateAt: new Date(),
            adminId: Meteor.userId()
        }})
        Modal.hide('showGoods')

    },
    'click #rejeter': function(e) {
        e.preventDefault()
        let id = $('#token').val()
        let goods = Goods.update(id, {$set: {
            valid: true,
            statut: 'rejeter',
            validateAt: new Date(),
            adminId: Meteor.userId()
        }})
        Modal.hide('showGoods')
    }
})