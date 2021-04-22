let template = Template.settingsAdmin

template.onRendered(() => {
    let page = document.querySelector('.pageaff')
    let h = window.innerHeight
    h = h*0.75
    console.log(h)
    page.setAttribute('style', "min-height:"+h+"px")
})

template.helpers({

})