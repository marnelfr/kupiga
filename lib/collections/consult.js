Consult = new Mongo.Collection('consult')

Meteor.methods({
    ie: () => {
        
    }
})


Consult.allow({ // TODO: a perfectionner après
    insert: (userId, file) => {
        return true
    },
    update: (userId, file) => {
        return true
    },
    remove: (userId, file) => {
        return false
    }
})
