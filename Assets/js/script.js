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


//Functions:
function quizStart(){
    var content = JSON.parse(localStorage.getItem('questions')) 
    var test = document.createElement('button')
    var title = document.createElement('h3')

    title.textContent = content.question
    test.textContent = content.answer
    quiz.appendChild(title)
    quiz.appendChild(test)
    for(i = 0; i < question1.wrong.length; i++){
        test.textContent = content.wrong[i];
        quiz.appendChild(test)
    }

}

questions.forEach

function btnClick(){
    document.querySelector('.button').style.visibility = 'hidden';
    document.querySelector('h2').textContent = 'Click on the Correct Answers. \r\n Good Luck!';
    
    //run function quiz start at the end of this function.
    quizStart()
}


//Script:

button.addEventListener('click', btnClick)