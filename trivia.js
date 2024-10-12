// DATE
var date = new Date();

var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var days = ['Sunday', 'Monday', "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

var hours = date.getHours();
var normalHours;
var AMorPM;

if (hours === 0) {
    normalHours = 12;
    AMorPM = 'AM';
} else if (hours === 12) {
    normalHours = 12;
    AMorPM = 'PM';
} else if (hours > 12) {
    normalHours = hours - 12;
    AMorPM = 'PM';
} else {
    normalHours = hours;
    AMorPM = 'AM';
}

formattedDate = (days[date.getDay()] + " " + months[date.getMonth()] + " " + date.getDate() + " " + normalHours + ":" + date.getMinutes() + " " + AMorPM);
console.log(formattedDate);
document.getElementById('time').innerHTML = formattedDate;

// GREETING


//set which greeting to use
let greet = "";
if (hours >= 0 && hours <= 12){
    greet = "Good Morning"
} else if(hours >= 13 && hours <= 18){
    greet = "Good Afternoon"
} else if(hours >= 19 && hours <= 22){
    greet = "Good Evening"
}

//ask for name
var userName = prompt("Enter your name:");

if (userName) {
    var capitalizedName = userName.charAt(0).toUpperCase() + userName.slice(1);
    console.log(capitalizedName);
} else {
    console.log("No name entered.");
}

//put greeting and name together
switch (greet) {
  case "Good Moorning":
    document.getElementById('welcome').innerHTML = "Good Morning, " + capitalizedName;
    break;
  case "Good Afternoon":
    document.getElementById('welcome').innerHTML = "Good Morning, " + capitalizedName;
    break;
  case "Good Evening":
    document.getElementById('welcome').innerHTML = "Good Morning, " + capitalizedName;
    break;
  default:
    console.log("Invalid day");
}

//Email
function checkEmail(email) {
    const emailPattern = /[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}/;
    return emailPattern.test(email);
    // should return true if it's a good email
}

function getEmail() {
    let email = prompt("Please enter your email:");

    while (!checkEmail(email)) {
        alert("Invalid email address. Please try again.");
        email = prompt("Please enter a valid email address:");
    }
    formatEmail(email);
}

function formatEmail(email) {
    let [username, domain] = email.split('@');
    let upperUsername = username.toUpperCase();
    document.getElementById('email').innerHTML = `Username: ${upperUsername}\nDomain: ${domain}`;
}

getEmail();



// Quote of the Day
const quotes = [
    "The best way to predict the future is to create it.<br>- Peter Drucker",
    "You miss 100% of the shots you don't take.<br>- Wayne Gretzky",
    "Act as if what you do makes a difference. It does.<br>- William James",
    "Success is not how high you have climbed, but how you make a positive difference to the world.<br>- Roy T. Bennett",
    "Believe you can and you're halfway there.<br>- Theodore Roosevelt"
];
// Generate a random number between 0 and 4
const randNumGen = Math.floor(Math.random() * 5);

// Display the quote of the day
document.getElementById("quote").innerHTML = quotes[randNumGen];





// TRIVIA
var questions = [
    "What is the largest planet in our solar system?",
    "What is the capital city of France?",
    "What is the name of the longest river in the world?",
    "Which element on the periodic table has the chemical symbol 'Fe'?"
];
  
var answers = [
    "jupiter",
    "paris",
    "nile river",
    "iron"
];


var points = 0;


function quiz() {

    for (let i = 0; i < 3; i++) {
        var guesses = 3;
        var correct = false;

        while (guesses > 0 && !correct) {
            var userAnswer = prompt(questions[i]);
            var lowerAnswer = userAnswer.toLowerCase();

            if (lowerAnswer === answers[i]) {
                correct = true;
                points += guesses;
                alert(`Correct!`);
            } else {
                guesses--;
                if (guesses > 0) {
                    alert(`Incorrect! You have ${guesses} attempt(s) left.`);
                }
            }
        }
    }

    return points;
}

var points = quiz();
var percentScore = (points/9)*100;
percentScore = percentScore.toFixed(2)
document.getElementById('score').innerHTML = 'Your got ' + percentScore + "% correct";