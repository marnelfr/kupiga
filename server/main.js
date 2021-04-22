import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {

    process.env.HTTP_FORWARDED_COUNT=true

    smtp = {
        username: 'marnognac',
        password: ''
    }
    //process.env.MAIL_URL='smtps://marnognac%40gmail.com:'+ encodeURIComponent(smtp.password) +'@smtp.gmail.com:465/'

});

Meteor.methods({
    'userIp': function () {
    headers.ready(this)
    //Determination de l'utilisateur et stockage de son id
    let id
    if(!Meteor.userId()){
        let head = headers.get(this),
            ip = head['x-forwarded-for']

        let guest = Guest.findOne({ip: ip})
        if(!guest){
            guest = Guest.insert({ip: ip})
        }else{
            if(guest.ip !== ip){
                guest = Guest.insert({ip: ip})
            }else{
                guest = guest._id
            }
        }
        id = guest
    }else{
        id = Meteor.userId()
    }
    return id
}
})