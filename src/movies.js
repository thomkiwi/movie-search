const fetch = require("node-fetch")
require('dotenv').config()

const key = process.env.OMDB_KEY;

const getMovies = async (movie) => {
  const url = `http://www.omdbapi.com/?t=${movie}&apikey=${key}`;
  let response = await fetch(url);

    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }

   let data = await response.json();
   return data;
}

module.exports = getMovies
