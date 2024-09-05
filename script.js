const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const showResult = document.getElementById("result");

const palindromChecker = (e) => {
    e.preventDefault();
    const inputValue = textInput.value.toLowerCase();

    const alphaNumeric =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let validInput = "";

    for (let i = 0; i < inputValue.length; i++) {
        if (alphaNumeric.includes(inputValue[i])) {
            validInput += inputValue[i];
        }
    }


    if (validInput.trim() === "") {
        alert("Please input a valid value");
        return;
    }

    const wordChecked = validInput.split("").reverse().join("");

    if (validInput === wordChecked) {
        showResult.textContent = `${inputValue} is a palindrome.`
    } else {
        showResult.textContent = `${inputValue} is not a palindrome.`
    }
    textInput.value = ""


};





checkBtn.addEventListener("click", palindromChecker)


