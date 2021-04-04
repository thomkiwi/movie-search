const form = document.querySelector('form')
const input = document.querySelector('input')

const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const movie = input.value;
  // messageOne.textContent = 'Loading...'

  fetch('/movies?search=' + movie).then((response) => {
    response.json().then((data) => {
            title.textContent = data.data.Title;
            rotten_tomatoes.textContent = "Rotten Tomatoes";
            imdb.textContent = "IMDB";
            metacritic.textContent = "Metacrtic";
            rating1.textContent = data.data.Ratings[0].Value;
            rating2.textContent = data.data.Ratings[1].Value;
            rating3.textContent = data.data.Ratings[2].Value;
            // movie_img.textContent = data.data.Poster;
            // messageOne.textContent = ''
            label_director.textContent = "Director";
            label_writer.textContent = "Writer";
            label_actors.textContent = "Actors";
            label_plot.textContent = "Plot";
            director.textContent = data.data.Director;
            writer.textContent = data.data.Writer;
            actors.textContent = data.data.Actors;
            plot.textContent = data.data.Plot;
        })
      })
  })
