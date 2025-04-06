JavaScript Conditional Statements Project
This project utilizes conditional statements in JavaScript to solve common problems related to user input and string manipulation. Below is a description of the various functionalities implemented in the code.

Features
1. Password Validation
This function checks if a user input password is correct or incorrect based on a predefined password.

If the entered password matches the correct one, it returns a success message.

If the password is incorrect, it returns a failure message.

2. Answer Verification
The code verifies whether an answer is correct or wrong by comparing the user input to the correct answer.

If the user's answer is correct, it returns a success message.

If the answer is wrong, it returns an error message.

3. Remove Extra Spaces
This function helps clean up essays submitted by students by removing unnecessary extra spaces from the text.

It trims spaces at the beginning and end of the string.

It replaces multiple spaces in between words with a single space.

4. Address Format Conversion
This feature converts addresses written in block letters to small letters for standardization.

It takes the inputted address and converts all uppercase letters to lowercase.

5. Book Title Check and Update
This feature checks if a book title is already in the list of stored book titles. If not, it adds the new book title to the list.

If the book title is not found, it prompts to add the title to the list.

If the title is already in the list, it will notify the user that the title exists.

## Features in Code Explination

### 1. Address Processor
- **Input**: A text field for entering an address.
- **Functionality**: Converts the input to lowercase and displays it.
- **Function**: `processAddress()`

### 2. Book Title Checker
- **Input**: A text field for entering a book title.
- **Functionality**: Checks if the entered book title exists in a predefined list of books. If not, displays the entered title as a new book.
- **Function**: `bookTitle()`

### 3. Essay Formatter
- **Input**: A text field for entering an essay.
- **Functionality**: Removes extra spaces from the essay and displays the formatted text.
- **Function**: `essay()`

### 4. Answer Validator
- **Input**: Two text fields for entering a correct answer and a user-provided answer.
- **Functionality**: Compares the two inputs and displays whether the user's answer is correct or wrong.
- **Function**: `answer()`

### 5. Password Validator
- **Input**: A text field for entering a password.
- **Functionality**: Validates the password based on the following criteria:
  - At least 8 characters long.
  - Contains at least one uppercase letter.
  - Contains at least one lowercase letter.
  - Contains at least one digit.
  - Contains at least one special character.
- **Function**: `password()`
