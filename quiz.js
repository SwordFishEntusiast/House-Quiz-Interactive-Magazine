const data = [
  {
    id: 1,
    question: "Would you consider yourself to be a confident person overall? ",
    answers: [
      { answer: "Not at all", points: 5 },
      { answer: "Not Quite", points: 4 },
      { answer: "Unsure", points: 3 },
      { answer: "Yes, to an extent", points: 2 },
      { answer: "Yes, extremely", points: 1 }
    ],
  },
  {
    id: 2,
    question: "If your close friend is in danger, would you save them even if the situation is extremely high risk?",
    answers: [
      { answer: "No, not if it’s risky towards me", points: 1 },
      { answer: "Maybe if there’s something for me in it aswell ", points: 2 },
      { answer: "If I can get assistance for my own safety ", points: 4 },
      { answer: "Yes, I’ll try my best", points: 3 },
      { answer: "I’ll act with no second thought", points: 5 },
    ],
  },
  {
    id: 3,
    question: "Would you pride yourself on being perfect at any particular hobby of yours?",
    answers: [
      { answer: "Yes", points: 1 },
      { answer: " Extremely good if not perfect ", points: 2 },
      { answer: " I’d consider myself above average ", points: 3 },
      { answer: " I recognise my imperfections and know I’m not the best", points: 4 },
      { answer: "there’s always going to be someone better than me, no matter how good i am", points: 5 }
    ],
  },
  {
    id: 4,
    question: "In any competitive environment, what would be your main priority as a participant?",
    answers: [
      { answer: "Winning above all, no matter the cost", points: 1 },
      { answer: "Winning yet wanting good competition ", points: 2 },
      { answer: "Winning while having fun", points: 3 },
      { answer: "Improving myself even if I don’t win", points: 4 },
      { answer: "Just having fun, even if I don’t win", points: 5 }
    ],
  },
  {
    id: 5,
    question: "What would be your means to motivate your acquaintances in any situation?",
    answers: [
      { answer: "Instilling fear, so as to reinforce their behaviour towards a favourable outcome", points: 1 },
      { answer: "Instilling anger, so as channel their rage towards achieving what they need to", points: 2 },
      { answer: "Instilling rationality, so they can logically assess the situation and work they’re way around it", points: 3 },
      { answer: "Instilling confidence, so as to bolster their faith in themselves and they’re ability to succeed", points: 4 },
      { answer: "Instilling happiness, so as to keep their mind fulfilled, no matter the outcome", points: 5 },
    ],
  },
  {
    id: 6,
    question: "When making a difficult decision, what would be your most likely approach??",
    answers: [
      { answer: "Follow my instincts, regardless of the risks", points: 3 },
      { answer: "Choose the option that benefits me the most", points: 1 },
      { answer: "Carefully weigh the pros and cons", points: 2 },
      { answer: "Consult others for advice before deciding", points: 4 },
      { answer: "Take the safest option to avoid any harm", points: 5 }
    ],
  },
  {
    id: 7,
    question: "How would you describe your approach to leadership?",
    answers: [
      { answer: "I take control and expect others to follow my direction", points: 1 },
      { answer: "I encourage competition to bring out the best in everyone", points: 2 },
      { answer: "I lead by example, hoping others will follow", points: 3 },
      { answer: "I support others while focusing on the team’s growth", points: 4 },
      { answer: "I prioritize harmony and let others contribute equally", points: 5 }
    ],
  },
  {
    id: 8,
    question: "If faced with a new challenge, how do you usually react?",
    answers: [
      { answer: "I dive in without hesitation, ready to conquer it", points: 3 },
      { answer: "I assess what I stand to gain or lose before taking action", points: 1 },
      { answer: "I take my time to learn before I start", points: 2 },
      { answer: "I focus on doing my best, even if I don’t succeed", points: 4 },
      { answer: "I stay calm, reminding myself it’s about the experience, not the outcome", points: 5 },
    ],
  },
  {
    id: 9,
    question: "When working in a team, what role do you naturally fall into?",
    answers: [
      { answer: "I take charge and direct the group", points: 1 },
      { answer: "I strategize to achieve the team’s goals efficiently", points: 2 },
      { answer: "I offer ideas and listen to others’ input equally", points: 3 },
      { answer: " I support everyone, making sure everyone is included", points: 4 },
      { answer: "I encourage everyone to enjoy the process and not stress too much", points: 5 }
    ],
  },
  {
    id: 10,
    question: "How would you handle a personal setback?",
    answers: [
      { answer: "I push myself harder to prove my resilience", points: 3 },
      { answer: "I focus on finding a way to make up for the loss", points: 1 },
      { answer: "I analyze what went wrong to improve next time", points: 2 },
      { answer: "I accept it as part of growth and move forward", points: 4 },
      { answer: "I remind myself setbacks are part of life and stay optimistic", points: 5 }
    ],
  }
];

