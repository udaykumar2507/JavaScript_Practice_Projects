const questions=[
    {
        question:"In Thor Ragnarok: Thor Reunited with Hulk on which Planet ?",
        answers:[{text:"Asgard",correct:false},
                 {text:"Xandar",correct:false},
                 {text:"Saakar",correct:true},
                 {text:"Berhert",correct:false}]
    },
    {
        question:"What type of doctor is doctor strange?",
        answers:[{text:"Endocrinologist",correct:false},
                 {text:"Neurosugeon",correct:true},
                 {text:"Oncologist",correct:false},
                 {text:"Internists",correct:false}]
    },
    {
        question:"On what Planet was soul stone in Infinity war?",
        answers:[{text:"Vormir",correct:true},
                 {text:"Xandar",correct:false},
                 {text:"Titan",correct:false},
                 {text:"Aladna",correct:false}]
    },
    {
        question:"Who Said ,'what is grief' if not love perserving ?",
        answers:[{text:"Black Panther",correct:false},
                 {text:"Captain America",correct:false},
                 {text:"Vision",correct:true},
                 {text:"Iron Man",correct:false}]
    },
    {
        question:"Rocket has been called all of the following names except?",
        answers:[{text:"Whiskers",correct:true},
                 {text:"Triangle Faced Monkey",correct:false},
                 {text:"Sweet Rabbit",correct:false},
                 {text:"Trash Panda",correct:false}]
    },
    {
        question:"What is the wifi password karl modo said to Doctor Strange?",
        answers:[{text:"Dormammu",correct:false},
                 {text:"Shambhala",correct:true},
                 {text:"Kamar Taj",correct:false},
                 {text:"Agamatto",correct:false}]
    }
]
const questionElement=document.querySelector(".Question");
const answerbutton=document.querySelector(".answer-btn");
const nextbutton=document.querySelector(".next-btn");
let currentIndex=0;
let points=0;
const startquiz=()=>{
    currentIndex=0;
    points=0;
    nextbutton.innerHTML="Next";
    showQuestion();
}
const showQuestion=()=>{
    resetState();
    let currquestions=questions[currentIndex];
    let questionno=currentIndex+1;
    questionElement.innerHTML=questionno+". "+currquestions.question;

    currquestions.answers.forEach(answer=>{
        let buttons=document.createElement("button");
        buttons.innerHTML=answer.text;
        buttons.classList.add("btn");
        answerbutton.appendChild(buttons);
        if (answer.correct){
            buttons.dataset.correct=answer.correct;
        }
        buttons.addEventListener('click',select)
    })
}
const resetState=()=>{
    nextbutton.style.display="none";
    while(answerbutton.firstChild){
        answerbutton.removeChild(answerbutton.firstChild);
    }
}
const select=(e)=>{
    const selectedbtn=e.target;
    if(selectedbtn.dataset.correct){
        selectedbtn.classList.add("correct");
        points++;
    }else{
        selectedbtn.classList.add("incorrect");
    }
    Array.from(answerbutton.children).forEach(button=>{
        if (button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    })
    nextbutton.style.display="block";
}
nextbutton.addEventListener('click',()=>{
    if (currentIndex<questions.length){
        handlenext();
    }else{
        startquiz();
    }
});
const handlenext=()=>{
    currentIndex++;
    if (currentIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
const showScore=()=>{
    resetState();
    questionElement.innerHTML=`You Scored ${points} out of ${questions.length}!`;
    nextbutton.innerHTML="Play Again";
    nextbutton.style.display="block";
}
startquiz();