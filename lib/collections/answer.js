Answer = new Mongo.Collection('answer')

Meteor.methods({
    ia: () => {
        
    }
})




Answer.allow({ // TODO: a perfectionner après
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