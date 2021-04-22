Images = new FS.Collection("images", {
    stores: [new FS.Store.FileSystem(
        "images",
        {
            maxBusyTries: 10,
            transformWrite: (file, readStream, writeStream) => {
                readStream.pipe(writeStream)
            }
        },
        {
            filter: {
                maxSize: 10485760,
                allow: {
                    contentTypes: ['image/*'],
                    extensions: ['png', 'jpg', 'jpeg']
                },
                onInvalidate: (message) => {
                    if(Meteor.isClient) alert(message)
                    else console.log(message)
                }
            }
        }
    )]
})

class goodsImages {

    constructor() {
        this.p //principal
        this.i //image
    }


    getUrls(id) {
        let tab = []
        let images = Images.find({goodsId: id})
        images.forEach(function (img) {
            tab.push(img.url())
        })
        return tab
    }


    getFirstImageUrl(id) {
        return this.getUrls(id)[0]
    }












    getImagesUrl() {
        if(!this.i){
            let tab = []
            let principal = this.getPrincipal()
            console.log(principal)
            let images = Images.find({goodsId: principal})
            images.forEach(function (img) {
                tab.push(img.url())
            })
            this.i = tab
        }
        return this.i
    }

    getLastImageUrl() {
        return this.getImagesUrl()[2]
    }

    getPrincipal(Goods) {
        if(!this.p){
            this.p = goods.getPrincipal(Goods)
        }
        return this.p
    }

    getHeight(node = document) {
        return node.outerHeight()
    }

    getWidth(node = document) {
        return node.outerWidth()
    }

    getUrl (goodsId) {
        let tab = []
        let images = Images.find({goodsId: goodsId})
        images.forEach(function (img) {
            tab.push(img.url())
        })
        return tab
    }

}

images = new goodsImages()

Images.allow({
    insert: (userId, file) => {
        return true
    },
    update: (userId, file) => {
        return true
    },
    remove: (userId, file) => {
        return true
    },
    download: (userId, file) => {
        return true;
    }
})

Meteor.methods({
    imageInsert: (goodsId) => {
        let errors = [], result
        check(Meteor.userId(), String)
        let img1 = new FS.File($('#img1')[0].files[0])
        img1.userId = Meteor.userId()
        img1.goodsId = goodsId

        let img2 = new FS.File($('#img2')[0].files[0])
        img2.userId = Meteor.userId()
        img2.goodsId = goodsId

        let img3 = new FS.File($('#img3')[0].files[0])
        img3.userId = Meteor.userId()
        img3.goodsId = goodsId

        Images.insert(img1, (error) => {
            if(error) errors[1] = error.reason
        })
        Images.insert(img2, (error) => {
            if(error) errors[2] = error.reason
        })
        Images.insert(img3, (error) => {
            if(error) errors[3] = error.reason
        })
        if(errors.length >= 1){
            result = {
                success: false,
                errors: errors
            }
        }else{
            result = {
                success: true
            }
        }
    }
})
