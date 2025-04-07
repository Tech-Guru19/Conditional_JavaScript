// Number 1
function processAddress() {
    if (address.value == '') {
        alert("Input cannot be empty!")
    } else {
        var letter = (address.value).toLowerCase();
        newAddress.innerHTML = letter
    }
}

// Number 2
function bookTitle() {
    var listOfBooks = ['harry potter', 'the hobbit', 'the lord of the rings', 'the catcher in the rye', 'to kill a mockingbird'];
    var secondUserInput = bookInput.value.toLowerCase();
    if (secondUserInput == '') {
        alert("Please enter a book title!")
    } else if (listOfBooks.includes(secondUserInput)) {
        alert("You have entered a book that is in the list!")
    } else {
        newBookTitle.innerHTML = "Your new book is " + bookInput.value
    }
}

// Number 3
function essay() {
    var Input = essayInput.value
    if (Input == '') {
        alert("Input cannot be empty!")
    } else {
        let essay = Input.replace(/\s+/g, " ");
        newEssay.innerHTML = essay
    }
}

// Number 4
function answer() {
    var input = correctAnswer.value.toLowerCase();
    var output = userAnswer.value.toLowerCase();
    if (input == '' && output == '') {
        alert("Input cannot be empty!");
    } else if (input === output) {
        newAnswer.innerHTML = "Your answer is correct"
    } else {
        newAnswer.innerHTML = "Your answer is wrong"
    }
}

// Number 5
function password() {
    var correctPassword = passwordInput.value;
    if (correctPassword == '') {
        alert("Please input your password!")
    } else if (correctPassword.length < 8) {
        alert("Password must be at least 8 characters long")
    } else if (/!/[A-Z].test(correctPassword)) {
        alert("Password must contain at least one uppercase letter")
    } else if (!/[a-z]/.test(correctPassword)) {
        alert("Password must contain at least one lowercase letter")
    } else if (!/[0-9]/.test(correctPassword)) {
        alert("Password must contain at least one digit")
    } else if (!/[!@#$%^&*()_+]/.test(correctPassword)) {
        alert("Password must contain at least one special character")
    } else {
        newPassword.innerHTML = "Your password is valid"
    }
}


