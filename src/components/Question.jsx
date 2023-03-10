import { useContext } from "react";
import { AiOutlineCloseSquare} from 'react-icons/ai';
import Answer from "./Answer";
import { QuizContext } from "../context/QuizContext";

const Question = ({setTrivia}) => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];

  const handleTrivia = () => {
    dispatch({ type: "RESTART" });
    setTrivia(false)
  }

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-white text-center mb-3 text-xl">{currentQuestion.question}</h2>
      <div className="flex flex-col w-full items-center gap-4 px-16 py-8 border-2">
        <AiOutlineCloseSquare 
          onClick={handleTrivia}
          className="text-white text-4xl self-end cursor-pointer hover:text-red-500
          transition-all ease-linear duration-200"/>
        {quizState.answers.map((answer, index) => (
          <Answer
            answerText={answer}
            currentAnswer={quizState.currentAnswer}
            correctAnswer={currentQuestion.correctAnswer}
            key={index}
            index={index}
            onSelectAnswer={(answerText) =>
              dispatch({ type: "SELECT_ANSWER", payload: answerText })
            }
          />
        ))}

        {quizState.currentAnswer && (
            <div
                onClick={() => dispatch({ type: "NEXT_QUESTION" })}
                className="text-white cursor-pointer"
            >
                Siguiente Pregunta
            </div>
        )}
      </div>
    </div>
  );
};

export default Question;
