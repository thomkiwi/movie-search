const form = document.querySelector('form');
const input = document.querySelector('input');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const search = input.value;

  fetch('/movies?search=' + search).then((response) => {
    response.json().then((data) => {

      const movie = document.querySelector('.movie').style.visibility = "visible";

            title.innerHTML = `<a href="https://www.imdb.com/title/${data.data.imdbID}/" target="_blank" rel="noopener noreferrer">${data.data.Title}</a>`;
            year.textContent = `(${data.data.Year})`;
            rotten_tomatoes.textContent = "Rotten Tomatoes";
            imdb.textContent = "IMDB";
            metacritic.textContent = "Metacrtic";

            rating1.textContent = "n/a";
            rating1.textContent = data.data.Ratings[0].Value;
            rating2.textContent = "n/a";
            rating2.textContent = data.data.Ratings[1].Value;
            rating3.textContent = data.data.Ratings[2].Value;

            label_director.textContent = "Director:";
            label_writer.textContent = "Writer(s):";
            label_actors.textContent = "Actors:";
            label_plot.textContent = "Plot:";
            director.textContent = data.data.Director;
            writer.textContent = data.data.Writer;
            actors.textContent = data.data.Actors;
            plot.textContent = data.data.Plot;

        })
      })
  })
