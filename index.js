/**************************************************************************************************** */
//1. Password Validator

let passwordValue = 0;
let conPassword = 0;
const passwordField = document.getElementById("password-field");

passwordField.addEventListener("change", (e) => {
  passwordValue = e.target.value;
});

const submitButton = document.getElementById("submit-button");

const confirmPassword = document.getElementById("confirm-password");

confirmPassword.addEventListener("change", (e) => {
  conPassword = e.target.value;
});

submitButton.addEventListener("click", () => {
  conPassword === passwordValue
    ? console.log("Password Matched. Password validation Successful.")
    : console.log("Password didn't match. Password validation unsuccessful");
});

/**************************************************************************************************** */

/**************************************************************************************************** */
// 2. Calculator

const num1 = document.getElementById("num1");

const num2 = document.getElementById("num2");
let result = document.getElementById("result");
const calculate = document.getElementById("calculate");

const operator = document.getElementById("operator");

let number1 = 0;
let number2 = 0;
let resultValue = 0;
let operation = "";

function setValue(val) {
  result.setAttribute("value", val);
}

num1.addEventListener("change", (e) => {
  number1 = Number(e.target.value);
});

num2.addEventListener("change", (e) => {
  number2 = Number(e.target.value);
});

operator.addEventListener("change", (e) => {
  operation = e.target.value;
});

calculate.addEventListener("click", (e) => {
  operation = operation.toString();
  switch (operation) {
    case "+":
      resultValue = number1 + number2;
      setValue(resultValue);
      console.log("Result --->", resultValue);
      break;

    case "-":
      resultValue = number1 - number2;
      setValue(resultValue);
      console.log("Result --->", resultValue);
      break;

    case "*":
      resultValue = number1 * number2;
      setValue(resultValue);
      console.log("Result --->", resultValue);
      break;

    case "/":
      resultValue = number1 / number2;
      setValue(resultValue);
      console.log("Result --->", resultValue);
      break;

    default:
      console.log("Result --->", "Invalid operator");
      break;
  }
});

/**************************************************************************************************** */

/**************************************************************************************************** */
// 3. Color Mixer

const color1 = document.getElementById("color1");

const color2 = document.getElementById("color2");
let finalColor = document.getElementById("finalColor");
const mixColor = document.getElementById("mixColor");

let col1 = "";
let col2 = "";
let mixCol = "";
let finalCol = "";

function setValue(val) {
  result.setAttribute("value", val);
}

color1.addEventListener("change", (e) => {
  col1 = e.target.value;
});

color2.addEventListener("change", (e) => {
  col2 = e.target.value;
});

mixColor.addEventListener("click", (e) => {
  if (
    (col1 === "red" && col2 === "blue") ||
    (col1 === "blue" && col2 === "red")
  ) {
    finalCol = "purple";
  } else if (
    (col1 === "red" && col2 === "yellow") ||
    (col1 === "yellow" && col2 === "red")
  ) {
    finalCol = "orange";
  } else if (
    (col1 === "blue" && col2 === "yellow") ||
    (col1 === "yellow" && col2 === "blue")
  ) {
    finalCol = "green";
  } else {
    finalCol = "Invalid color combination";
  }

  switch (finalCol) {
    case "purple":
      finalColor.style.backgroundColor = finalCol;
      finalColor.value = "";
      console.log("Final Color --->", finalCol);
      break;

    case "orange":
      finalColor.style.backgroundColor = finalCol;
      finalColor.value = "";
      console.log("Final Color --->", finalCol);
      break;

    case "green":
      finalColor.style.backgroundColor = finalCol;
      finalColor.value = "";
      console.log("Final Color --->", finalCol);
      break;

    default:
      finalColor.value = finalCol;
      finalColor.style.backgroundColor = "white";
      console.log("Final Color --->", finalCol);
      break;
  }
});

/**************************************************************************************************** */

/**************************************************************************************************** */
// 4. Highest Marks

const marks = document.getElementById("marks");
let namesArray = [];

