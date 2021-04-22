let template = Template.backFooter

template.helpers({
    date : () => (new Date()).getFullYear()
})