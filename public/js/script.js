const form = document.querySelector('form');
const input = document.querySelector('input');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const search = input.value;

  fetch('/movies?search=' + search).then((response) => {
    response.json().then((dataObj) => {
      const data = dataObj.data;

      const { Title, Year, imdbID, Director, Writer, Actors, Plot, Ratings, Type  } = data;
      
      if (Type !== "movie"){
        // handle when it's not a movie 
        title.textContent = `No movie found with title of '${search}'. Please search again.`;
        title.style.visibility = "visible";
        year.style.visibility = "hidden";

        rotten_tomatoes.textContent = "Rotten Tomatoes";
        imdb.textContent = "IMDB";
        metacritic.textContent = "Metacrtic";

        rating1.textContent = "-";
        rating2.textContent = "-";
        rating3.textContent = "-";

        label_director.textContent = "Director:";
        label_writer.textContent = "Writer(s):";
        label_actors.textContent = "Actors:";
        label_plot.textContent = "Plot:";
        director.textContent = "-";
        writer.textContent = "-";
        actors.textContent = "-";
        plot.textContent = "-";
      } else {
      const movie = document.querySelector('.movie').style.visibility = "visible";

            title.innerHTML = `<a href="https://www.imdb.com/title/${imdbID}/" target="_blank" rel="noopener noreferrer">${Title}</a>`;
            year.textContent = `(${Year})`;
            rotten_tomatoes.textContent = "Rotten Tomatoes";
            imdb.textContent = "IMDB";
            metacritic.textContent = "Metacrtic";

            rating1.textContent = Ratings[0].Value;
            rating2.textContent = Ratings[1].Value;
            rating3.textContent = Ratings[2].Value;

            label_director.textContent = "Director:";
            label_writer.textContent = "Writer(s):";
            label_actors.textContent = "Actors:";
            label_plot.textContent = "Plot:";
            director.textContent = Director;
            writer.textContent = Writer;
            actors.textContent = Actors;
            plot.textContent = Plot;
      } 
        })
      })
  })
