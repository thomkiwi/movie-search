const express = require('express');
const path = require('path')
const movies = require('../src/movies')

const app = express();
const port = process.env.PORT || 3000;

const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(__dirname + '../public'));
app.use(express.static(publicDirectoryPath))

app.set('views', __dirname + '../../views');
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
    .catch(error => {
      console.log(error.message);
  });
})

app.listen(port, () =>{
  console.log(`listening on port ${port}`)
})
