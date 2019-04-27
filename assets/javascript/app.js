

// display a timer
var area = $("#quiz");

var myQuestions = [
    {
    question: "Our atmosphere is approximately what percent oxygen?",
    choices: [  "39%",
                "72",
                "21%"],
    answer: "21%"

    },

{
    question: "When facing mount Rushmore, what Presidents head is furthest on the right?",
    choices: [   "George Washington",
                 "Abraham Lincoln",
                 "Teddy Roosevelt"],
    answer: "Abraham Lincoln"
    },

{
    question: "What is the world's most profitable company?",
    choices: [  "Amazon",
                "Apple",
                "Google"],
    answer: "Apple"
    },

{
    question: "Common problem as a child, what is nocturnal enuresis?",
    choices: [  "Sleepwalk",
                "Bed Wetting",
                "Insomnia"],
    answer: "Bed Wetting"
    },

{
    question: "John Goodman originally voiced which animated character?",
    choices: [  "Yellow M&M",
                "Buzz Lightyear",
                "Chester Cheetah"],
    answer: "Yellow M&M"
    },
        
{
    question: "Which of these products will help remove crayon stains from clothing?",
    choices: [  "Pinesol",
                "Windez",
                "WD-40"],
    answer: "WD-40"
    },
        
{
    question: "Where is the Sea of Tranquility located?",
    choices: [  "The Moon",
                "Brazil",
                "Australia"],
    answer: "The Moon"
    },
        
{
    question: "Which chess piece can only move diagonally?",
    choices: [  "Rook",
                "Knight",
                "Bishop"],
    answer: "Bishop"
    },
        
{
    question: "What was the first planet discovered by using a telescope in 1781?",
    choices: [  "Mars",
                "Uranus",
                "Jupiter"],
    answer: "Uranus"
    },
        
{
    question: "Why doesn't a duck's quack echo?",
    choices: [  "Unique Vocal Chords",
                "Hollow Beaks",
                "Nobody Knows"],
    answer: "Nobody Knows"
    },
        
{
    question: "What is the Milky Way?",
    choices: [  "Chocolate Bar",
                "A form of stars",
                "Our Galaxy"],
    answer: "Our Galaxy"
    },
];

var counter
var game = {
    correct: 0,
    incorrect: 0,
    timer: 40,

    countdown: function() {
        game.timer--;
        $("#timer-number").html(game.timer);
        if (game.timer === 0) {
            console.log("Time Up!");
            game.done();
        }
    },

    start: function() {
        counter = setInterval(game.countdown, 1000);

        $("#main-timer").prepend(
            "<h2>Time Remaining: <span id='counter-number'>40</span> Seconds</h2>"
        );

        $("#start").remove();

        for (var i = 0; i < myQuestions.length; i++) {
            area.append("<h2>" + myQuestions[i].question + "</h2>");
            for (var j = 0; j < myQuestions[i].choices.length; j++) {
                area.append("<input type='radio' name='question-" + i +
                "' value='" + myQuestions[i].choices[j] + "''>" + myQuestions[i].choices[j]);
            }
        }

        area.append("<button id ='done'> Done</button>");
    },

    done: function() {
        var inputs = area.children("input:checked");
        for (var i = 0; i < inputs.length; i++) {
            if ($(inputs[i]).val () === myQuestions[i].answer) {
                game.correct++;
            }   else{
                game.incorrect++;
            }
        }
        this.result();
    },

    result: function() {
        clearInterval(counter);
        $("#main-timer h2").remove();

        area.html("<h2> Done!</h2>");
        area.append("<h3>Correct Answers: " + this.correct + "</h3>");
        area.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    }
};

$(docuemnt).on("click", "#start", function() {
    game.start();
});

$(document).on("click", "#done", function() {
    game.done();
});