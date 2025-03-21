
// Week 2

document.body.style.backgroundColor = 'lightgray'
document.title = "Thane's HomePage"

const image = document.querySelector('h2')
image.style.border = '1px solid red'

const firstP = document.querySelector('p')
console.log(firstP)
firstP.textContent = 'My name is Thane and I am still new to the programming area of my program. You are probably wondering how and why I got here. Knowledge and Passion is why, knowledge I wish to benefit my dream job and passion that inspires my dream job. This dream job I speak of is the livelyhood of a successfully creative author.'

const mainContentSection = document.querySelector('p')
mainContentSection.style.color = 'darkblue'

const font = document.getElementById("fontChange")
font.style.fontFamily = "Arial, sans-serif";

/* const fontOl = document.getElementById("fontForOl")
fontO1.style.fontFamily = "Arial, sans-serif"; */

const link = document.querySelector('footer a')

// Week 3

// Add a <div> element to your page with an id of welcome. Use the code shown above, in combination with your own code, to add a welcome message to the page. The message should be different, based on the time of day that the page is loaded.

const hours = new Date().getHours('') // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

let welcomeMessage; // A PATHWAY for the Welcome Message

if (isMorning) {
    welcomeMessage = "Good Morning";
}
else if (isAfternoon) {
    welcomeMessage = "Good Afternoon";
}
else if (isEvening) {
    welcomeMessage = "Good Evening";
}

document.getElementById("welcome").innerText = welcomeMessage; // Inserts the ID(#welcome) and just type "welcome" when referring to said ID.

const welcomeFont = document.querySelector('#welcome')
welcomeFont.style.fontFamily = "Arial, sans-serif";

// Week 4

// You are going to send me a "secret" message, using localStorage. Modify your site.js file so that when it runs, it adds a message to localStorage. The message should be a string, and it can be anything you want. It could be a simple message, or a joke, or a quote, or anything else you want me to see.

//You must use the key 'It's a secret to everybody.'. It must be spelled exactly like that, with the same capitalization and punctuation. If not, my code won't be able to find it. If I can't find it, you'll get a zero score, and a comment that says, "Message not received. Try again."

localStorage.setItem("It's a secret to everybody.",'Secret Message!');
console.log(localStorage.getItem("It's a secret to everybody."));

// Week 6 

/* Add code to the JavaScript file to make the carousel work as described above. Use addEventListener to listen for clicks on the previous and next buttons.

To shift the images to the left, you can increment the currentImage variable. To shift the images to the right, you can decrement the currentImage variable. Then, call the showImages function to update the images displayed in the carousel.

Use (anonymous) arrow functions to handle the click events.

Note that the first three images in the urls array are the images that should be displayed in the carousel. You can add or modify the images in the array to display different images.

Use JavaScript's built-in setInterval function to automatically change the images every 5 seconds. It works just like setTimeout, but it repeats the function every time the interval is reached. */

const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')

let currentImage = 0
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}

showImages() // A METHOD/FUNCTION necessary for the images to ACTUALLY show up UPON REFRESHING THE SCREEN

const nextIMG = () => { // Code for when clicking the next button
    currentImage++ // Increment / Shifts the images RIGHT
    showImages() // Calling the METHOD/FUNCTION necessary for the images to dynamically be interacted
}

const prevIMG = () => { // Code for when clicking the previous button
    currentImage-- // Decrement / Shifts the images LEFT
    showImages() // Calling the METHOD/FUNCTION necessary for the images to dynamically be interacted
}

const prevButton = document.getElementById('prev') // prev id
const nextButton = document.getElementById('next') // next id

nextButton.addEventListener('click', () => nextIMG())
prevButton.addEventListener('click', () => prevIMG())

// Code to MANUALLY run ONCE after 5 seconds
setTimeout(() => nextIMG(), 5000)

// Code to AUTOMATICALLY run EVERY 5 seconds
setInterval(() => nextIMG(), 5000)

