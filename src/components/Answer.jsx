//This is the component that renders the answer options for the quiz
export const Answer = ({
    answerText,
    index,
    onSelectAnswer,
    currentAnswer,
    correctAnswer,
  }) => {
    const letterMapping = ["A", "B", "C", "D"]; 
    const isCorrectAnswer = currentAnswer && answerText === correctAnswer;
    const isWrongAnswer =
      currentAnswer === answerText && currentAnswer !== correctAnswer;
    const correctAnswerClass = isCorrectAnswer ? "bg-green-600 transition-all ease-linear duration-300 hover:bg-green-600 hover:text-white"  : "";
    const wrongAnswerClass = isWrongAnswer ? "bg-red-600 transition-all ease-linear duration-300 hover:bg-red-600 hover:text-white" : "";
    return (
      <div
        className={`border-2 rounded-lg flex w-52 text-white flex-wrap justify-center cursor-pointer 
        ${(correctAnswerClass || wrongAnswerClass) ? "" : "hover:bg-white"}
        hover:text-black transition-all easy-linear duration-300 text-xl md:p-1
        ${correctAnswerClass} ${wrongAnswerClass}`}
        onClick={() => onSelectAnswer(answerText)}
      >
        <div>{letterMapping[index]}</div>
        <div className="ml-2">{answerText}</div>
      </div>
    );
};