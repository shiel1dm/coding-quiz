//Variables:
var button = document.querySelector('.button')
var quiz = document.querySelector('.quiz')

var questions = [
    {
        question: 'Which of these is considered a coding language?',
        answers: {
            a: 'HTML',
            b: 'ADSFWE',
            c: 'This one is wrong',
            d: 'This one is right'
        },
        correct: 'd'
    },
    {
        question: 'How old am I?',
        answers: {
            a: '17',
            b: '21',
            c: '30',
            d: '120'
        },
        correct: 'c'
    }
]

localStorage.setItem('questions', JSON.stringify(questions))

console.log(questions[0].answers.a)


//Functions:
function quizStart(){
    var content = JSON.parse(localStorage.getItem('questions')) 
    var choices = document.createElement('p')
    var question = document.createElement('h3')
    var answers = content[0].answers

    question.textContent = content[0].question
   
     var q1 = content[0].answers.a
     var q2 = content[0].answers.b
     var q3 = content[0].answers.c
     var q4 = content[0].answers.d

     quiz.appendChild(question)
     quiz.innerHTML += "<label> <input type='radio' name='choices' value='a'>"+q1+"</label><br>"
     quiz.innerHTML += "<label> <input type='radio' name='choices' value='a'>"+q2+"</label><br>"
     quiz.innerHTML += "<label> <input type='radio' name='choices' value='a'>"+q3+"</label><br>"
     quiz.innerHTML += "<label> <input type='radio' name='choices' value='a'>"+q4+"</label><br>"
    
    
    
    
   


    

}



function btnClick(){
    document.querySelector('.button').style.visibility = 'hidden';
    document.querySelector('h2').textContent = 'Click on the Correct Answers. \r\n Good Luck!';
    
    //run function quiz start at the end of this function.
    quizStart()
}


//Script:

button.addEventListener('click', btnClick)