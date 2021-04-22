let template = Template.header

template.helpers({
    user : () => Meteor.user().profile,
    admin: () => Meteor.user().profile.admin,
})

template.events({
    'click #gotolte': (e) => {
        e.preventDefault()
        window.location.href = '/admin/'+Meteor.user().username
    },
    'keydown #search-key': (e) => {
        if(window.location.pathname !== '/recherche'){
            Router.go('/recherche')
        }
    }
})

