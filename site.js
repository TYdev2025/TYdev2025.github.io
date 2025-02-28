
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