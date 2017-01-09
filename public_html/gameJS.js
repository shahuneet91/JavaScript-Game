/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
*/

//array of test questions
var test = [];
//array of options for a question
var options = [];

function initialize() {
//constructor function to create options values
//optValues : string of option available
//optCorrect: int -> value 1:correct 0:incorrect
function option(optValue,optCorrect){
    this.optValue = optValue,
    this.optCorrect = optCorrect;
};

//creating set of questions and answers 
var questionAns1 = {
    question : "What is JavaScript?",
    options :[ new option("Framework",0),new option("Script lang",1),new option("Database",0),new option("Design Lang",0)] 
    };
 var questionAns2 = {
    question : "What is Java?",
    options :[ new option("Framework",0),new option("Programming lang",1),new option("Database",0),new option("Design Lang",0)] 
    };
var questionAns3 = {
    question : "What is CSS?",
    options :[ new option("Framework",0),new option("Script lang",0),new option("Database",0),new option("Design Lang",1)] 
    };
var questionAns4 = {
    question : "What is HTML?",
    options :[ new option("Web Lang",0),new option("Sign lang",1),new option("Database",0),new option("Logical Lang",0)] 
    };
var questionAns5 = {
    question : "What is JQUERY?",
    options :[ new option("JS Library",1),new option("Database Lib",0),new option("Database",0),new option("Design Lang",0)] 
    };
   
//Adding valves sto the array of question and options   
test.push(questionAns1);
test.push(questionAns2);
test.push(questionAns3);
test.push(questionAns4);
test.push(questionAns5);
};

//function to find random value
Array.prototype.findRandom = function () {
  return this[Math.floor(Math.random() * this.length)];
};

function randomQuestion(){
//finding random set of quest and options    
var randomSet = test.findRandom() ;
//setting random question
document.getElementById("questionsHere").innerHTML = randomSet.question;
//array of qptions for related question 
var optionsArray = randomSet.options;

//finding random option from array of related options
var opt1 = optionsArray.findRandom();
//setting the value for button to random option
document.getElementById("opt1").value = opt1.optValue;
document.getElementById("btn1Label").value = opt1.optCorrect;
//removing the option from the array
optionsArray.splice( optionsArray.indexOf(opt1), 1 );

//finding random option from array of related options
var opt2 = optionsArray.findRandom();
//setting the value for button to random option
optionsArray.splice( optionsArray.indexOf(opt2), 1 );
//removing the option from the array
document.getElementById("opt2").value = opt2.optValue;
document.getElementById("btn2Label").value = opt2.optCorrect;

//procedure same as above for 3rd and 4th buttons
var opt3 = optionsArray.findRandom();
optionsArray.splice( optionsArray.indexOf(opt3), 1 );
document.getElementById("opt3").value = opt3.optValue;
document.getElementById("btn3Label").value = opt3.optCorrect;


var opt4 = optionsArray[0];
document.getElementById("opt4").value = opt4.optValue;
document.getElementById("btn4Label").value = opt4.optCorrect;

/*removing the set of question and options 
from the array of questions and related options*/
test.splice(test.indexOf(randomSet),1);

for(var i=1;i<=4;i++)
{
 document.getElementById("opt"+i).setAttribute("class", "btn-lg btn-primary");
  document.getElementById("opt"+i).style.visibility = "visible";
  document.getElementById("opt"+i).disabled = false;
  document.getElementById("chancesLabel"+i).style.visibility = "hidden";
  if(i===4){break;}
}
}
function nextQuestion(){

    randomQuestion();
document.getElementById("fifty50Span").style.visibility = "visible";
document.getElementById("audianceSpan").style.visibility = "visible";
document.getElementById('audianceImg').setAttribute("src","Images/starImage.gif");
document.getElementById('fifty50Img').setAttribute("src","Images/starImage.gif");
document.getElementById("fifty50Img").setAttribute("onclick","fifty50()");
document.getElementById("audianceImg").setAttribute("onclick","audiancePole()");
}

function randombetween(min, max) {
  return Math.floor(Math.random()*(max)+min);
}


