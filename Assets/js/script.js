//Variables:
var button = document.querySelector('.button');
var quiz = document.querySelector('.quiz');
var headMSG = document.querySelector('h2')
var form = document.getElementsByName('userchoices');
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

localStorage.setItem('questions', JSON.stringify(questions))

//Functions:

function submit(event){
    event.preventDefault()
    //var confirmed = document.getElementByN('userchoices').value //This is the user's confirmed answer. I couldn't think of a better var name at the time and I don't want to overuse answer
    var confirmed = document.querySelector("input[name='userchoices']:checked").value //lifesaver, make sure you comment on this line, and learn it, because this was NOT your brainchild haha
    //var test = document.getElementsByClassName('quiz')
    console.log(i, 'submit loop')
    console.log(questions.length)
    
    
    
    if (confirmed == questions[i].correct){
        console.log('correct!')
    }
    else{console.log('incorrect')}

    
    if(i == questions.length-1){
        //headMSG.textContent = 'Final Question!'
        console.log('finished')
        return
            
    }
    if((i > questions.length -1)) {
        console.log('error')
        
    }
    else{
        i++
        
        quizStart()
    }    
    
}


// this function creates and adds content to the quiz card.
function quizStart(){
    var content = JSON.parse(localStorage.getItem('questions')) 
    var question = document.createElement('h3')
    var q1 = content[i].answers.a
    var q2 = content[i].answers.b
    var q3 = content[i].answers.c
    var q4 = content[i].answers.d
   

    question.textContent = content[i].question

    quiz.appendChild(question)
    quiz.innerHTML += "<label class='questions'> <input type='radio' name='userchoices' value='a'>"+q1+"</label><br>"
    quiz.innerHTML += "<label class='questions'> <input type='radio' name='userchoices' value='b'>"+q2+"</label><br>"
    quiz.innerHTML += "<label class='questions'> <input type='radio' name='userchoices' value='c'>"+q3+"</label><br>"
    quiz.innerHTML += "<label class='questions'> <input type='radio' name='userchoices' value='d'>"+q4+"</label><br>"
    quiz.innerHTML += "<input type ='submit' value='Submit'>"
    
    quiz.addEventListener('submit', submit)
    console.log(i, 'in the start loop, should be updating')
    
    
}

console.log(i)
function btnClick(){
    document.querySelector('.button').style.visibility = 'hidden';
    headMSG.textContent = 'Click on the Correct Answers. \r\n Good Luck!';
    
    
    //run function quiz start at the end of this function.
    quizStart()
    //i++ this one worked, kinda

}






//Script:

button.addEventListener('click', btnClick)
//document.getElementByN('confirm').addEventListener(click, submit)


// decide wheter to use a forEach loop, or how you're going to get a return value from your submit loop to update the start loop... maybe update a global var?
// if i is global and a pass a value from the submit function that updates the global, and then use the global to grab my next set of info.