const questions = [
    {
        question: "What does IPR stand for?",
        options: ["Intellectual Property Rights", "Internet Protocol Router", "International Public Relations", "Indian Passport Renewal"],
        correctAnswer: 0
      },
      {
        question: "What is a patent?",
        options: ["A type of hat", "A government grant giving the creator of an invention exclusive rights", "A type of fish", "A type of insect"],
        correctAnswer: 1
      },
      {
        question: "What does copyright protect?",
        options: ["The right to copy any text from the internet", "Original literary and artistic works", "Computer software", "Trademarks and logos"],
        correctAnswer: 1
      },
      {
        question: "Which of the following is a type of intellectual property?",
        options: ["A cat", "A building", "A trademarked logo", "A chair"],
        correctAnswer: 2
      },
      {
        question: "What does WIPO stand for?",
        options: ["World Intellectual Property Organization", "Wireless Internet Protocol Office", "Waste Inequality Prevention Operation", "Worldwide Internet Privacy Organization"],
        correctAnswer: 0
      },
      {
        question: "How long does a typical patent last in the United States?",
        options: ["10 years", "20 years", "30 years", "Lifetime"],
        correctAnswer: 1
      },
      {
        question: "What is fair use in copyright law?",
        options: ["Using copyrighted material without permission for any purpose", "Using copyrighted material for educational and research purposes", "Using copyrighted material for commercial gain", "Using copyrighted material for personal enjoyment"],
        correctAnswer: 1
      },
      {
        question: "What is a trademark?",
        options: ["A type of patent", "A symbol that identifies the source of goods or services", "A type of copyright", "A type of trade secret"],
        correctAnswer: 1
      },
      {
        question: "What is the Berne Convention in copyright law?",
        options: ["A treaty that sets the minimum standards for copyright protection", "A convention for trade secrets", "A patent law conference", "A trademark registration process"],
        correctAnswer: 0
      },
      {
        question: "What is a trade secret?",
        options: ["A secret handshake among business professionals", "Information that is kept secret to give a business an advantage over others", "A type of copyright", "A type of trademark"],
        correctAnswer: 1
      }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionElement = document.getElementById("question");
  const optionsContainer = document.getElementById("options-container");
  const resultElement = document.getElementById("sresult");
  const nextButton = document.getElementById("next-button");
  const finalSubmitButton = document.getElementById("final-submit-button");
  const retrieveButton = document.getElementById("retrieve-button");
  
  function displayQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;
    optionsContainer.innerHTML = "";

    for (let i = 0; i < question.options.length; i++) {
        const label = document.createElement("label");
        label.classList.add("option");

        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "answer";
        radio.value = i;

        const span = document.createElement("span");
        span.textContent = question.options[i];

        label.appendChild(radio);
        label.appendChild(span);

        optionsContainer.appendChild(label);
    }

  }
  
  function checkAnswer() {
    const selectedOption = document.querySelector("input[name='answer']:checked");
    if (selectedOption) {
      const userAnswer = parseInt(selectedOption.value);
      const correctAnswer = questions[currentQuestion].correctAnswer;
  
      if (userAnswer === correctAnswer) {
        score++;
      }
  
      currentQuestion++;
  
      if (currentQuestion < questions.length) {
        displayQuestion();
      } else {
        resultElement.textContent = `${score}/10`;
        nextButton.style.display = "none";
        finalSubmitButton.style.display = "block";
      }
    }
  }
  
  nextButton.addEventListener("click", checkAnswer);
  displayQuestion();
  
  finalSubmitButton.addEventListener("click", function () {
    if (currentQuestion === questions.length) {
      // Redirect to a new page showing a congratulatory message
      // window.location.href = "../congratulations";
    }
  });
  
  // retrieveButton.addEventListener("click", function () {
  //   // Redirect to the "index.html" page
  //   window.location.href = "../road";
  // });
  
  