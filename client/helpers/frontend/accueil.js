let template = Template.accueil

template.onCreated(() => {

    //console.log(userInfo.getUserId())

    //Ici, on aura juste a appeler la methode de la classe qui sera crée dans users.js

})


Template.accueil.events({
    'load': function () {

    },
    /*'mouseover .btn-8': (e) => {
        let elmnt = e.currentTarget.firstElementChild
        back = elmnt.style.background
        backSize = elmnt.style.backgroundSize
        if(back.toString().length > 0){
            elmnt.style.background = ''
            elmnt.style.backgroundSize = ''
        }
    },
    'mouseout .btn-8': (e) => {
        let elmnt = e.currentTarget.firstElementChild
        if(back.toString().length > 0){
            elmnt.style.background = back
            elmnt.style.backgroundSize = backSize
        }
    }*/
})