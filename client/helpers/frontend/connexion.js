let template = Template.connexion

template.onRendered(function () {
    let fcontrol = document.querySelectorAll('.form-control')
    fcontrol.forEach(function (fc) {
        fc.classList.remove('form-control')
    })

    let all = document.querySelector('.agileinfo_signin')
    all.style.paddingTop = 3+"px"
    all.style.paddingBottom = 1+"px"

})

template.helpers({
    atDisabled: () => AccountsTemplates.disabled()
})