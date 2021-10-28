import express from 'express';

const app = express();
const port = 3000;
const User = require('./models/users');
const bodyParser= require('body-parser')
const { MongoClient } = require('mongodb');
const cors = require('cors');

app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))

/*
MongoClient.connect('mongodb+srv://jute:IurMib4GDatUYh8Q@cluster0.uvvti.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', (err, client) => {
  if (err) return console.error(err)

  const db = client.db('jirama');
  const usersCollection = db.collection('users');
  console.log('Connected to Database');
  app.post('/user', (req, res) => {
    usersCollection.insertOne(req.body)
      .then(result => {
        console.log(result)
      })
      .catch(error => console.error(error))
  });
  

});

*/
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

MongoClient.connect('mongodb+srv://jute:IurMib4GDatUYh8Q@cluster0.uvvti.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then((client) => {
    console.log('Connexion à MongoDB réussie !');
    const db = client.db('jirama');
    const usersCollection = db.collection('users');
    
    //post user
    app.post('/user', (req, res) => {
      console.log(res);
      
      usersCollection.insertOne(req.body)
        .then(result => {
          //res.redirect('http://localhost:4200/connexion')
        })
        .catch(error => console.error(error))
    });
    //get users
    app.get('/user', (req, res) => {
      db.collection('users').find().toArray()
        .then(results => {
          res.status(200).json(results)
        })
        .catch(/* ... */)
    })
    //get user
    app.get('/user/:mail/:password', (req, res) => {
      db.collection('users').findOne({ mail: req.params.mail, password: req.params.password })
        .then(results => {
          res.status(200).json(results)
        })
        .catch(/* ... */)
    })

    app.listen(port, () => {
      return console.log(`server is listening on ${port}`);
    });
  })
  .catch(() => console.log('Connexion à MongoDB échouée !'));

  //post user
/*
  app.post('/user', (req, res) => {
    console.log(req.body)
  })

  app.get('/', function(req, res) {
    res.send('Hello World')
  });
  */
