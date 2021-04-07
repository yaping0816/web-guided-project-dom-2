console.log('project is up')

// 🔥 What is propogation --- When we look at the DOM tree, we can see the child elements are nested inside parent elements, and if we trigger an event on a child element, we are also triggering the same event on every parent element all the way up to the window. 😈 For example, a click on an image doesn't only generate a clik for the correspongding <img>, but also for the parent <a>, for the grandparent <li> and so on, going all the way up through all the element's ancestors, before terminating at the window object

// 💥 What is event bubbling --- It relates to the order in which event handlers are called when one element is nested inside a second element, and boh element have registered a listener for the same event 🤡 (a click, for example)



// 👉 TASK 1- Select the following elements from the DOM:

// aspect of event driven programming, insted of write our program at the top of our script, we schedule a function to execute on some event. Here when the window load event fires (when the window loads), run this function. This fix our problem because any code here(line 8 and 9) runs only after the dom has fully constructed.

window.onload = function (){
// probably not a good idea
}

window.addEventListener('load', function (event){
    // better way
     // ALL OF YOUR PROGRAM HERE
    // if you can't use defer atrribute for example
    // or if you want to make absolutely sure that a piece of code runs after the load event fires on the tab (whihc would mean the DOM is contructed)
    // const launchButton = document.querySelector('#launchButton');
    // console.log(launchButton);
})

// A- BUTTONS
const launchButton = document.querySelector('#launchButton');
// console.log(launchButton); //Two way to make this work, one is use onload funstion see line 3, the other is to use defer keywoed in html file
const confirmButton = document.querySelector('#confirmButton');
const cancelButton = document.querySelector('#cancelButton')

// B- MESSAGES
const successMessage = document.querySelector('.report success off');
const failureMessage = document.querySelector('.report failure off');

// C- MODAL
const modal = document.querySelector('.modal');


// 👉 TASK 2- Demo handling click events on button#launchButton, using:
//  A- HTML inside index.html (old way)
// adding 🦴onclick="console.log('do not do this')"🦴 inside of button tag before id

//  B- The DOM's element.onclick attribute (also old way)
launchButton.onclick = function (){
    console.log('old way');
}
// B overwirte the A, onlt console.log 'old way'

//  C- element.addEventListener('click', callback) --- (new better way)
launchButton.addEventListener('click', function(event){
    // handle the click event
    console.log('much better');
} )
// C is a much better way than B, b/c it doesn't overwrite the others, with B if we have more than one scripts on the page that trying to do the same thing, to overwrite each other, they would mess up

// 👉 TASK 3- Create a function that launches!
// It should open the confirmation modal.
// Add it as an event listener for click events on the launch button.


// 👉 TASK 4- Create a function to confirm the launch.
// It should close the modal and display a success report.
// Add it as a listener for clicks on the confirmation button.


// 👉 TASK 5- Create a function to cancel the launch.
// It should close the modal and display a failure report.
// Add it as a listener for clicks on the cancellation button.


// 👉 TASK 6- Create a function that closes the modal if
// the user hits the Escape key on their keyboard.
// Add it as an event listener for 'keydown' events on document.


// 👉 TASK 7- Add to ALL ELEMENTS ON THE PAGE an event listener for click events.
// It should console.log the target 🎯 of the event.
// It should also console.log the CURRENT target 🧭 of the event.
// Play with stopPropagation and stopImmediatePropagation.


// 👉 TASK 8- [STRETCH] Create helper functions to make the code
// more readable in tasks 3, 4, 5, 6
function openModal() {

}

function closeModal() {

}

function killReports() {

}


// 👉 TASK 9- [STRETCH] Using the mouseover event on 'document',
// log to the console the X and Y coordinates
// of the mouse pointer, as it moves over the screen.
