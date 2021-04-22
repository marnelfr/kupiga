if(Meteor.users.find().count() === 0) {
    Meteor.users.insert(
        {
            "createdAt" : new Date(),
            "services" : {
                "password" : {
                    "bcrypt" : "$2a$10$diybk57fuc6wsTjJuc2QiO1nmOmDyDp1zu8pUNHNoJWAB3lvjMaru"
                }
            },
            "username" : "superuser",
            "emails" : [
                {
                    "address" : "nel@dev.fr",
                    "verified" : true
                }
            ],
            "profile" : {
                "phone" : "97403627",
                "admin" : true,
                "entreprise" : false,
                "name" : "Super User"
            }
        }
    )
}

//Pour exemple de la page d'accueil
if(Goods.find().count() === 0){
    Goods.insert({
        "libProd" : "BMW Cars",
        "descript" : "BMW est une structure de la place qui se professionalise dans la création de voiture et leur commercialisation.\nC'est vraiment une opportunité pour l'Afrique de devenir indépendant si ces produits prenait le pas sur ceux de l'Europe.",
        "valid" : true,
        "datePub" : new Date(),
        "statut" : "publié",
        "type" : "grande",
        "createdAt" : new Date(),
    })
    Goods.insert({
        "libProd" : "Mets africain",
        "descript" : "Tata Africa est installé depuis novembre 2015 et propose des mets afrains à ses clients. Beaucoup en ont fait l'expérience. soyez les prochains.\nEt si vous n'êtes pas encore convaincu de tout le bienfait qu'un bon repas peut vous procurer, nous vous invitons à faire un tour à notre restaurant",
        "valid" : true,
        "datePub" : new Date(),
        "statut" : "publié",
        "type" : "grande",
        "createdAt" : new Date(),
    })
    Goods.insert({
        "libProd" : "Huile de palme",
        "descript" : "Depuis le roi Guezo, on exploite l'huile de palme au Daxomey.\nAujourd'hui plus que jamais, son éfficacité se fait remarquer par tout les bien faits que ça procure à ses utilsateurs.",
        "valid" : true,
        "datePub" : new Date(),
        "statut" : "publié",
        "type" : "grande",
        "createdAt" : new Date(),
    })
    Goods.insert({
        "libProd" : "Linux",
        "descript" : "Linux est un système d'exploitation très complexe mais bien utile à ses utilsateurs.\nQuand vous savez l'utilisé, Linux ne peut que vous apporter le bonheur dans tout ce que vous faites.",
        "valid" : true,
        "datePub" : new Date(),
        "statut" : "publié",
        "type" : "grande",
        "createdAt" : new Date(),
    })
    Goods.insert({
        "libProd" : "NelDev",
        "descript" : "NelDev est un cabinet informatique composé de jeunes entrepreneurs, professionnels, très dynamiques et sélectionnés selon leur savoir-faire (expériences professionnelles) et savoir être (sens du travail en équipe, diplomatie).\nNelDev est spécialisé dans le déploiement des systèmes d’information (SMS, Web, Logiciel), l’optimisation et l’ingénierie logicielle.",
        "valid" : true,
        "datePub" : new Date(),
        "statut" : "publié",
        "type" : "grande",
        "createdAt" : new Date(),
    })
}

if(Quiz.find().count() === 0){
    Quiz.insert({
        "quiz": "Comment avez-vous connu le produit?",
        "niveau": 1,
        "goodsId": "xR4h8drE4sxpZKT3s",
        "createdAt" : new Date()
    })
    Quiz.insert({
        "quiz": "Quel mention donneriez-vous au produit?",
        "niveau": 1,
        "goodsId": "xR4h8drE4sxpZKT3s",
        "createdAt" : new Date()
    })


    Quiz.insert({
        "quiz": "Comment avez-vous connu le produit?",
        "niveau": 1,
        "goodsId": "qdqBHwErXeKe4qSv9",
        "createdAt" : new Date()
    })
    Quiz.insert({
        "quiz": "Quel mention donneriez-vous au produit?",
        "niveau": 1,
        "goodsId": "qdqBHwErXeKe4qSv9",
        "createdAt" : new Date()
    })
    Quiz.insert({
        "quiz": "Quand avez-vous utiliser le produit pour la dernière fois?",
        "niveau": 1,
        "goodsId": "qdqBHwErXeKe4qSv9",
        "createdAt" : new Date()
    })


    Quiz.insert({
        "quiz": "Comment avez-vous connu le produit?",
        "niveau": 1,
        "goodsId": "kEJrLqEHSQQmmTiug",
        "createdAt" : new Date()
    })
    Quiz.insert({
        "quiz": "Quel mention donneriez-vous au produit?",
        "niveau": 1,
        "goodsId": "kEJrLqEHSQQmmTiug",
        "createdAt" : new Date()
    })


    Quiz.insert({
        "quiz": "Comment avez-vous connu le produit?",
        "niveau": 1,
        "goodsId": "9BAySy2QMCcaJWAkf",
        "createdAt" : new Date()
    })


    Quiz.insert({
        "quiz": "Comment avez-vous connu le produit?",
        "niveau": 1,
        "goodsId": "PokTqqN5Wn9HAZMYM",
        "createdAt" : new Date()
    })
}

if(Answer.find().count() === 0){
    Answer.insert({
        "contenu": "Par un ami",
        "quizId": "2Q4SN28WKL8DRM7Ts"
    })
    Answer.insert({
        "contenu": "Grâce à la télévision",
        "quizId": "2Q4SN28WKL8DRM7Ts"
    })

    Answer.insert({
        "contenu": "Bien",
        "quizId": "B4Cr3gvmgNcQgCd82"
    })
    Answer.insert({
        "contenu": "Mauvais",
        "quizId": "B4Cr3gvmgNcQgCd82"
    })



    Answer.insert({
        "contenu": "Par un ami",
        "quizId": "k2ZDKEphReP7ixAwM"
    })
    Answer.insert({
        "contenu": "Grâce à la télévision",
        "quizId": "k2ZDKEphReP7ixAwM"
    })

    Answer.insert({
        "contenu": "Bien",
        "quizId": "aGgJpToH4d9Ps37Lx"
    })
    Answer.insert({
        "contenu": "Mauvais",
        "quizId": "aGgJpToH4d9Ps37Lx"
    })

    Answer.insert({
        "contenu": "Il y a une semaine",
        "quizId": "pCqosujHpgWpEPayj"
    })
    Answer.insert({
        "contenu": "Il y a deux semaines",
        "quizId": "pCqosujHpgWpEPayj"
    })





    Answer.insert({
        "contenu": "Par un ami",
        "quizId": "46QR3up9J9zJoK6ba"
    })
    Answer.insert({
        "contenu": "Grâce à la télévision",
        "quizId": "46QR3up9J9zJoK6ba"
    })

    Answer.insert({
        "contenu": "Bien",
        "quizId": "ppbDPfzAq9zDgRXZy"
    })
    Answer.insert({
        "contenu": "Mauvais",
        "quizId": "ppbDPfzAq9zDgRXZy"
    })



    Answer.insert({
        "contenu": "Par un ami",
        "quizId": "iFeaqFyu4vqebmrLD"
    })
    Answer.insert({
        "contenu": "Grâce à la télévision",
        "quizId": "iFeaqFyu4vqebmrLD"
    })




    Answer.insert({
        "contenu": "Par un ami",
        "quizId": "iPEkzBQkMstKkhGxc"
    })
    Answer.insert({
        "contenu": "Grâce à la télévision",
        "quizId": "iPEkzBQkMstKkhGxc"
    })





}