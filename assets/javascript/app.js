
// keep track of user clicks

// display the results and score

// prevent user from selecting from more than one

// track correct answers

// track incorrect answers

// alert if user wins

// alert if user loses

// display a timer
var count = 30;
var counter = setInterval(timer, 1000);
function timer() {
    count = count - 1;
    if (count <= -1) {
        clearInterval(counter);
        return;
    }
    // else if (count === -1) {
    //     clearInterval(count);
    // }

    document.getElementById("timer").innerHTML = count + " seconds";
};


// questions

var myQuestions = [
    {
    question: "Our atmosphere is approximately what percent oxygen?",
    choices: [  "39%",
                "72",
                "21%"],
    answer: [2]

    },

{
    question: "When facing mount Rushmore, what Presidents head is furthest on the right?",
    choices: [   "George Washington",
                 "Abraham Lincoln",
                 "Teddy Roosevelt"],
    answer: [1]
    },

{
    question: "What is the world's most profitable company?",
    choices: [  "Amazon",
                "Apple",
                "Google"],
    answer: [1]
    },

{
    question: "Common problem as a child, what is nocturnal enuresis?",
    choices: [  "Sleepwalk",
                "Bed Wetting",
                "Insomnia"],
    answer: [1]
    },

{
    question: "John Goodman originally voiced which animated character?",
    choices: [  "Yellow M&M",
                "Buzz Lightyear",
                "Chester Cheetah"],
    answer: [0]
    },
        
{
    question: "Which of these products will help remove crayon stains from clothing?",
    choices: [  "Pinesol",
                "Windez",
                "WD-40"],
    answer: [2]
    },
        
{
    question: "Where is the Sea of Tranquility located?",
    choices: [  "The Moon",
                "Brazil",
                "Australia"],
    answer: [0]
    },
        
{
    question: "Which chess piece can only move diagonally?",
    choices: [  "Rook",
                "Knight",
                "Bishop"],
    answer: [2]
    },
        
{
    question: "What was the first planet discovered by using a telescope in 1781?",
    choices: [  "Mars",
                "Uranus",
                "Jupiter"],
    answer: [1]
    },
        
{
    question: "Why doesn't a duck's quack echo?",
    choices: [  "Unique Vocal Chords",
                "Hollow Beaks",
                "Nobody Knows"],
    answer: [2]
    },
        
{
    question: "What is the Milky Way?",
    choices: [  "Chocolate Bar",
                "A form of stars",
                "Our Galaxy"],
    answer: [2]
    },
];

// display questions
function loadAnswers() {
    $(".myQuestions, .timer").show();
    for (var i = 0; i < myQuestions.length; i++)
    {
        $(".myQuestions").append("<div id=q"+ i +"></div>");

        $("#q" + i).append("<div><p>" + myQuestions[i].myQuestions + "</p></div>");
    
        
    }

    $("#submit").on("click", function ()
    {
        timer.stop();
    });
}