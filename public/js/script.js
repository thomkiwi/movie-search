const form = document.querySelector('form')
const input = document.querySelector('input')

const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const movie = input.value;
  messageOne.textContent = 'Loading...'
  messageTwo.textContent = ''

  fetch('http://localhost:3000/movies?search=' + movie).then((response) => {
    response.json().then((data) => {

            console.log(data.data.Title);
            messageOne.textContent = data.data.Title;
            messageTwo.textContent = data.data.Year;
        })
      })
  })
