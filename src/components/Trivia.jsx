import { useContext } from "react";

import { QuizContext } from "../context/QuizContext";

//This component is used to show the results of the quiz and to restart the quiz
export function Trivia({setTrivia, children}) {
    const [quizState, dispatch] = useContext(QuizContext);

    const handleRestart = () => {
        dispatch({ type: "RESTART" });
        setTrivia(false);
    }

    return(
        <>
            {quizState.showResults && (
                <div className="text-white text-2xl text-center w-9/12 p-10 border-2 flex flex-col gap-3">
                    <h2 className="congratulations font-bold text-3xl">Felicitaciones!</h2>
                    <div className="results-info">
                        <p>Has completado la trivia</p>
                        <div>
                            Obtuviste {quizState.correctAnswersCount} de {""}
                            {quizState.questions.length} preguntas correctas.
                        </div>
                    </div>
                    <div
                        onClick={handleRestart}
                        className="next-button mt-2 self-center border-2 p-2 text-xl w-28 rounded-md
                        hover:bg-white hover:text-black transition-all ease-linear duration-300 hover:border-black"
                    >
                        Restart
                    </div>
                </div>
            )}
            {!quizState.showResults && (
                <div className="text-center w-9/12 ">
                    <h2 className=" text-white text-2xl md:text-3xl">
                        Pregunta {quizState.currentQuestionIndex + 1}/
                        {quizState.questions.length}
                    </h2>

                    {children}
                </div>
            )}
        </>
    );
}