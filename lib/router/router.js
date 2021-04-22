Router.route('/', {
    name: 'accueil',
    waitOn: () => {
        Meteor.subscribe("goodsPublier")
        let goodsIds = Goods.find({}, {fields: {_id: true}}).fetch()
        Meteor.subscribe("userConsult", goodsIds)
        Meteor.subscribe("goodsImagesPublier")
        Meteor.subscribe("consulted")
    }
})

Router.route('/dd', {name: 'profileUser'}) // TODO: Pour permettre aux utilisateurs de modifier leur profile

Router.route('/logout', function () {
        AccountsTemplates.logout()
    }, {name: 'logout'})

Router.route('/contact', {name: 'contact'})

Router.route('/aide', {name: 'aide'})

Router.route('/fonctionnement', {name: 'fonctionnement'})

Router.route('/recherche', {name: 'recherche'})



Router.route('/entreprise/:username', {name: 'entrepriseDashboard', layoutTemplate: 'backLayout'})
Router.route('/publication/ajout', {name: 'addPublication', layoutTemplate: 'backLayout'})



//Les routes pour l'administration
AdminController = RouteController.extend({
    layoutTemplate: 'backLayout',
    waitOn: () => Meteor.subscribe('goodsEnAttente')
})

Router.route('/admin/:username', {name: 'adminDashboard', controller: 'AdminController'})
Router.route('/publication/attente', {name: 'waitingPublication', controller: 'AdminController'})
Router.route('/parametre/admin', {name: 'settingsAdmin', controller: 'AdminController'})

//----------------------------------------


if(Meteor.isClient){
    Transitioner.default({
        in: ['transition.fadeIn', 2000],
        out: 'transition.fadeOut'
    })
}
