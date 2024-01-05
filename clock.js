// Get HTML elements
var myClock = document.getElementById("myClock"); // Element displaying the clock
var formContainer = document.getElementById("formContainer"); // Form container element
var merhaba = document.getElementById("myName"); // Element displaying the greeting
var hiddenDiv = document.getElementsByClassName("text-center"); // Hidden div elements
var currentDate = new Date();
var targetDate = new Date(currentDate.getTime() + 10000000); // Target date 10 seconds from now
var isClick = false; // Flag to track if the button has been clicked

// Hide the hidden div elements initially
divDisplay("none");

// Show the current time
myClock.innerHTML = `${new Date().toLocaleString()}`;
formContainer.innerText = `
${targetDate.toLocaleString()} 
you will wait 
or 
Click`;
formContainer.classList.toggle("text2");

// Mouse over and mouse out events
formContainer.addEventListener("mouseover", function () {
    this.style.color = "grey";
    this.style.fontSize = "41px";
});

formContainer.addEventListener("mouseout", function () {
    this.style.color = "#e98208";
    this.style.fontSize = "40px";
});

// Show form event
formContainer.addEventListener("click", onShow);

// Function to show the form
function onShow() {
    if (isClick) return;
    // Create a new form
    var newform = document.createElement("form");
    formContainer.appendChild(newform)
    // Create a new input
    var newdiv = document.createElement("div")
    var newinput = document.createElement("input");
    newform.appendChild(newdiv);
    newdiv.appendChild(newinput);
    newinput.id = "inputText"
    newinput.type = "text"
    newinput.name = "inputText";
    newinput.value = "Name"
    // Create a new button
    var newbutton = document.createElement("button")
    newbutton.style = "button";
    newbutton.textContent = "Submit Form";
    newbutton.onclick = processForm;
    newdiv.appendChild(newbutton)
    // Test    
    isClick = true;
}

// Function to process the form
function processForm(event) {
    event.preventDefault();
    merhaba.innerText = `${document.getElementById("inputText").value}`;
    divDisplay("block")
    formContainer.style.display = "none"
}

// Function to show or hide the hidden div elements
function divDisplay(name) {
    for (var i = 0; i < hiddenDiv.length; i++) {
        var element = hiddenDiv[i];
        element.style.display = name;
    }
}
