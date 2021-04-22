import { Email } from 'meteor/email'


Meteor.methods({
    sendEmail: (to, from, subject, text) => {
        check([to, from, subject, text], [String]);
        this.unblock();

        Email.send({
            to: to,
            from: from,
            subject: subject,
            text: text
        });
    },
    sendHtmlMail: (to, from, subject, file, options) => {
        check([to, from, subject, file], [String]);
        check(options, Object);
        this.unblock();

        SSR.compileTemplate('htmlEmail', Assets.getText(file));

        Email.send({
            to: to,
            from: from,
            subject: subject,
            html: SSR.render('htmlEmail', options)
        });
    }
});