const calculateHighest = document.getElementById("findHighest");

marks.addEventListener("change", (e) => {
  namesArray = e.target.value;
});

let highestMark = 0;
let stuMarks = [];

const highMarks = document.getElementById("highestMark");

calculateHighest.addEventListener("click", () => {
  stuMarks = namesArray.split(",");
  for (i = 0; i < stuMarks.length; i++) {
    highestMark =
      Number(stuMarks[i]) > highestMark ? Number(stuMarks[i]) : highestMark;
  }

  console.log("Highest Marks --->", highestMark);

  highMarks.value = highestMark;
});

/**************************************************************************************************** */

/**************************************************************************************************** */
// 5. Capitalize

const userName = document.getElementById("name");

let username = "";

userName.addEventListener("change", (e) => {
  username = e.target.value;
});

const capatalizedName = document.getElementById("capitalize");

capatalizedName.addEventListener("click", () => {
  username =
    username.charCodeAt(0) >= 97 && username.charCodeAt(0) <= 122
      ? username.charAt(0).toUpperCase() + username.slice(1)
      : username;

  console.log("UserName --->", username);
});

/**************************************************************************************************** */

/**************************************************************************************************** */
// 6. Vowel Counter

const personName = document.getElementById("personName");

let perName = "";

personName.addEventListener("change", (e) => {
  perName = e.target.value;
});

const countVowels = document.getElementById("countVowels");
let count = 0;

const vowelsCount = document.getElementById("vowelsCount");

countVowels.addEventListener("click", () => {
  count = 0;
  for (i = 0; i < perName.length; i++) {
    if (
      perName[i] === "a" ||
      perName[i] === "e" ||
      perName[i] === "i" ||
      perName[i] === "o" ||
      perName[i] === "u"
    ) {
      count++;
    }
  }

  vowelsCount.setAttribute("value", count);
  console.log("Vowel Count --->", count);
});

/**************************************************************************************************** */

/**************************************************************************************************** */
// 7. Remove Duplicates

const cartValues = document.getElementById("cartValues");

let cartVal = [];

cartValues.addEventListener("change", (e) => {
  cartVal = e.target.value;
  cartVal = cartVal.split(",");
});

let newCart = [];

function alreadySeen(cartVal) {
  return cartVal.filter((item, index) => cartVal.indexOf(item) === index);
}

const removeDuplicates = document.getElementById("removeDuplicates");

removeDuplicates.addEventListener("click", () => {
  newCart = alreadySeen(cartVal);

  console.log("New Cart ---> ", newCart);
});

/**************************************************************************************************** */

/**************************************************************************************************** */
// 8. Inverted right-angled triangle pattern with asterisks

// const invertedTriangle = document.getElementById("invertedTriangle");
// let content = "";
// function triangle() {
//   for (i = 0; i < 6; i++) {
//     content = "";
//     for (j = 6; j > 0; j--) {
//       content += "* ";
//     }
//     var z = document.createElement("div");
//     z.innerHTML = content;
//     invertedTriangle.appendChild(z);
//   }
// }

const invertedTriangle = document.getElementById("invertedTriangle");
let content = "";
let n = 6;
function triangle() {
  invertedTriangle.innerHTML = "";
  for (let i = 6; i >= 1; i--) {
    content = "";
    for (let j = 1; j <= i; j++) {
      content += "* ";
    }
    var z = document.createElement("div");
    z.innerHTML = content;
    invertedTriangle.appendChild(z);
  }
}

// for (let i = 6; i >= 1; i--) {
//   let line = "";
//   for (let j = 1; j <= i; j++) {
//     line += "*";
//   }
//   console.log(line);
// }

/**************************************************************************************************** */

/**************************************************************************************************** */
// 9. Check for divisibility.

const enterNumbers = document.getElementById("enterNumbers");

let numbers = [];

enterNumbers.addEventListener("change", (e) => {
  numbers = [];
  numbers = e.target.value;
  numbers = numbers.split(",");
});

const divisibility = document.getElementById("divisibility");
let newNumbers = [];

