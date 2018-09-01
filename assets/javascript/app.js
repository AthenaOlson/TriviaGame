$(document).ready(function() {
    console.log("ready!");

//  Questions
// var questions = [
//     ["What was the name of the burnout in Fast Times at Ridgemont High?", "Joel Goodson", "Jeff Spicoli", "Daniel LaRusso"],
//     ["What is 7 x 4?", "21", "27", "28", "C"],
//     ["What is 16 / 4?", "4", "6", "3", "A"],
//     ["What is 8 x 12?", "88", "112", "96", "C"]
//     ];

    var questions = [
        {
        question: "What was the name of the burnout in Fast Times at Ridgemont High?",
        choices: ["Joel Goodson", "Jeff Spicoli", "Daniel LaRusso"],
        correctAnswer: "Jeff Spicoli"
        },
        
        {
        question: "How many Championships did the Boston Celtics win between 1980-1989?",
        choices: ["Three", "Five", "Zero"],
        correctAnswer: "Three"
        },

        {
        question: "At what university did The Pixies meet and form their band?",
        choices: ["University of New Hampshire, Durham", "University of Arizona, Tucson", "University of Massachusetts, Amherst", "The Pixes did not meet at a university"],
        correctAnswer: 2
        }];
        
console.log(questions.length);


// Display div class .welcomeMessage & div class .startButton
// write to DOM or write in html?
// there will be no undefined .quizMessage in this section because there aren't any choices - maybe it's better on its own?

$(".startButton").on("click", function() {
        displayCurrentQuestion();
        $(".startButton").hide();
        $(".welcomeMessage").hide();
      });
    
    var currentQuestion = 0;
    var correctAnswers = 0;
    var quizOver = false;

    function displayCurrentQuestion() {
        
        $(".question").html(questions[0].question);
        $(this).find(".question");
        $(".nextButton").append("<div>" + "Next!"); 
        for (var i = 0; i < questions[0].choices.length; i++) {
            $(".choiceList").append("<ul>" + questions[0].choices[i]+ "</ul>");
            
             
            
        }
        
                // insert var questions and parse out 'question' and 'choices' by array in one function?
        // define what to do if user doesn't select an item from the ul class .choiceList that is displayed via the div class .quizMessage, message to say 'please select an answer'. Where does this go in my code?
            // if (value == undefined) {
                // $(document).find(".quizMessage").text("Please select an answer");
        // Write to .html inside 'quizContainer' div class:
        // display 'question' div class
        // display 'choiceList' ul class
        // display 'nextButton' div class

        // tally user answer result div class

        // can this all be put into one function & tallied at the end?

        // end quiz
        
 
    }

    console.log(currentQuestion);

   
    
});




    








