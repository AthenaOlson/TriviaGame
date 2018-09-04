$(document).ready(function() {
});
    console.log("ready!");
// $(".startButton").on("click", function() {
//         displayCurrentQuestion();
//         $(".startButton").hide();
//         $(".welcomeMessage").hide();
//       });
 
    var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;
//  Questions
var questions = [
    ["What was the name of the burnout in Fast Times at Ridgemont High?", "Joel Goodson", "Jeff Spicoli", "Daniel LaRusso", "B"],
    ["How many Championships did the Boston Celtics win between 1980-1989?", "Three", "Five", "Zero", "A"],
    ["At what university did the band 'The Pixies' meet and form their band?", "University of New Hampshire - Durham", "University of Arizona - Tucson", "University of Massachusetts - Amherst", "C"]
    ];
    console.log(questions);


      
function get(x) {
    return document.getElementById(x);
}
// set timer

setTimeout(fiveSeconds, 1000 * 5);
setTimeout(tenSeconds, 1000 * 10);
setTimeout(timeUp, 1000 * 15);
    function fiveSeconds() {
        $("#time_left").text("About 10 Seconds Left!");
        console.log("10 seconds left");
    }
    function tenSeconds() {
        $("#time_left").text("About 5 Seconds Left!");
        console.log("5 seconds left");
    }
    function timeUp() {
        console.log("done");
        $("#time_left").text("Time's Up...Thanks for playing!");
        console.log("time is up");

        // if timeUp then display TEST COMPLETED and xx out of xx questions
  }
  
    
// start of game
function renderQuestion() {
    test = get("test");
    if (pos >= questions.length) {
        test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct!</h2>";
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
    test.innerHTML += "<li><input type='radio' name='choices' value='C'> "+chC+"</li><br><br>";
    test.innerHTML += "<submitButton onclick='checkAnswer()'>Submit Answer";
    }
    function checkAnswer(){
        // use getElementsByName because we have an array which it will loop through
        choices = document.getElementsByName("choices");
        for (var i=0; i<choices.length; i++){
          if (choices[i].checked){
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





    