divisibility.addEventListener("click", () => {
  newNumbers = [];
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 0 && numbers[i] % 2 !== 0) {
      newNumbers.push(numbers[i]);
    } else {
      continue;
    }
  }

  const divisibleby3 = document.getElementById("divisibleby3");
  divisibleby3.setAttribute(
    "value",
    newNumbers.length !== 0 ? newNumbers : "none"
  );
  console.log("Divisible by 3, but not by 2. --->", newNumbers);
});

/**************************************************************************************************** */

/**************************************************************************************************** */
// 10. Correct a bug

let cartQuantity = [2, 4, 1, 5, 10, 7];

document.getElementById("correctABugInput").addEventListener("change", (e) => {
  cartQuantity = e.target.value;
});

let finalCart = [];

document.getElementById("correctBug").addEventListener("click", () => {
  finalCart = cartQuantity.split(",");

  for (let i = 0; i < finalCart.length; i++) {
    finalCart[i] = Number(finalCart[i]);
  }

  console.log("Initail Values", finalCart);

  finalCart.forEach((item, index) => {
    finalCart[index] *= 2;
  });

  console.log("Final Cart --->", finalCart);

  document.getElementById("correctABugOutput").setAttribute("value", finalCart);
});

/**************************************************************************************************** */

/**************************************************************************************************** */
// 11. Unit converter

const celsius = document.getElementById("celsius");

let far;
let cel;

celsius.addEventListener("change", (e) => {
  cel = Number(e.target.value);
});

const convert = document.getElementById("convert");

convert.addEventListener("click", () => {
  far = (9 / 5) * cel + 32;
  document
    .getElementById("fahrenheit")
    .setAttribute("value", far + String.fromCharCode(176) + " F");
  console.log("Temperature in Far. --->", far);
});

/**************************************************************************************************** */

/**************************************************************************************************** */
// 12. Calculate rental cost

let carType = "";
document.getElementById("carType").addEventListener("change", (e) => {
  carType = "";
  carType += e.target.value.toLowerCase();
});

let numberOfDaysRented = 1;
document.getElementById("daysRented").addEventListener("change", (e) => {
  numberOfDaysRented = e.target.value;
});

let totalCost = 0;

document.getElementById("calculateCost").addEventListener("click", () => {
  totalCost = 0;
  switch (carType) {
    case "economy":
      totalCost += 4000 * numberOfDaysRented;
      break;
    case "midsize":
      totalCost += 10000 * numberOfDaysRented;
      break;
    case "luxury":
      totalCost += 20000 * numberOfDaysRented;
      break;
    default:
      console.log("Wrong Car Type");
      break;
  }

  document.getElementById("totalCost").setAttribute("value", totalCost);
  console.log("Total Cost --->", totalCost);
});

/**************************************************************************************************** */

/**************************************************************************************************** */
// 13. Bill splitter

let totalPeople = 0;
let billAmounts = [20, 100, 200, 50, 150, 60]; // default values

document.getElementById("billSplitterInput").addEventListener("change", (e) => {
  billAmounts = e.target.value;
});

document.getElementById("totalPeople").addEventListener("change", (e) => {
  totalPeople = e.target.value;
});

let dishesCost = [];

document.getElementById("calculateBill").addEventListener("click", () => {
  dishesCost = billAmounts.split(",");

  for (let i = 0; i < dishesCost.length; i++) {
    dishesCost[i] = Number(dishesCost[i]);
  }

  let sum = 0;
  dishesCost.forEach((val) => {
    sum += val;
  });

  const costPerPerson = sum / totalPeople;

  console.log("Final Values --->", {
    totalBill: sum,
    billPerPerson: costPerPerson,
  });
});

/**************************************************************************************************** */

/**************************************************************************************************** */
// 14. Calculate the final order price

const cartArray = [
  { price: 2000, quantity: 2 },
  { price: 1000, quantity: 1 },
  { price: 200, quantity: 5 },
  { price: 20, quantity: 3 },
  { price: 40, quantity: 10 },
  { price: 100, quantity: 2 },
  { price: 90, quantity: 3 },
];

