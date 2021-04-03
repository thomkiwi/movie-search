const fetch = require("node-fetch")
require('dotenv').config()

const key = process.env.KEY;

async function getMovies(movie) {
  const url = `http://www.omdbapi.com/?t=${movie}&apikey=${key}`;
  let response = await fetch(url);

   if (!response.ok) {
     throw new Error(`HTTP error! status: ${response.status}`);
   }

   let data = await response.json();
   return data
}

module.exports = getMovies
