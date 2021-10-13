import React, { useState } from "react";

function App() {
  // List of questions
  const questions = [
    {
      questionText: "10 - 2 = ?",
      answerOptions: [
        { answerText: "9", isCorrect: false },
        { answerText: "5", isCorrect: false },
        { answerText: "8", isCorrect: true },
        { answerText: "7", isCorrect: false },
      ],
    },
    {
      questionText: "5 * 5 = ?",
      answerOptions: [
        { answerText: "10", isCorrect: false },
        { answerText: "25", isCorrect: true },
        { answerText: "500", isCorrect: false },
        { answerText: "5", isCorrect: false },
      ],
    },
    {
      questionText: "10 + 1000",
      answerOptions: [
        { answerText: "1100", isCorrect: false },
        { answerText: "1010", isCorrect: true },
        { answerText: "10000", isCorrect: false },
        { answerText: "1000", isCorrect: false },
      ],
    },
    {
      questionText: "5 % 2 = ?",
      answerOptions: [
        { answerText: "0", isCorrect: false },
        { answerText: "2", isCorrect: false },
        { answerText: "5", isCorrect: false },
        { answerText: "1", isCorrect: true },
      ],
    },
  ];

  // Set the application states
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);


  const handleAnswerButtonClick = (isCorrect) => {
    // Increment the score, if the given answer is correct
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuetions = currentQuestion + 1;
    if (nextQuetions < questions.length) {
      // Display the next question
      setCurrentQuestion(nextQuetions);
    } else {
      // Show the final score
      setShowScore(true);
    }
  };

  return (
    <>
      <h1 className="header">Quiz</h1>
      <div className="app">
        {/* Display the score */}
        {showScore ? (
          <div className="score-section">
            You scored {score} out of {questions.length}
          </div>
        ) : (
          <>
            <div className="question-section">
              {/* Display the question number */}
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>
                {questions.length}
              </div>
              {/* Display the question */}
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>

            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((answerOptions) => (
                <button
                  onClick={() =>
                    handleAnswerButtonClick(answerOptions.isCorrect)
                  }
                >
                  {answerOptions.answerText}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
