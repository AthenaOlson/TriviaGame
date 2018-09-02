$(document).ready(function() {
});
    console.log("ready!");
 
    var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;
//  Questions
var questions = [
    ["What was the name of the burnout in Fast Times at Ridgemont High?", "Joel Goodson", "Jeff Spicoli", "Daniel LaRusso", "B"],
    ["How many Championships did the Boston Celtics win between 1980-1989?", "Three", "Five", "Zero", "A"],
    ["At what university did The Pixies meet and form their band?", "University of New Hampshire - Durham", "University of Arizona - Tucson", "University of Massachusetts - Amherst", "C"]
    ];
    console.log(questions);

// $(".startButton").on("click", function() {
//         displayCurrentQuestion();
//         $(".startButton").hide();
//         $(".welcomeMessage").hide();
//       });
      
function get(x){
    return document.getElementById(x);
}

function renderQuestion() {
    test = get("test");
    if (pos >= questions.length) {
        test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
        get("test_status").innerHTML = "Test completed";
        pos = 0;
        correct = 0;
        return false;
    }      
    get ("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
    question = questions[pos][0];
    chA = questions[pos][1];
    chB = questions[pos][2];
    chC = questions[pos][3];
    test.innerHTML = "<h3>"+question+"</h3>";
    test.innerHTML += "<li><input type='radio' name='choices' value='A'> "+chA+"</li><br>";
    test.innerHTML += "<li><input type='radio' name='choices' value='B'> "+chB+"</li><br>";
    test.innerHTML += "<li><input type='radio' name='choices' value='D'> "+chC+"</li><br><br>";
    test.innerHTML += "<submitButton><button onclick='checkAnswer()'>Submit Answer</submitButton></li>";
    }
    function checkAnswer(){
        // use getElementsByName because we have an array which it will loop through
        choices = document.getElementsByName("choices");
        for(var i=0; i<choices.length; i++){
          if(choices[i].checked){
            choice = choices[i].value;
          }
        }
        if (choice === questions[pos][4]) {
            correct++;
        }
            pos++;
            renderQuestion();
    }
    window.addEventListener("load", renderQuestion, false);

    // var currentQuestion = 0;
    // var correctAnswers = 0;
    // var quizOver = false;

    // function displayCurrentQuestion() {
        
    //     $(".question").html(questions[0].question);
    //     $(this).find(".question");
    //     $(".nextButton").append("<div>" + "Next!"); 
    //     for (var i = 0; i < questions[0].choices.length; i++) {
    //         $(".choiceList").append("<ul>" + questions[0].choices[i]+ "</ul>");
    //     }
    // }
// });




    








