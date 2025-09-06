function toggleTheme(){
    document.body.classList.toggle('dark-mode');
}

// get the modal open button

const modalOpenModal = document.getElementById('openModal');
const modal = document.getElementById('personModal');
const closeBtn = document.getElementById('closeModal');




// open modal event
modalOpenModal.onclick=function(){
    modal.style.display = 'block';
};

//close modal event
closeBtn.onclick=() => {
    modal.style.display = 'none';
};

// close modal when clicking outside the modal content
window.onclick=(event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

// different events
let input = document.getElementById('typeSomething');

// keydown event
input.addEventListener('keydown', function(event) {
    console.log('You pressed a key: ', event.key);});

// focus event
input.addEventListener('focus', function() {
    input.style.backgroundColor = 'lightblue';
});
// blur event
input.addEventListener('blur', function() {
    input.style.backgroundColor = 'Orange';
});

// drag and drop
let dragItem = document.getElementById('dragitem');
let dropZone = document.getElementById('drop-zone');

dragItem.addEventListener('dragstart', function(event) {
    event.dataTransfer.setData('id', event.target.id);
});

dropZone.addEventListener('dragover', function(event) {
    event.preventDefault();
});

dropZone.addEventListener('drop', function(event) {
    event.preventDefault();
    let id = event.dataTransfer.getData('id');
    dropZone.appendChild(document.getElementById(id));
    dropZone.style.backgroundColor = 'lightgreen';
});

// form validation
function validateEmail(email) {
    let format = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return format.test((email));
}


function validatePassword(password) {
    let format = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return format.test((password));
}


function validateSignup() {
    let username = document.getElementById('username').value.trim();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();

    if (!username || !email || !password ) {
        alert('All fields are required!');
        return false;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    if (validatePassword(password)) {
        alert('Password must be at least 8 characters long and include uppercase, lowercase, number, and character.');
        return false;
    }

    alert('Form submitted successfully!');
    return true;
}  
