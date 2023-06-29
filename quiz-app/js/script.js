// OBJECTS

const questions = [
  {
    question:
      "Elliot Alderson, the main character suffers from a mental health disorder. What is it?",
    image: "/images/elliot.jpg",
    choices: [
      "Social anxiety disorder",
      "Bipolar disorder",
      "Dissociative identity disorder",
      "Obsessive-compulsive disorder",
    ],
    correctAnswer: "Dissociative identity disorder",
  },

  {
    question:
      "Darlene Alderson, Elliot's sister, is a skilled hacker. What is her hacker alias?",
    image: "/images/darlene.jpg",
    choices: [
      "The Mistress",
      "The Puppetmaster",
      "The Architect",
      "The Queen of Hearts",
    ],
    correctAnswer: "The Mistress",
  },

  {
    question:
      "Angela Moss, Elliot's childhood friend, works at the same corporation as Elliot. What is the name of that corporation?",
    image: "/images/angela.jpg",
    choices: ["All Safe", "E Corp", "Evil Corp", "F Society"],
    correctAnswer: "All Safe",
  },

  {
    question:
      "Elliot's protector identity takes the form of his deceased father. What is his father's name?",
    image: "/images/protector.jpg",
    choices: [
      "Edward Alderson",
      "Robert Alderson",
      "William Alderson",
      "Jacob Alderson",
    ],
    correctAnswer: "Edward Alderson",
  },

  {
    question:
      "Tyrell Wellick, a high-ranking executive at E Corp, becomes involved with F Society. What is Tyrell's ultimate goal?",
    image: "/images/tyrell.jpg",
    choices: [
      "Becoming CEO of E Corp",
      "Toppling the government",
      "Starting a global revolution",
      " Destroying F Society",
    ],
    correctAnswer: " Becoming CEO of E Corp",
  },

  {
    question:
      "Whiterose is a mysterious character who leads the Dark Army. What is Whiterose's true identity?",
    image: "/images/whiterose.jpg",
    choices: [
      "A transgender woman",
      "A high-ranking government official",
      "A master hacker",
      "A ghost in the machine",
    ],
    correctAnswer: "A transgender woman",
  },

  {
    question:
      "Dominique 'Dom' DiPierro is an FBI agent investigating the cyber attacks orchestrated by F Society. Which season does Dom first appear in?",
    image: "/images/dominique.jpg",
    choices: ["Season 1", "Season 2", "Season 3", "Season 4"],
    correctAnswer: "Season 2",
  },
];
// };

// OBJECTS END

// VARIABLE REFERENCES
const quizContainer = document.querySelector(".quiz-container");
const questionContainer = document.querySelector(".question-container");
const nextQuestionBtn = document.querySelector(".next-question-btn");
// VARIABLE REFERENCES END

// FUNCTIONALITY

function createQuestionCard(data) {
  data.forEach((question) => {
    const questionBody = document.createElement("div");
    questionBody.innerHTML = `
     <div class="question">${question.question}</div>
     <div class="image">${question.image}</div>
     `;
     return questionBody;
    // questionContainer.appendChild(questionBody);
  });
}

// let staticContent = createQuestionCard(questions);

// questionContainer.appendChild(staticContent);

// console.log(staticContent);
// FUNCTIONALITY END