// Week 7

// In this assignment, you will start building a to-do list for your homepage. It will not be a full-featured to-do list, but it will allow the user to add items.
// The to-do list should allow the user to add items to the list.
// The list should be saved to local storage so that the items persist even after the page is reloaded.

document.addEventListener('DOMContentLoaded', () => {
    const newListItem = document.querySelector('.todo-list') // class = todo-list // The ul itself
    const toDoInput = document.getElementById('new-todo') // id = new-todo // Text Input
    const toDoButton = document.getElementById('button-todo') // id = button-todo // Add Button

    // Save the List to Local Storage
    const getTodos = () => JSON.parse(localStorage.getItem('todo-list')) || [] // Gets
    const saveTodos = (todos) => localStorage.setItem('todo-list', JSON.stringify(todos)) // Saves
    
    // Function to RENDER the todo list
    const renderTodos = () => {
        const todos = getTodos() // Get stored todos
        newListItem.innerHTML = '' // Clear the li's before we recreate them
        todos.forEach(todo => addTodoToDOM(todo.text)) // Loop through and add items
    }

    // Function to ADD a NEW ITEM to the DOM
    const addTodoToDOM = (text) => {
        // Create and Add New List Items to the DOM
        const li = document.createElement('li') // Creates the li element for the items to be displayed in
        li.textContent = text // Set its text content
        li.classList.add('todo') // Add a Class name "todo" to the List item // .todo
        newListItem.appendChild(li) // Adds the <li> to <ul class="todo-list">
    }

    // Function to Adding a New ToDo
    const addNewTodo = () => {
        const newTodoText = toDoInput.value.trim()
        if (newTodoText) {
            const todos = getTodos() // Get the latest to-do list from Local Storage
            todos.push({ text: newTodoText, completed: false }) // Add a New Item to the list // Also an Array
            saveTodos(todos) // Saves the new To Do item
            input.value = '' // Clear Input Field
            renderTodos() // Initial render for when the Add To Do button is clicked
        }
    }

    toDoButton.addEventListener("click", addNewTodo) // Event listener for the Button (Button Click)
    renderTodos() // Initial render when page loads
})

// Week 8

// In this assignment you are going to use the fetch api, along with the PokeAPI to display a random pokemon image on your homepage.
// As you saw in the unit exercise, you can use the PokeAPI to get information about pokemon. This includes images of the pokemon, which are refered to as "sprites."
// The sprites object in the response from the API contains a front_default property. This is what I recommend you use to display the image of the pokemon. For full documentation visit the PokeAPI docs.

// Specifications:
// Modify the html of your homepage to include a div element that will hold the image of the pokemon.
// Create an arrow function called getRandomPokemon that will fetch a random pokemon from the PokeAPI. You can use the following URL to get a random pokemon:
// const url = 'https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 150)
// Create an arrow function called renderPokemon that takes a pokemon object as a parameter. This function should create an image element and append it to the DOM.
// Do not have your getRandomPokemon function call the renderPokemon function. Instead, have your getRandomPokemon function return the pokemon object. Then, call the renderPokemon function with the returned object.
// Use Async/Await to handle any asynchronous code.

const getRandomPokemon = async () => { // => <-- Arrow Function
    const url = 'https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 150)
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error('Network response is unstable')
        }
        const json = await response.json() // Parses the Pokemon Object
        return json // return Pokemon Object
    }
    catch (error) {
        console.error('There was an issue regarding te fetch operation')
    }
}

const renderPokemon = (json) => {
    const divPoke = document.querySelector('#divPoke')
    divPoke.innerHTML = '' // Clear the previous Pokemon
    const img = document.createElement('img')
    img.src = json.sprites.front_default // url of the image from the 'front_default' property
    img.alt = json.name // name of the pokemon
    divPoke.append(img)
}

getRandomPokemon().then(json => { // To Fetch and Display a Random Pokemon
    if (json) {
        renderPokemon(json)
    }
})