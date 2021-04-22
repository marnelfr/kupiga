let template = Template.backMenu

template.helpers({
    onLoading: () => {
        return Meteor.loggingIn()
    },
    admin: () => {
        return Meteor.user().profile.admin
    },
    home: () => {
        let user = Meteor.user().profile
        if(user.admin){
            return '/admin/'+user.name
        }
        return '/entreprise/'+user.name
    }
})