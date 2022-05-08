const express = require('express');
const app = express();
const mongoose = require("mongoose");
const db = mongoose.connection;
const { MongoClient, ServerApiVersion } = require('mongodb');
const config = require('./config/dev');
const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const cors = require("cors");
const PORT = process.env.PORT || 3001;
var ObjectId = require('mongodb').ObjectId;


app.use(cors());
app.use(function(request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.set('view engine', 'ejs');
mongoose.connect(config.DB_URI, function(err, db){
    if (err) throw err;
    console.log('Connected to database');
});
app.get('/api/films', function(req, res){
    db.collection('movies').find({ type : "Film"}).sort({ nbVotes: -1 }).toArray(function(err, users){
        if (err) throw err;
        res.json(users)
        
        
    })
})

app.get('/api/series', function(req, res){
    db.collection('movies').find({ type : "Série"}).sort({ nbVotes: -1 }).toArray(function(err, users){
        if (err) throw err;
        res.json(users)
        
        
    })
})


app.get('/movies/:id', function(req, res){
    db.collection("movies").findOne({ _id: ObjectId(`${req.params.id}`) }, function(err, users){
        if (err) throw err;
        res.json(users)

    })
})

app.get('/connect/:username/:password', function(req, res){
    db.collection('users').findOne({username: req.params.username, password: req.params.password}, function(err, data){
        res.json(data)
    })
})
app.get('/api/checkifuserexist/:username/', function(req, res){
    db.collection('users').findOne({username: req.params.username}, function(err, data){
        res.json(data)
    })
})

app.get('/register/:username/:password', function(req, res){
    db.collection('users').insertOne({
        username: req.params.username,
        password: req.params.password,
        nbVotes: 0,
        avatar: `https://ui-avatars.com/api/?name=${req.params.username}`,
        grade: 'Membre'        
    }, function(err, data){
        res.json(data)
    })
})





























app.listen(PORT, function(){
     console.log("Node Js Server is Running on port " + PORT);
 })