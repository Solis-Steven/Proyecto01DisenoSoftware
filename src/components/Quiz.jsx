import { useState } from 'react';
import { Trivia } from "./Trivia";
import Question from "./Question";


const Quiz = () => {
    const [trivia, setTrivia] = useState(false);

    return (

        <div className="bg-[#050345] pb-10 flex flex-col items-center">
            <h1 className="bg-[#050345] text-4xl text-white text-center mb-10 pt-10 md:text-5xl">
                Trivia
            </h1>
            {
                trivia
                ? <Trivia setTrivia={setTrivia}>
                    <Question setTrivia={setTrivia}/> 
                </Trivia>

                : (
                    <div className="text-white flex flex-col items-center">
                    <h3 className="px-2 max-w-2xl text-center mb-5 md:text-3xl">
                    Pon  a prueba tus conocimientos sobe la serie de Rick and Morty mediante la siguiente trivia. ¡No esperes más!
                    </h3>
                    <button 
                        className=" mt-6 text-2xl border-2 p-3 rounded-lg
                        hover:bg-white hover:text-black transition-all easy-linear
                        duration-300 mb-64"
                        onClick={() => setTrivia(true)}>
                        Comenzar
                    </button>
                    <h3 className=" text-2xl font-bold max-w-lg text-center">No importa cuántas dimensiones existan, siempre hay una en la que puedes ser el mejor. ¡Encuentra esa dimensión!"</h3>
                    
                    </div>
                )   
                
            }
                
        </div>
    );
};

export default Quiz;
