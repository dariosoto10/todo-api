// const MongoClient = require('mongodb').MongoClient
const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log(`Unable to connect to MongoDB server`)
    } else {
        console.log(`Connected to MongoDB server`)

        db.collection('Users').insertOne({
            _id: `123`,
            name: `Dario`,
            age: 22,
            location: `Maracaibo`
        }, (err, result) => {
            if(err) {
                return console.log(`Unable to insert`)
            }
            console.log(result.ops)
        })

        db.close()
    }
})