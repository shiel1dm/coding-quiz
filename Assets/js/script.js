//Variables:
var button = document.querySelector('.button');
var quiz = document.querySelector('.quiz');
var headMSG = document.querySelector('h2')
var i = 0






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
var q1 = questions[i].answers.a
var q2 = questions[i].answers.b
var q3 = questions[i].answers.c
var q4 = questions[i].answers.d

localStorage.setItem('questions', JSON.stringify(questions))

//Functions:
//pretty straight forward, but used the same thing I used to create the doc to clear the doc, then run the function to create a new doc w/ updated Q&A
function restart(){
    quiz.innerHTML = ''
    createForm()
   
}

function submit(event){
    event.preventDefault()
    var confirmed = document.querySelector("input[name='userchoices']:checked").value //lifesaver, make sure you comment on this line, and learn it, because this was NOT your brainchild haha
    
    if (confirmed == questions[i].correct){
        console.log('correct!')
    }
    else{console.log('incorrect')}

    
    if(i == questions.length-1){
        //headMSG.textquestions = 'Final Question!' not a bad idea but don't put work into implementing it until you've met your acceptance criteria
        console.log('finished')
        return
            
    }
    if((i > questions.length -1)) {
        console.log('error')
        
    }
    else{
        i++
        
        restart()
    }    
    
}

function createForm(){

    var question = document.createElement('h3')
    var q1 = questions[i].answers.a
    var q2 = questions[i].answers.b
    var q3 = questions[i].answers.c
    var q4 = questions[i].answers.d
    question.textContent = questions[i].question


    quiz.appendChild(question)
    
    quiz.innerHTML += "<label id='question1'> <input type='radio' name='userchoices' value='a'>"+q1+"</label><br>"
    quiz.innerHTML += "<label id='question2'> <input type='radio' name='userchoices' value='b'>"+q2+"</label><br>"
    quiz.innerHTML += "<label id='question3'> <input type='radio' name='userchoices' value='c'>"+q3+"</label><br>"
    quiz.innerHTML += "<label id='question4'> <input type='radio' name='userchoices' value='d'>"+q4+"</label><br>"
    quiz.innerHTML += "<input type ='submit' value='Submit'>"
    
    quiz.addEventListener('submit', submit)
    
}

function btnClick(){
    document.querySelector('.button').style.visibility = 'hidden';
    headMSG.textquestions = 'Click on the Correct Answers. \r\n Good Luck!';
    createForm()

}






//Script:

button.addEventListener('click', btnClick)
//document.getElementByN('confirm').addEventListener(click, submit)


