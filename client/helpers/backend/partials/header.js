let template = Template.backHeader

template.helpers({
    onLoading: () => {
        return Meteor.loggingIn()
    },
    username: () => {
        let user = Meteor.user().profile
        let name = user.name
        if(user.name.indexOf(' ') === -1){ //inutile de créer les champs prenom et nom pour l'utilisateur. On va simplement utilser name qu'on va mettre ajour quand l'utilisateur va lui même définit sont nom et prénom
            name = user.name + ' ' + user.name
        }
        return name
    },
    role: () => {
        let user = Meteor.user().profile
        if(user.admin)
            return "Administrateur"
        if(user.entreprise)
            return "Entreprise"
    }
})

template.events({
    'click #logoback': (e) => {
        e.preventDefault()
        window.location.href = '/'
    }
})

