let template = Template.navigation

template.helpers({
    noUser : () => !Meteor.user()
})