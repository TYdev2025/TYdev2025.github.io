
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