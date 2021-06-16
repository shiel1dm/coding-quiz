//Variables:
var button = document.querySelector('.button')


//Functions:
function quizStart(){
    
}

function btnClick(){
    document.querySelector('.button').style.visibility = 'hidden';
    document.querySelector('h2').textContent = 'Good Luck!';
    //run function quiz start at the end of this function.
}


//Script:

button.addEventListener('click', btnClick)