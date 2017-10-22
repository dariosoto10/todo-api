// const MongoClient = require('mongodb').MongoClient
const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log(`Unable to connect to MongoDB server`)
    } else {
        console.log(`Connected to MongoDB server`)

        // db.collection('Todos').findOneAndUpdate({
        //     _id: new ObjectID('59ebf235a7a29fd21ade8d39')
        // }, {
        //     $set: {
        //         completed: false
        //     }
        // }, {
        //     returnOriginal: false
        // }).then((result) => {
        //     console.log(result)
        // })

        db.collection('Users').findOneAndUpdate({
            _id: '123'
        }, {
            $set: {
                age: 21
            }
        }, {
            $inc: {
                age: 1
            }
        }, {
            returnOriginal: false
        }).then((result) => {
            console.log(result)
        })
        db.close()
    }
})