function findRandFour(){
var max = 100;
var r1 = randombetween(1, max-1);
var r2 = randombetween(1, max-1-r1);
var r3 = randombetween(1, max-1-r1-r2);
var r4 = max - r1 - r2 - r3;
var randomNumberArray = [];
randomNumberArray.push(r1);
randomNumberArray.push(r2);
randomNumberArray.push(r3);
randomNumberArray.push(r4);

/*function sortNumber(a,b){
    return a-b;
}
randomNumberArray.sort(sortNumber());*/
return randomNumberArray;
}

function fifty50(){
document.getElementById("audianceSpan").style.visibility = "hidden";
document.getElementById('audianceImg').setAttribute("src","Images/StarImageOnSelect.jpg");
    var arrayOfLabels =[]; 
var correctLabel;
for(var i =1; i<=4 ; i++)
{
    var btn = "btn"+i+"Label";
    var value = document.getElementById(btn).value; 
    if (value === 0)
    {
        arrayOfLabels.push(btn);
    }
    else if(value === 1)
    {
        var cLabel = btn;
        correctLabel = cLabel.substring(0,4);
    }
    if(i===4)
    {
        break;
    }
}
var btnL = arrayOfLabels.findRandom();
var btnLabel = btnL.substring(0,4);

for (var j =1;j<=4;j++)
{
   
    var btn = "btn"+j; 
    if(btn===btnLabel||btn===correctLabel)
    {
       document.getElementById("opt"+j).style.visibility = "visible";
    }
    else
    {
       document.getElementById("opt"+j).style.visibility = "hidden";
    }
        if(j===4)
    {
        break;
    }
}
   document.getElementById("nxt").style.visibility = "hidden";
     document.getElementById("fifty50Img").setAttribute("onclick","");
}
function audiancePole(){
document.getElementById("fifty50Span").style.visibility = "hidden";
document.getElementById("fifty50Img").setAttribute("src","Images/StarImageOnSelect.jpg");
var ArrayOfNumbers=findRandFour();
var max = Math.max.apply(Math, ArrayOfNumbers);
 ArrayOfNumbers.splice(ArrayOfNumbers.indexOf(max),1);
var correctLabelIndex;
for(var i =1; i<=4 ; i++)
{
    var btn = "btn"+i+"Label";
    var value = document.getElementById(btn).value; 
    var chancesLabel = "chancesLabel"+i;
     
    if (value === 1)
    {
        correctLabelIndex =i;
        document.getElementById(chancesLabel).innerHTML=max+"%";
        document.getElementById(chancesLabel).style.visibility="visible";
    }
    else{
        document.getElementById(chancesLabel).innerHTML=ArrayOfNumbers[0]+"%";
        document.getElementById(chancesLabel).style.visibility="visible";
        ArrayOfNumbers.splice(0,1);
    }
    if(i===4)
    {
        break;
    }
}
   document.getElementById("nxt").style.visibility = "hidden";
     document.getElementById("audianceImg").setAttribute("onclick","");

}

function selectAnswer(id){
    
    var val = id;
   var x = val.substr(3,1);
  var value = document.getElementById("btn"+x+"Label").value;
   
   if(value===1){
      document.getElementById(id).setAttribute("class", "btn-lg btn-success");

       var strAmount = document.getElementById("amount").innerHTML;
//       var leng = strAmount.length;
//       var num = strAmount.substring(1,leng);
       var onlyNumber =strAmount.substring(1,strAmount.length); 
       var amt = parseInt(onlyNumber);
       var priceAmt =amt+1000;
       document.getElementById("amount").innerHTML="$"+priceAmt;
       
   }
   else{
        document.getElementById(id).setAttribute("class", "btn-lg btn-danger");

   }
   for(var i=1;i<=4;i++)
   {
    document.getElementById("opt"+i).disabled = true;

    if(i===4)
    {
        break;
    }
   }
   document.getElementById("fifty50Span").style.visibility = "hidden";
document.getElementById("audianceSpan").style.visibility = "hidden";
   document.getElementById("nxt").style.visibility = "visible";


}
