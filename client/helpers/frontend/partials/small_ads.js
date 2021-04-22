let template = Template.smallAdsList

template.onCreated(() => {
    Session.set('small-already', [])
})



template.helpers({
    smallAds: () => Goods.find({big: false, _id: {$not: {$in: Session.get('small-already')}}}).fetch(),
    finded: () => goods.smallGoods(Goods),
    douze: (index) => index < 13 //permet d'afficher le nombre moins un produits
})




