const express = require('express');
const path = require('path')
const movies = require('../src/movies')

const app = express();

const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(__dirname + '../public'));
app.use(express.static(publicDirectoryPath))

app.set('view engine', 'hbs')


app.get('/', (req, res) => {
  res.render('index')
})

app.get('/movies', (req, res) => {

  movies(req.query.search)
    .then((data) => {
      res.send({
        data: data,
        search: req.query.search
      })
    })
    .catch(e => {
    console.log('There has been a problem with your fetch operation: ' + e.message);
  });
})


app.listen(3000, () =>{
  console.log('listening on port 3000')
})
