const input = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const div = document.getElementById("result");

// Function to check if a string is a palindrome
function isPalindrome(str) {
    const cleanedUpString = str.toLowerCase().replace(/[\W_]/g, "");
    const reversedString = cleanedUpString.split("").reverse().join("");
    return reversedString === cleanedUpString;
}

// Event listener for the button click
button.addEventListener("click", function() {
    const inputValue = input.value.trim(); 
    // Trim any whitespace
    
    if (!inputValue) {
// Stop execution if no value is entered
        alert("Please input a value");
        return; 
    }

    const isPalindromic = isPalindrome(inputValue);
    if (isPalindromic) {
        div.textContent = `${inputValue} is a palindrome.`;
    } else {
        div.textContent = `${inputValue} is not a palindrome.`;
    }
});

// Predefined test cases
const testCases = [
    "A",
    "eye",
    "_eye",
    "race car",
    "not a palindrome",
    "A man, a plan, a canal. Panama",
    "never odd or even",
    "nope",
    "almostomla",
    "My age is 0, 0 si ega ym.",
    "1 eye for of 1 eye.",
    "0_0 (: /\\ :) 0-0",
    "five|\\_/|four"
];

// Automated testing
testCases.forEach(testCase => {
    input.value = testCase;
    button.click();
});