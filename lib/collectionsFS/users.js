Photo = new FS.Collection("photo", {
    stores: [new FS.Store.FileSystem("photo", {
        path: "../../private/photos",
        maxBusyTries: 10
    })]
})

Photo.allow({
    'insert': () => {
        return true
    }
})