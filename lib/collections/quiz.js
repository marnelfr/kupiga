import { check } from 'meteor/check'

Quiz = new Mongo.Collection('quiz')

Meteor.methods({
    quizInsert: (quiz = {}) => {
        check(Meteor.userId(), String)
        check(quiz, Object)


    }
})