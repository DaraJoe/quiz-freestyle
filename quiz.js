const data = [
    {
      id: 1,
      question: "Which of these fish is actually a fish?",
      answers: [
        { answer: "swordfish", isCorrect: true },
        { answer: "jellyfish", isCorrect: false },
        { answer: "starfish", isCorrect: false },
        { answer: "crayfish", isCorrect: false },
      ],
    },
    {
      id: 2,
      question: "A flutter is a group of:",
      answers: [
        { answer: "bees", isCorrect: false },
        { answer: "penguins", isCorrect: false },
        { answer: "butterflies", isCorrect: true },
        { answer: "camels", isCorrect: false },
      ],
    },
    {
      id: 3,
      question: "A group of which animals is referred to as a wake?",
      answers: [
        { answer: "bats", isCorrect: false },
        { answer: "vultures", isCorrect: true },
        { answer: "ants", isCorrect: false },
        { answer: "pigs", isCorrect: false },
      ],
    },
  ];

const gamePage = document.querySelector(".game");
const resultPage = document.querySelector(".result");
const question = document.querySelector(".question");
const answerArea = document.querySelector(".answers");
const submit = document.querySelector(".submit");
const playAgain = document.querySelector(".play");

let questionIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let total = 0;
let selectedAnswer;

const retakeQuiz = () =>{
   questionIndex = 0;
  correctCount = 0;
 wrongCount = 0;
  total = 0;
 showQuest(questionIndex);
}

playAgain.addEventListener("click", ()=>{
  resultPage.style.display = "none"
  gamePage.style.display = "block"

  retakeQuiz()
})

const displayResult = ()=>{
  resultPage.style.display = "block"
  gamePage.style.display = "none"

  resultPage.querySelector(".correct").textContent =
  `Correct Answers: ${correctCount}`

  resultPage.querySelector(".wrong").textContent =
  `Wrong Answers: ${wrongCount}`

  resultPage.querySelector(".score").textContent =
  `Score: ${(correctCount - wrongCount) * 10}`
}

const showQuest = (questionNumber)=>{
  if (questionIndex === data.length) return displayResult()
  selectedAnswer = null;
    question.textContent = data[questionNumber].question;
    answerArea.innerHTML = data[questionNumber].answers.map((item, index) =>
      `
      <div class="answer">
          <input name="answer" type="radio" id=${index} value=${item.isCorrect} />
          <label for="1">${item.answer}</label>
      </div>
      `
  ).join("");

  selectAnswer()
};

 const selectAnswer = ()=>{
  answerArea.querySelectorAll("input").forEach(ele=>{
    ele.addEventListener("click",(e)=>{
      selectedAnswer = e.target.value;

    });
  });
};

const submitAnswer = () =>{
  submit.addEventListener("click", ()=>{
    if (selectedAnswer !== null){
    selectedAnswer === "true" ? correctCount++ : wrongCount++
    questionIndex++;
    showQuest(questionIndex);
  }else alert("Select an answer!");
  });
};

showQuest(questionIndex);
submitAnswer () 
