let template = Template.contentHeader

template.helpers({
    home: () => {
        let user = Meteor.user().profile
        if(user.admin){
            return '/admin/'+user.name
        }
        return '/entreprise/'+user.name
    }
})