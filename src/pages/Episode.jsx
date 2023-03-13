import { useNavigate, useLocation } from "react-router-dom";
import { Footer } from "../components/Footer";
import { useState, useEffect } from "react";
import CharactersTable from "../components/CharactersTable";

export function Episode() {
    const location = useLocation();
    const navigate = useNavigate();

    const [characters, setCharactersData] = useState([]);

    const episode = location.state[0]; 
    const character = location.state[1]; 

    useEffect(() => {
        const fechCharacter = async () => {
            try {
                const episodePromises = episode.characters.map(async (characterUrl) => {
                    const response = await fetch(characterUrl);
                    if (!response.ok) {
                        throw new Error("Failed to fetch characters");
                    }
                    const data = await response.json();
                    return data;
                });
                const characters = await Promise.all(episodePromises);
                setCharactersData(characters);
                
            } catch (error) {
                console.error(error);
            }
        };
        fechCharacter();
        window.scrollTo(0, 0);
    }, [episode.characters]);

    const handleClick = async() => {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${character.id}`);
        if( !response.ok ) {
            throw new Error("Failed to fetch characters");
        }
        const data = await response.json();
        navigate('/character', {state: data});
    }

    return (    
        <>
            <div className="grid grid-cols-2 bg-my-color py-10 px-10">
                <div className="col-span-1">
                    <h1 className="bg-orange shadow-lg text-orange-500 text-5xl text-center font-bold max-w-sm rounded-lg bg-my-color p-2 w-full dark:bg-neutral-700"
                    >   {episode.episode}</h1>
                </div>
                <div className="col-span-1">
                    <h1 className="text-white text-end lg:text-left lg:text-3xl">
                        Informacion del capitulo
                    </h1>
                    <h1 className="text-white text-end lg:text-left lg:text-2xl"
                    >  {episode.air_date}
                    </h1>
                    <button
                    className="absolute top-30 right-4 bg-[#521069]  btn-transparent text-white  px-3 mt-4"
                    onClick={handleClick}
                    >
                        Volver
                    </button>
                </div>
                
                {/* <CharacterTable
                    episodes={characters} /> */}
            </div>
            <div className="overflow-auto bg-my-color pt-8">
                <CharactersTable
                        characters={characters} />
            </div>
            <Footer />

        </>
    );
}