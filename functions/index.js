const functions = require("firebase-functions");
const express = require('express')
const path = require('path')
const admin = require('firebase-admin');

admin.initializeApp();

const app = express()
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, '../public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
})


app.get('/:name/:num', (req, res) => {
    var name = req.params.name
    var num = req.params.num

    console.log(req.params)

    var ref = admin.database().ref(`/anime/${name}/${num}`)
    ref.on("value", function(data) {
        data = data.val()
        console.log(data)

        if (data) {
            res.render('anime', {title: name, num: num, url: data.url})
        } else {
            res.send(`${name}/${num} not found.`)
        }
    })

});

exports.app = functions.https.onRequest(app);
