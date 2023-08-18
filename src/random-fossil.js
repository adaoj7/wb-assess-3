console.log('Hello World');
import axios from "axios";

async function randomFossil() {
   const url =  '/random-fossil.json'
   const response = await axios.get(url)
   console.log(response)
   const img = response.data.img
   const name = response.data.name
   console.log(name)
   console.log(img)
   document.querySelector('#random-fossil-image').innerHTML = `<img src=${img}/>`
   document.querySelector('#random-fossil-name').innerText = name
}

const button = document.querySelector('#get-random-fossil')
button.addEventListener('click', randomFossil)