let totalCartCost = 0;

document.getElementById("calculateCartCost").addEventListener("click", () => {
  totalCartCost = 0;
  cartArray.map((item) => {
    totalCartCost += item["price"] * item["quantity"];
  });

  document.getElementById("totalCartCost").setAttribute("value", totalCartCost);
  console.log("Total Cart Cost --->", totalCartCost);
});

/**************************************************************************************************** */

/**************************************************************************************************** */
// 15. Calculate the percentage of the discount

let originalPrice = 0;

document.getElementById("originalPrice").addEventListener("change", (e) => {
  originalPrice = e.target.value;
});

let discountedPrice = 0;

document.getElementById("discountedPrice").addEventListener("change", (e) => {
  discountedPrice = e.target.value;
});

let discountPercentage = 0;

document
  .getElementById("calculateDiscountedPercentage")
  .addEventListener("click", () => {
    discountPercentage =
      ((originalPrice - discountedPrice) / originalPrice) * 100;

    console.log(
      "Discount Percentage --->",
      `${discountPercentage.toFixed(2)} %`
    );

    document
      .getElementById("discountPercentage")
      .setAttribute("value", `${discountPercentage.toFixed(2)} %`);
  });

/**************************************************************************************************** */

/**************************************************************************************************** */
// 16. Generate a random number

document.getElementById("generateNumber").addEventListener("click", () => {
  const num = Math.floor(Math.random() * 99) + 1;
  // console.log(num);
  const randomNumber = document.getElementById("randomNumber");
  randomNumber.setAttribute("value", num);

  console.log("Random Number --->", num);
});

/**************************************************************************************************** */

/**************************************************************************************************** */
// 17. Build a banking application

let usersAccount = [
  { name: "Satyam", balance: 500000 },
  { name: "Shivam", balance: 100000 },
  { name: "Krishna", balance: 200000 },
  { name: "Saksham", balance: 300000 },
];

const enterName = document.getElementById("enterName");
let currentAmount = 0;
enterName.addEventListener("change", () => {
  usersAccount.map((item) => {
    if (item["name"].toLowerCase() === enterName.value.toLowerCase()) {
      currentAmount = item["balance"];
    }
  });
  document.getElementById("amount").setAttribute("value", currentAmount);
});

const deposit = document.getElementById("deposit");
let enteredAmount = 0;
const enterAmount = document.getElementById("enterAmount");
enterAmount.addEventListener("change", (e) => {
  enteredAmount = e.target.value;
});

deposit.addEventListener("click", () => {
  usersAccount.map((item) => {
    if (item["name"].toLowerCase() === enterName.value.toLowerCase()) {
      item["balance"] += Number(enteredAmount);
      currentAmount = item["balance"];
      return;
    }
  });
  console.log("Current Amount -->", currentAmount);
  document.getElementById("amount").setAttribute("value", currentAmount);
});

document.getElementById("withdrawal").addEventListener("click", () => {
  usersAccount.map((item) => {
    if (item["name"].toLowerCase() === enterName.value.toLowerCase()) {
      if (item["balance"] < Number(enteredAmount) && item["balance"] !== 0) {
        document.getElementById(
          "withdrawalWarning"
        ).innerHTML = `Current Amount is ${item["balance"]}. Please enter lower amount than ${item["balance"]}`;

        return;
      } else if (item["balance"] === 0) {
        document.getElementById(
          "withdrawalWarning"
        ).innerHTML = `Current Amount is 0.`;
      } else {
        item["balance"] -= Number(enteredAmount);
        currentAmount = item["balance"];
        document.getElementById("amount").setAttribute("value", currentAmount);
        document.getElementById("withdrawalWarning").innerHTML = "";
        return;
      }
    }
  });
  console.log("Current Amount -->", currentAmount);
  document.getElementById("amount").setAttribute("value", currentAmount);
});

/**************************************************************************************************** */

/**************************************************************************************************** */
// 18. Change Text on Button click.

