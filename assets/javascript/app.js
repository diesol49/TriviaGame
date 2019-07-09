var card = $("#quiz-area");

// Questions
var questions = [
    {
    question: "Our atmosphere is approximately what percent oxygen?",
    answers: [      "39%",
                    "72",
                    "21%"],
    correctAnswer:  "21%"

    },

{
    question: "When facing mount Rushmore, what Presidents head is furthest on the right?",
    answers: [      "George Washington",
                    "Abraham Lincoln",
                    "Teddy Roosevelt"],
    correctAnswer:  "Abraham Lincoln"
    },

{
    question: "What is the world's most profitable company?",
    answers: [      "Amazon",
                    "Apple",
                    "Google"],
    correctAnswer:  "Apple"
    },

{
    question: "Common problem as a child, what is nocturnal enuresis?",
    answers: [      "Sleepwalk",
                    "Bed Wetting",
                    "Insomnia"],
    correctAnswer:  "Bed Wetting"
    },

{
    question: "John Goodman originally voiced which animated character?",
    answers: [      "Yellow M&M",
                    "Buzz Lightyear",
                    "Chester Cheetah"],
    correctAnswer:  "Yellow M&M"
    },
        
{
    question: "Which of these products will help remove crayon stains from clothing?",
    answers: [      "Pinesol",
                    "Windex",
                    "WD-40"],
    correctAnswer:  "WD-40"
    },
        
{
    question: "Where is the Sea of Tranquility located?",
    answers: [      "The Moon",
                    "Brazil",
                    "Australia"],
    correctAnswer:  "The Moon"
    },
        
{
    question: "Which chess piece can only move diagonally?",
    answers: [      "Rook",
                    "Knight",
                    "Bishop"],
    correctAnswer:  "Bishop"
    },
        
{
    question: "What was the first planet discovered by using a telescope in 1781?",
    answers: [      "Mars",
                    "Uranus",
                    "Jupiter"],
    correctAnswer:  "Uranus"
    },
        
{
    question: "Why doesn't a duck's quack echo?",
    answers: [      "Unique Vocal Chords",
                    "Hollow Beaks",
                    "Nobody Knows"],
    correctAnswer:  "Nobody Knows"
    },
        
{
    question: "What is the Milky Way?",
    answers: [      "Chocolate Bar",
                    "A form of stars",
                    "Our Galaxy"],
    correctAnswer:  "Our Galaxy"
    },
];

var timer;

var game = {
  correct: 0,
  incorrect: 0,
  counter: 60,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#sub-wrapper").prepend(
      "<h2>Time Remaining: <span id='counter-number'>60</span> Seconds</h2>"
    );

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      card.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        card.append("<input type='radio' name='question-" + i +
          "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    card.append("<button id='done'>Done</button>");
  },

  done: function() {
    var inputs = card.children("input:checked");
    for (var i = 0; i < inputs.length; i++) {
      if ($(inputs[i]).val() === questions[i].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    }
    this.result();
  },

  result: function() {
    clearInterval(timer);

    $("#sub-wrapper h2").remove();

    card.html("<h2>All Done!</h2>");
    card.append("<h3>Correct Answers: " + this.correct + "</h3>");
    card.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
  }
};


$(document).on("click", "#start", function() {
  game.start();
});

$(document).on("click", "#done", function() {
  game.done();
});