const gameScreen = document.querySelector(".game");
const resultScreen = document.querySelector(".result");
const question = document.querySelector(".question");
const answerContainer = document.querySelector(".answerContainer");
const submit = document.querySelector(".submit");
const restart = document.querySelector(".restart");

let qIndex = 0,
  total = 0,
  house,
  houseDesc="",
  selectedAnswer;

const hiddenSwitch = () => {
  gameScreen.classList.toggle("hidden");
  resultScreen.classList.toggle("hidden");

switch(house) {
  case 1:resultScreen.querySelector(
    ".Yellow"
  ).textContent = `Your House is: ${"Yellow"}`;break;
     case 2:resultScreen.querySelector(
    ".Red"
  ).textContent = `Your House is: ${"Red"}`;break;
     case 3:resultScreen.querySelector(
    ".Blue"
  ).textContent = `Your House is: ${"Blue"}`;break;
     case 4:resultScreen.querySelector(
    ".Green"
  ).textContent = `Your House is: ${"Green"}`;break;
}
  //resultScreen.querySelector(".Red").textContent = `Red: ${wrongCount}`;
  resultScreen.querySelector(".score").textContent = `Your score: ${total}`;
   resultScreen.querySelector(".explanation").innerHTML = houseDesc;
};

const getHouse = () => {
if(total>40)
  {
    house=1;//Yellow
  houseDesc="Yellow is marked by unity, kindness, and teamwork. They are inclusive, humble, and supportive, finding strength in the community and treating others with respect. Yellow brings positivity and harmony wherever they go.";
  }
  else if(total>30)
         {
           house=2;//Red
          houseDesc="Red is for the bold and courageous, full of passion and loyalty. Those in Red face challenges head-on, thrive on adventure, and are quick to stand up for what they believe in. They are warm-hearted and bring energy wherever they go.";
          }
  else if(total>20)
    {
      house=3;//Blue
      houseDesc="Blue represents calm and intellectual, valuing knowledge, logic, and creativity. They are analytical, open-minded, and thoughtful, seeking both understanding and originality in everything they do.";
    }
  else if(total>10)
    {
      house=4;//Green
      houseDesc="Green is for the ambitious and resourceful, with a strong drive to achieve their goals. They are practical, adaptable, and resilient, valuing independence and strategic thinking to reach their highest potential.";
    }
  
  // console.log(str);
 
};

const showResult = () => {
  getHouse();
  hiddenSwitch();
  //total = (correctCount - wrongCount) * 10;
 
};

const showQuestion = (qNumber) => {
  if (qIndex === data.length) return showResult();
  selectedAnswer = null;
  question.textContent = data[qNumber].question;
  answerContainer.innerHTML = data[qNumber].answers
    .map(
      (item, index) => `        <div class="answer">
          <input type="radio" name='answer' id=${index} value=${item.points}>
          <label for=${index}>${item.answer}</label>
        </div>`
    )
    .join("");

  selectAnswer();
};

const selectAnswer = () => {
  answerContainer.querySelectorAll("input").forEach((el) => {
    el.addEventListener("click", (e) => {
      selectedAnswer = e.target.value;
       console.log(selectedAnswer);
    });
  });
};

const resetResult = () => {
  qIndex = 0;
  house=0;
  total=0;
  //let houseE = document.getElementById("House");
  //houseE.remove();
  showQuestion(qIndex);
};

submit.addEventListener("click", () => {
  if (selectedAnswer !== null) {
    total+=parseInt(selectedAnswer);
    console.log(total);
    qIndex++;
    showQuestion(qIndex);
  } else alert("Select an answer");
});

restart.addEventListener("click", () => {
  hiddenSwitch();
  resetResult();
});

document.addEventListener("DOMContentLoaded", resetResult);

