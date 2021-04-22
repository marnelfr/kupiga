T9n.setLanguage('fr')

//Pour empêcher les utilisateurs d'avoir accès à l'objet headers depuis le client
if(Meteor.isClient) headers = {}

Router.configure({
    layoutTemplate: 'layout',
    notFoundTemplate: 'notFound',
    loadingTemplate: 'loading',
    waitOn: () => Meteor.subscribe('users')
})

//Les routes qui n'ont pas besoin qu'on soit connecté
Router.plugin('ensureSignedIn', {
    except: [
        'accueil',
        'aide',
        'enregistrement',
        'connexion',
        'reinitialiser',
        'contact',
        'logout',
        'logingout',
        'fonctionnement'
    ]
});


let onlyEntreprise = function () {
    let user = Meteor.user()
    if(user){
        if(user.profile.entreprise){
            this.next()
        }else{
            if(user.profile.admin){
                Router.go('/admin/'+user.username)
            }else{
                Router.go('/')
            }
        }
    }else{
        Router.go('/')
    }
}

let noEntreprise = function () {
    let user = Meteor.user()
    if(user){
        if(user.profile.entreprise){
            Router.go('/entreprise/'+user.username)
        }else{
            this.next()
        }
    }else{
        this.next()
    }
}

let onlyAdmin = function () {
    let user = Meteor.user()
    if(user){
        if(user.profile.admin){
            this.next()
        }else{
            if(user.profile.entreprise){
                Router.go('/entreprise/'+user.username)
            }else{
                Router.go('/')
            }
        }
    }else{
        Router.go('/')
    }
}





//Les routes auxquels seules les entreprise peuvent accéder
//C'est except qui est définit donc ça fait les routes auxquels les entreprises ne peuvent accéder ou quelque chose du genre
Router.onBeforeAction(onlyEntreprise, {
    only: [
        'entrepriseDashboard',
        'addPublication'
    ]
})

//Les routes auxquels seules les administrateurs peuvent accéder
Router.onBeforeAction(onlyAdmin, {
    only: [
        'adminDashboard',
        'settingsAdmin',
        'waitingPublication'
    ]
})


//Les routes auxquels les entreprises ne peuvent accéder
Router.onBeforeAction(noEntreprise, {
    only: [
        'accueil',
        'aide',
        'enregistrement',
        'connexion',
        'reinitialiser',
        'contact'
    ]
})
