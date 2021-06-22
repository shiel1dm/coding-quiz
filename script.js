//Variables:
var button = document.querySelector('.button');
var box = document.querySelector('#box')
var quiz = document.querySelector('.quiz');
var headMSG = document.querySelector('h2');
var question = document.createElement('h3');
var message = document.createElement('p');
var timeMSG= document.querySelector('#timer');
var i = 0;
var score = 0;
var initial = document.getElementById('.initial');
var time = 120;

//Object:
var questions = [
    {
        question: 'What was the name of the Red Wings first Arena?',
        answers: {
            a: 'Joe Louis Arena',
            b: 'Little Cesear\'s Arena',
            c: 'Pepsi Center',
            d: 'Olympia'
        },
        correct: 'd'
    },
    {
        question: 'In Red Wings history, who is commonly known as "the Captain"?',
        answers: {
            a: 'Steve Yzerman',
            b: 'Dylan Larkin',
            c: 'Nicklas Lidstrom',
            d: 'Chris Osgood'
        },
        correct: 'a'
    },
    {
        question: 'Who holds the all time record for shutouts in Red Wing history?',
        answers: {
            a: 'Chris Osgood',
            b: 'Gump Worsley',
            c: 'Terry Sawchuck',
            d: 'Chris Chelios'
        },
        correct: 'c'
    },
    {
        question: 'The Red Wings have the third most Stanley Cups in NHL history, how many have they won?',
        answers: {
            a: '18',
            b: '11',
            c: '7',
            d: '22'
        },
        correct: 'b'
    },
    {
        question: 'After seeing my work, do you want to hire me?',
        answers: {
            a: 'yes',
            b: 'The correct answer is a',
            c: 'Seriously, it is a',
            d: 'fine, be that way'
        },
        correct: 'a'
    }
]

var q1 = questions[i].answers.a
var q2 = questions[i].answers.b
var q3 = questions[i].answers.c
var q4 = questions[i].answers.d



//Functions:
//pretty straight forward, but used the same thing I used to create the doc to clear the doc, then run the function to create a new doc w/ updated Q&A
function timer(){
    var interval = setInterval(function(){
        time--;
        message.textContent= time + ' seconds left'
        timeMSG.appendChild(message)

        if(time === 0){
            clearInterval(interval);
            gameOver()

        }
    },1000)
}

function gameOver(){
    document.querySelector('#Qsub').style.visibility = 'hidden';
    message.textContent = 'Sorry, you are out of time please refresh your browser and try again!'
    timeMSG.appendChild(message)
}

function restart(){
    quiz.innerHTML = ''
}

function saveScore(event){
    event.preventDefault
    var test = document.querySelector("input[name='initials']").value
    var scores = {
        initials: test,
        score: score,
    }
    localStorage.setItem('savedScore', JSON.stringify(scores))
}

function scoreCard(){
    headMSG.textContent = 'Thank you for playing!'
    message.textContent = 'Would you like to save your score?'

    quiz.appendChild(message)
    quiz.innerHTML += "<label id='initial'> <input type='text' name='initials' default='Enter your initials here!'></label><br>"
    quiz.innerHTML += "<input type ='submit' value='Submit'>"

    quiz.addEventListener('submit', saveScore)
}

function submit(event){
    event.preventDefault()
    var confirmed = document.querySelector("input[name='userchoices']:checked").value 
    //lifesaver, make sure you comment on this line, and learn it, because this was NOT your brainchild haha
    // from my understanding, I'm using querySelector to grab any input element, and calling it by name. I'm then checking the values under userchoices for checked = true.

    
    if (confirmed == questions[i].correct){
        score ++
        headMSG.textContent= 'Correct!'
    }
    else{
        headMSG.textContent= 'Incorrect!'
        
}

    
    if(i == questions.length-1){
        console.log('finished')
        console.log(typeof score)
        restart()
        scoreCard()
        
        return
    }
    if((i > questions.length -1)) {
        console.log('error')
    }
    else{
        i++
        
        restart()
        createForm()
    }    
}


 
function createForm(){
    
    var q1 = questions[i].answers.a
    var q2 = questions[i].answers.b
    var q3 = questions[i].answers.c
    var q4 = questions[i].answers.d
    question.textContent = questions[i].question

    box.prepend(question) // cool function that creates the element BEFORE other elements that may already exist.
    
    quiz.innerHTML += "<label id='question1'> <input type='radio' name='userchoices' value='a'>"+q1+"</label><br>"
    quiz.innerHTML += "<label id='question2'> <input type='radio' name='userchoices' value='b'>"+q2+"</label><br>"
    quiz.innerHTML += "<label id='question3'> <input type='radio' name='userchoices' value='c'>"+q3+"</label><br>"
    quiz.innerHTML += "<label id='question4'> <input type='radio' name='userchoices' value='d'>"+q4+"</label><br>"
    quiz.innerHTML += "<input type ='submit' id='Qsub' value='Submit'>"
    
    quiz.addEventListener('submit', submit)
}

function btnClick(){
    document.querySelector('.button').style.visibility = 'hidden';
    headMSG.textContent = 'Click on the Correct Answers. \r\n Good Luck!';
    createForm()
    timer()
}






//Script:

button.addEventListener('click', btnClick)


/** So I struggled to get the code to subtract time when a question was answered incorrectly. I tried to subtract time away during my else loop of my Submit function
 but it did not update the counter. A couple things, the criteria didn't specifically say it had to be coding questions. If you don't think my Red Wings trivia is 
 appropriate please let me know, and I will update the questions in my object. 
 Finally, I did not display the scores because it was not explicitly stated in the acceptance criteria. However, I wanted to show a knowledge of it. There are a lot of different ways to 
 accomplish this. But I think the way I would have done it would be to create a new element below my quiz, I think it would be more asthetically pleasing. So I would create a new element and 
 using a for loop to iterate the length of all the scores stored. The loop would run a function that took items from the stored object and either append the items to a <ul> or a <p> (this seems less complicated).
 I'm not sure if ths is possible with objects but you could use .sort() to display them in order and maybe iterate down the list backwords? If I get more time I'll probably add all of this.
*/


