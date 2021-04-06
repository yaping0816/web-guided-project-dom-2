console.log("project is up");

// 👉 TASK 1- Select the following elements from the DOM:

// A- BUTTONS
const launchButton = document.querySelector("#launchButton");
const confirmButton = document.querySelector("#confirmButton");
const cancelButton = document.querySelector("#cancelButton");

// B- MESSAGES
const successMessage = document.querySelector("h1.success");
const failureMessage = document.querySelector("h1.failure");

// C- MODAL
const modal = document.querySelector("div.modal"); // could be just .modal - either way

// 👉 TASK 2- Demo handling click events on button#launchButton, using:
//  A- HTML inside index.html
//  B- The DOM's element.onclick attribute

launchButton.onclick = function (event) {
  console.log("about to smash the old school");
};

//  C- element.addEventListener('click', callback)

launchButton.addEventListener("click", function (event) {
  console.log("using the event listener");
});

launchButton.addEventListener("click", function (event) {
  console.log("using the event listener AGAIN");
});

document.addEventListener("click", function (event) {
  //   console.log("clicking the document");
  if (event.target === launchButton) {
    console.log("you clicked the launch button");
  } else {
    console.log("you clicked something else");
  }
});

Array.from(document.links).forEach(function (link) {
  link.addEventListener("click", function (event) {
    console.log(
      `disrupting the default behavior of "${event.target.textContent}"`
    );
    event.preventDefault();
  });
});

// 👉 TASK 3- Create a function that launches!
// It should open the confirmation modal.
// Add it as an event listener for click events on the launch button.
launchButton.addEventListener("click", function (event) {
  // we have absolute power over the DOM here
});

function launch(event) {
  openModal();
  killReports();
}

launchButton.addEventListener("click", launch);

// 👉 TASK 4- Create a function to confirm the launch.
// It should close the modal and display a success report.
// Add it as a listener for clicks on the confirmation button.

function confirm(event) {
  closeModal();
  successMessage.classList.remove("off");
}
confirmButton.addEventListener("click", confirm);

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
  modal.classList.remove("off");
}

function closeModal() {
  modal.classList.add("off");
}

function killReports() {
  successMessage.classList.add("off");
  failureMessage.classList.add("off");
}

// 👉 TASK 9- [STRETCH] Using the mouseover event on 'document',
// log to the console the X and Y coordinates
// of the mouse pointer, as it moves over the screen.
