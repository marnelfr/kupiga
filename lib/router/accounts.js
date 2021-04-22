let logoutHook = function () {
    window.location.href = '/connexion'
}

let submitHook = function () {
    //Router.go('/accueil');
}

let postSubmitFunc = function (userId, info) {
    //check(userId, String)
    check(info, Object)
    let user = Meteor.users.findOne(userId)
    let profile = user.profile
    info = {
        profile: _.extend(profile, {
            admin: false
        })
    }
    Meteor.users.update(userId, {$set: info}, (error) => {
        if(error){
            console.log('error.reason')
        }
    })
}

AccountsTemplates.configure({
    defaultLayout: 'layout',

    // Behavior
    confirmPassword: true,
    enablePasswordChange: true, //TODO: a utiliser coté utilisateur connecté pourf le changement de mot de passe
    enforceEmailVerification: true, //TODO: a supprimer si j'arrive à ajouter les connexion avec facebook et autre
    focusFirstInput: true,
    overrideLoginErrors: true,
    sendVerificationEmail: false, //// TODO: J'arrive pas a evoyé le message meme en production donc...
    socialLoginStyle: "popup", // TODO: a changer en "redirect" si les popup persistent à ne pas marcher
    lowercaseUsername: true,

    // Apppearance
    showForgotPasswordLink: true,
    showLabels: false,

    //loginExpirationInDays: 15,


    // Client-side Validation
    continuousValidation: true, // TODO: a mettre à false pour jaugé son éffet sur la vitesse de l'app
    negativeValidation: true,
    positiveValidation: true, // TODO: le mieux à faire serait de le mettre à false. Mais bon... voyons comment ça se comporte d'abord
    negativeFeedback: true, // pour voir comment ça se comporte
    positiveFeedback: true, // pour voir comment ça se comporte
    showValidating: true, // pour voir comment ça se comporte

    // Privacy Policy and Terms of Use
    termsUrl: 'conditions', // TODO: a definir

    // Hooks
    onLogoutHook: logoutHook, // appeler lors de la déconnection de l'utilisateur
    onSubmitHook: submitHook, // func(error, state) est appelé lorsque pwdForm est submitté
//    preSignUpHook: preSubmitHook, // func(password, info) est appele lorsque l'inscription est submitté. donne accès à info.profile
    postSignUpHook: postSubmitFunc,

    // Redirects
    homeRoutePath: '/',
    redirectTimeout: 4000,


    //Texts
    texts: {
        title: {
            changePwd: "Changement de mot de passe",
            enrollAccount: "Enroll Title",
            forgotPwd: "Mot de passe oublie",
            resetPwd: "Reinitialisation de mot de passe",
            signIn: "Connexion",
            signUp: "Inscription",
            verifyEmail: "Verification d'E-mail",
        },

        button: {
            /*changePwd: "Password Text",
            enrollAccount: "Enroll Text",
            forgotPwd: "Forgot Pwd Text",
            resetPwd: "Reset Pwd Text",
            signIn: "Sign In Text",
            signUp: "Sign Up Text",*/
        },
        socialSignUp: "Register",
        socialIcons: {
            "meteor-developer": "fa fa-rocket"
        },

        info: {
            //emailSent: "Marnel info.emailSent",
            //emailVerified: "Marnel info.emailVerified",
            //pwdChanged: "Marnel info.passwordChanged",
            //pwdReset: "Marnel info.passwordReset",
            //pwdSet: "Marnel info.passwordReset",
            //signUpVerifyEmail: "Marnel Successful Registration! Please check your email and follow the instructions.",
            //verificationEmailSent: "Marnel A new email has been sent to you. If the email doesn't show up in your inbox, be sure to check your spam folder.",
        },

        inputIcons: {
            isValidating: "fa fa-spinner fa-spin",
            hasSuccess: "fa fa-check",
            hasError: "fa fa-times",
        },

        errors: {
            //accountsCreationDisabled: "Marnel Client side accounts creation is disabled!!!",
            //cannotRemoveService: "Marnel Cannot remove the only active service!",
            //captchaVerification: "Marnel Captcha verification failed!",
            //loginForbidden: "Marnel error.accounts.Login forbidden",
            //mustBeLoggedIn: "Marnel error.accounts.Must be logged in",
            //pwdMismatch: "Marnel error.pwdsDontMatch",
            //validationErrors: "Marnel Validation Errors",
            //verifyEmailFirst: "Marnel Please verify your email first. Check the email and follow the link!",
        },



    },
    forbidClientAccountCreation: false // TODO: doit être mise en false si l'inscription ne marche pas

})


let pwd = AccountsTemplates.removeField('password');
AccountsTemplates.removeField('email');
AccountsTemplates.addFields([
    {
        _id: "username",
        type: "text",
        displayName: "Pseudo",
        placeholder: "Pseudo",
        required: true,
        minLength: 5,
    },
    {
        _id: 'email',
        type: 'email',
        required: true,
        displayName: "Email",
        placeholder: "Email",
        re: /.+@(.+){2,}\.(.+){2,}/,
        errStr: 'Invalid email',
    },
    {
        _id: 'username_and_email',
        type: 'text',
        required: true,
        displayName: "Identifiant",
        placeholder: "Pseudo ou Email",
    },
    pwd
]);

AccountsTemplates.addField({
    _id: 'phone',
    type: 'tel',
    displayName: "Phone marnel",
    class: "",
    placeholder: "Contact",
    required: true,
    showValidating: false,
    func: function (number) {
        check(number, String)
        if(Meteor.isClient)
            return false
        return Meteor.call("phoneValidation", number)
    },
    minLength: 8,
    errStr: 'Numero de téléphone déjà utilisé!',
})

AccountsTemplates.addField({
    _id: "entreprise",
    type: "checkbox",
    displayName: "Compte entreprise",
});

AccountsTemplates.configureRoute('signUp', {
    name: 'enregistrement',
    path: '/inscription',
    template: 'inscription',
    redirect: '/connexion'
})




AccountsTemplates.configureRoute('signIn', {
    name: 'connexion',
    path: '/connexion',
    template: 'connexion',
    redirect: () => {
        let user = Meteor.user()
        if (user){
            if (user.profile.entreprise || user.profile.admin) {
                if (user.profile.entreprise) {
                    window.location.href = '/entreprise/'+user.username
                } else {
                    window.location.href = '/admin/'+user.username
                }
            } else {
                Router.go('/')
            }
        }
    }
})



AccountsTemplates.configureRoute('forgotPwd', {
    name: 'reinitialiser',
    path: '/reinitialiser',
    template: 'reinitialiser',
    redirect: () => {
        let user = Meteor.user()
        if (user){
            if (user.profile.entreprise || user.profile.admin) {
                if (user.profile.entreprise) {
                    window.location.href = '/entreprise/'+user.username
                } else {
                    window.location.href = '/admin/'+user.username
                }
            } else {
                Router.go('/')
            }
        }
    }
})



