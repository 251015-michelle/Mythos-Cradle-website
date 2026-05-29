const counterContainers = document.querySelectorAll('.counterContainer');

counterContainers.forEach(container => {
  const decrementBtn = container.querySelector('.decrement');
  const incrementBtn = container.querySelector('.increment');
  const input = container.querySelector('.counterNumber');

  incrementBtn.addEventListener('click', () => {
    let currentValue = parseInt(input.value) || 1;
    const max = parseInt(input.getAttribute('max')) || 5;

    if (currentValue < max) {
        input.value = currentValue + 1;
    }
  });

  decrementBtn.addEventListener('click', () => {
    let currentValue = parseInt(input.value) || 1;
    const min = parseInt(input.getAttribute('min')) || 1;
    
    if (currentValue > min) {
        input.value = currentValue - 1;
    }
  });
});




//trying to do the form now with a pop up 'thank you message' after pressing submit. Has to have the user's input name in as well
let contactForm = document.forms['contactForm'];

contactForm.addEventListener("click", getFormInfo);
//from meta ai
document.getElementById("submitBtn").addEventListener("click", getFormInfo);


function getFormInfo(event){

    event.preventDefault(); //won't refresh

    let formData = { //info from form will be stored into this object so that we can do things with this info in our js
        "input-name": this['input-name'].value, //key-value pairs
        "message-block": this['message-block'].value,
        "dropdown-selection": this['dropdown-selection'].value,
        "radio-button": this['radio-button'].value,
        "checkbox-array":[] //we use a for loop to fill this empty array
    };

};




//code from meta ai...
// 1. Target the form using its class name
const contactForm = document.querySelector(".contactForm");

// 2. Listen for the 'submit' event
contactForm.addEventListener("submit", getFormInfo);

function getFormInfo(event) {
    // 3. Stop the page from reloading on submit
    event.preventDefault();

    // 4. Grab the values from the input fields
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // 5. Target the thank you div and display the info
    const thankYouDiv = document.getElementById("thankYouMessage");
    thankYouDiv.innerHTML = `
        <h4>Thank you, ${name}! Your message has been sent.</h4>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
    `;

    // 6. Optional: Clear the form fields after submission
    contactForm.reset();
}










//saves HTML elements in variables so that we can access them easily in JavaScript
let contactForm = document.getElementById("contactForm");
let userName = document.getElementById("name");
let userEmail = document.getElementById("email");
let userSubject = document.getElementById("subject");
let userMessage = document.getElementById("message");
let thankYouMessage = document.getElementById("thankYouMessage");
let infoContainer = document.getElementById("infoContainer");


//saves all of the individual tasks into so that we can loop through them if necessary... this is a global variable
let formInfo = JSON.parse(localStorage.getItem("info"))|| [];

let loadSubmit = () => {
    let storedUsername = localStorage.getItem("name");
    if (storedUsername){
        userName.value = storedUsername;
        displayThankYouMessage(storedUsername);
        displayUserInfo(storedUsername);
    }
};

//this is how you define an arrow function
let addInfo = (event)=>{
    event.preventDefault(); //to not loose info when refreshing the page/submitting

    let currentUsername = name.value.trim();
    let currentEmail = email.value.trim();
    let currentSubject = subject.value.trim();
    let currentMessage = message.value.trim(); //trim deletes the space bar

    if (currentUsername === "" || currentEmail === "" || currentSubject === ""|| currentMessage === ""){ //if the username/task is empty, then alert the user that they need to fill in all the fields, and then it returns to the beginning
        alert("Please fill in all the fields");
        return; //if both the username and the task is filled in, the process will continue because the task was completed by the user
    }

    localStorage.setItem("name", currentUsername);

    displayThankYouMessage(currentUsername);

    let infoData = {
        name: currentUsername,
        email: currentEmail,
        subject: currentSubject,
        message: currentMessage,
        completed: false
    }

    tasks.push(infoData); //we want to put/push the info from taskData into the array

    localStorage.setItem("info", JSON.stringify(info));

    displayUserInfo(currentUsername);
    taskInput.value = "";
};

//declare display welcome message
let displayThankYouMessage = (currentUsername) => {
    thankYouMessage.innerHTML = `
    Thank you, ${currentUsername}, for your message!
    `
};

let displayUserInfo = (currentUsername) => {
    infoContainer.innerHTML = ""; //set to empty

    let userInfo = info.filter((item) =>{
        return item.userName.toLowerCase() === currentUsername.toLowerCase();
    });

    for(let info of userInfo){
        createInfoCard(info);
    };

    updateInfoCounter(currentUsername);
}

contactForm.addEventListener('submit', displayUserInfo);
clearInfo.addEventListener("click", clearAllInfo);
window.addEventListener("DOMContentLoaded", loadInfo);