let toggle = 0;
document.getElementById("toggleText").addEventListener("click", () => {
  if (toggle === 0) {
    document.getElementById("pwText").innerHTML = "PW Skills";
    console.log("Text --->", "PW Skills");
    toggle++;
  } else {
    document.getElementById("pwText").innerHTML =
      "The most affordable learning platform";
    console.log("Text --->", "The most affordable learning platform");
    toggle--;
  }
});

/**************************************************************************************************** */

/**************************************************************************************************** */
// 19. Validate Password

let passwordError = "";
let emailError = "";

let emailValue = "";
let passValue = "";

document.getElementById("formEmail").addEventListener("change", (e) => {
  if (e.target.value.includes("@")) {
    emailError = "";
  } else {
    emailError = "Invalid email or password! email";
  }

  emailValue = e.target.value;
});

document.getElementById("formPassword").addEventListener("change", (e) => {
  if (e.target.value.length >= 8) {
    passwordError = "";
  } else {
    passwordError = "Invalid email or password!";
  }

  passValue = e.target.value;
});

document.getElementById("formSubmit").addEventListener("click", () => {
  if (passwordError === "" && emailError === "") {
    document.getElementById("formSuccess").innerHTML =
      "Valid email and password!";
  } else {
    document.getElementById("formSuccess").innerHTML = "";
  }

  if (passwordError || emailError) {
    document.getElementById("formWarning").innerHTML =
      "Invalid email or password!";
  } else {
    document.getElementById("formWarning").innerHTML = "";
  }

  if (emailValue.length === 0 || passValue.length === 0) {
    document.getElementById("formWarning").innerHTML =
      "Invalid email or password!";
    document.getElementById("formSuccess").innerHTML = "";
  }

  console.log(emailValue.length, passValue.length);
});

/**************************************************************************************************** */

/**************************************************************************************************** */
// 20. Dynamically Adding List Items to an Ordered List

var listItems = [
  "HTML and Semantics",
  "Starting with CSS",
  "Working Template",
  "Mobile responsive webpages",
  "Grid and Flex-box in CSS",
  "Projects using HTML & CSS",
  "Version Control and Git",
  "Getting Started with JavaScript",
  "Advance JavaScript",
  "Working with DOM",
  "Making Projects using HTML, CSS and JavaScript",
  "Understanding Fundamental of Computer Science",
  "Getting Started with Database",
  "Understanding the Database",
  "Starting with NodeJS and Express",
  "Understanding React and its Fundamentals",
  "Understanding Hooks and Routers",
  "Starting and Completing Full Fledge Projects",
];

function addListItem() {
  var listItem = document.createElement("li");

  // check if listItems array still has elements
  if (listItems.length > 0) {
    // add next item to the list
    var nextItem = listItems.shift();
    var textNode = document.createTextNode(nextItem);
    listItem.appendChild(textNode);
    document.getElementById("myList").appendChild(listItem);
  } else {
    // display message if all items have been added
    alert("All items have been added to the list.");
  }
}

/**************************************************************************************************** */

/**************************************************************************************************** */
// 21. TODO App

let todoValue = "";
document.getElementById("todo").addEventListener("change", (e) => {
  todoValue = e.target.value;
});

let counter = 0;

document.getElementById("addItem").addEventListener("click", () => {
  document.getElementById("todoItemsList").innerHTML += `<div id="${
    "todoItem" + counter
  }">${todoValue}</div>`;

  console.log(`<div id="${"todoItem" + counter}">${todoValue}</div>`);

  console.log(
    `${"todoItem" + counter}`,
    document.getElementById(`${"todoItem" + counter}`)
  );

  document.getElementById(`${"todoItem" + counter}`).style.background =
    "#f5f5ff";
  document.getElementById(`${"todoItem" + counter}`).style.border =
    "1px solid #737397";
  document.getElementById(`${"todoItem" + counter}`).style.padding =
    "10px 20px";
  document.getElementById(`${"todoItem" + counter}`).style.textAlign = "center";
  document.getElementById(`${"todoItem" + counter}`).style.marginBottom =
    "10px";

  counter++;
});

