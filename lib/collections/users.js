Meteor.methods({
    phoneValidation: (number) => {
        check(number, String)
        let users = Meteor.users.find({}, {fields: {profile: true}}),
            result = false
        users.forEach(function (user) {
            if(user.profile.phone == number){
                result = true
            }
        })
        return result
    }
})


class UserInfo {

    constructor () {
        this.guestId
    }

    getId () {
        //headers.ready(this)
        if(!this.guestId){
            let head = headers.get(this),
                ip = head['x-forwarded-for']
            console.log(ip)
        }
    }
}

userInfo = new UserInfo()





/*
On va créer une methode de classe ici qui permet de determiner l'id de l'utilisateur qui vient de se connecter au site

Si l'utilisateur est connecté, on renvoit simplement son id dans la table users

Si l'utilisateur n'est pas connecté, on determine son ip, vérifie s'il est dans la table guest
S'il l'ait, on renvoit son id. Sinon, on insert son ip et renvoie l'id associé

ça servira exclusivement à l'accueil, nulle part ailleurs





Etant donné que les scripts du serveur ont accès à ces scripts dans lib et qu'en plus ils sont exécutés avant les scripts du serveur,
ça resout tout le problème :) B)

Donc avec l'id attribuer à l'utilisateur, on va alors faire la publication comme dit plus tôt











autre chose:
Quand un utilisateur s'incrit, j'ai pensé un moment qu'on allait recuperer l'id de son ip s'il était dans guest et le
remplacé par le nouveau id qu'on lui à attribuer quand consult

mais là, ça peut nuire si un utilisateur utilise par exemple l'apparail d'une autre personne pour s'inscrire

 */