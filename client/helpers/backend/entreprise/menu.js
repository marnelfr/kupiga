let template = Template.entrepriseMenu

let pageAff = () => {
    let page = document.querySelector('.pageaff')
    let h = window.innerHeight
    h = h*0.75
    page.setAttribute('style', "min-height:"+h+"px")
}

template.onRendered(() => {
    pageAff()
})

template.events({
    'click .box-body': () => {
        pageAff()
    }
})


template.helpers({
    username: () => {
        let user = Meteor.user().profile
        let name = user.name
        if(user.name.indexOf(' ') === -1){ //inutile de créer les champs prenom et nom pour l'utilisateur. On va simplement utilser name qu'on va mettre ajour quand l'utilisateur va lui même définit sont nom et prénom
            name = user.name + ' ' + user.name
        }
        return name
    },
    home: () => {
        let user = Meteor.user().profile
        if(user.admin){
            return '/admin/'+user.name
        }
        return '/entreprise/'+user.name
    }
})