/**************************************************************************************************** */

/**************************************************************************************************** */
// 22. Progress Bar

const progressBar = document.getElementById("progressBar");
const main = document.getElementById("main");

const animateProgressBar = () => {
  let scrollDistance = -main.getBoundingClientRect().top;

  let progressWidth =
    (scrollDistance /
      (main.getBoundingClientRect().height -
        document.documentElement.clientHeight)) *
    100;

  let value = Math.floor(progressWidth);

  progressBar.style.width = value + "%";

  if (value < 0) {
    progressBar.style.width = "0%";
  }

  if (value >= 100) {
    progressBar.style.borderRadius = "0";
  } else {
    progressBar.style.borderRadius = "10px";
  }
};

window.addEventListener("scroll", animateProgressBar);

/**************************************************************************************************** */

/**************************************************************************************************** */
// 23. Change the color on click

const colorItems = [
  "Blue ",
  "Green",
  "Red",
  "Orange",
  "Violet",
  "Indigo",
  "Yellow ",
];

document.getElementById("changeColor").addEventListener("click", () => {
  let color = colorItems[Math.floor(Math.random() * colorItems.length)];

  document.getElementById("changeColorBody").style.background = color;

  console.log("Color --->", color);
});

/**************************************************************************************************** */

/**************************************************************************************************** */
// 24. Text Highlighting

const paragraph = document.getElementById("highlightWordsPara");

document.getElementById("highlight").addEventListener("click", () => {
  const words = paragraph.textContent.split(" ");

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 8) {
      words[i] = "<span class='highlight'>" + words[i] + "</span>";
    }
  }
  paragraph.innerHTML = words.join(" ");
});

/**************************************************************************************************** */

/**************************************************************************************************** */
// 25. Move the Image

document.onkeydown = function (e) {
  if (e.which === 39) {
    document.getElementById("randomDogImage").style.right = 0;
    document.getElementById("randomDogImage").style.top = null;
    document.getElementById("randomDogImage").style.left = null;
    document.getElementById("randomDogImage").style.bottom = null;
  } else if (e.which === 38) {
    if (document.getElementById("randomDogImage").style.right === "0px") {
      document.getElementById("randomDogImage").style.top = 0;
      document.getElementById("randomDogImage").style.right = 0;
      document.getElementById("randomDogImage").style.left = null;
      document.getElementById("randomDogImage").style.bottom = null;
    } else {
      document.getElementById("randomDogImage").style.top = 0;
      document.getElementById("randomDogImage").style.right = null;
      document.getElementById("randomDogImage").style.left = null;
      document.getElementById("randomDogImage").style.bottom = null;
    }
  } else if (e.which === 40) {
    if (document.getElementById("randomDogImage").style.right === "0px") {
      document.getElementById("randomDogImage").style.bottom = 0;
      document.getElementById("randomDogImage").style.right = 0;
      document.getElementById("randomDogImage").style.left = null;
      document.getElementById("randomDogImage").style.top = null;
    } else {
      document.getElementById("randomDogImage").style.bottom = 0;
      document.getElementById("randomDogImage").style.right = null;
      document.getElementById("randomDogImage").style.left = null;
      document.getElementById("randomDogImage").style.top = null;
    }
  } else if (e.which === 37) {
    if (document.getElementById("randomDogImage").style.right === "0px") {
      document.getElementById("randomDogImage").style.bottom = 0;
      document.getElementById("randomDogImage").style.left = 0;
      document.getElementById("randomDogImage").style.right = null;
      document.getElementById("randomDogImage").style.top = null;
    } else {
      document.getElementById("randomDogImage").style.left = 0;
      document.getElementById("randomDogImage").style.right = null;
      document.getElementById("randomDogImage").style.bottom = null;
      document.getElementById("randomDogImage").style.top = null;
    }
  }
};

// 8. Inverted right-angled triangle pattern with asterisks
