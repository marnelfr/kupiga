let template = Template.waitingPublication

template.helpers({
    goods: () => {
        return Goods.find()
    }
})