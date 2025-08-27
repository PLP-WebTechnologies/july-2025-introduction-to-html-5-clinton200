// Part 1: Mastering JavaScript Basics

// Variable declarations
let userName = "";
let age = 20;

// Function to greet user based on input
document.getElementById('greetBtn').addEventListener('click', () => {
    userName = document.getElementById('username').value;

    // Conditionals
    if (userName.trim() === "") {
        document.getElementById('greeting').textContent = "Please enter a valid name!";
    } else {
        document.getElementById('greeting').textContent = `Hello, ${userName}! This my javascript assignment.`;
    }
});

// Part 2: JavaScript Functions — The Heart of Reusability


// Function to calculate total price
function calculateTotal(price, quantity) {
    return price * quantity;
}

// Function to format text
function formatText(text) {
    return text.toUpperCase();
}

// Example usage
console.log("Total:", calculateTotal(100, 3));
console.log("Formatted:", formatText("javascript is fun"));



// Part 3: JavaScript Loops — Embrace the Power of Repetition!

// Loop to generate list of numbers
const numberList = document.getElementById('numberList');

for (let i = 1; i <= 10; i++) {
    let li = document.createElement('li');
    li.textContent = `Number: ${i}`;
    numberList.appendChild(li);
}

// While loop example (Countdown in console)
let countdown = 5;
while (countdown > 0) {
    console.log("Countdown:", countdown);
    countdown--;
}


// Part 4: Mastering the DOM with JavaScript

// DOM Interaction 1: Toggle background color
document.getElementById('toggleBtn').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// DOM Interaction 2: Change heading text on click
document.querySelector('h1').addEventListener('click', () => {
    document.querySelector('h1').textContent = "You clicked the heading!";
});

// DOM Interaction 3: Create a new element dynamically
let newElement = document.createElement('p');
newElement.textContent = "This paragraph was added using JavaScript!";
document.body.appendChild(newElement);
