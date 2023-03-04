import { useEffect, useState } from "react";
import { Carousel } from "../components/Carousel";
import { CharacterCard } from "../components/CharacterCard";
import { UserAuth } from "../context/AuthContext"; 
import { fetchCharacters } from "../api/fetchCharacters";
import mainBanner from "../assets/img/mainbanner.png";
import SearchSection from "../components/SearchFilter";
import SearchInput from "../components/SearchInput";
import { usePagination } from "../hooks/usePagination";
import { Footer } from "../components/Footer";

const initialState = {
    currentPage: 1,
    pageSize: 20,
    total: 42
}


export function Home() {
    const [ characters, setCharacters ] = useState([]);


    const { user, logOut } = UserAuth();
    //Informacion de los personajes
    const [ pagination, { nextPage, prevPage } ] = usePagination( initialState );
    
    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchCharacters( pagination.currentPage );
            setCharacters( data );
        }
        fetchData();
    }, [pagination]);


    //Log out function 
    const onLogOut = async  () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error);
        }
    };

    const handleCharacter = (value) => {
        setCharacters({...characters, value})
    };



    return  (
        <>
            {/* Header of the main page*/}
            <div
                className="  w-full bg-cover bg-top  p-60"
                style={{ backgroundImage: `url(${mainBanner})` }}
            >
                {/* Input searcher */}
                <SearchInput handleCharacter={handleCharacter}></SearchInput>
                {/* Log out button */}
                <button
                    className="absolute top-0 right-0 bg-black rounded-lg btn-transparent text-white text-3xl py-4 px-4 mt-4 mr-4 bg-opacity-50 "
                    style={{ fontFamily: "Oswald, sans-serif" }}
                    onClick={onLogOut}
                >
                    Cerrar Sesion
                </button>
            </div>

            

            <main className="mb-5 bg-[#03154F]">

                <SearchSection/>
                <div className="grid bg-[#03154F] sm:grid-cols-0 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 auto-rows-min md:auto-rows-lg lg:auto-rows-xl justify-center items-center">
                    {
                        characters.map(character => (  
                            <CharacterCard 
                                key={character.id}
                                name={character.name}
                                image={character.image}
                                />
                        ))
                    }  
                </div>
                <div className="flex bg-[#03154F] text-white justify-evenly">
                    <button className=""
                    onClick={prevPage}
                    >Previous page</button>
                    <button className=""
                    onClick={nextPage}
                    >Next page</button>
                </div>
                <div className="bg-[#03154F] text-white text-center">
                    <p>
                        Pagina actual: {pagination.currentPage}
                    </p> 
                    <p>
                        Maximo de elementos por pagina: {pagination.pageSize}
                    </p> 
                    <p>
                        Total de paginas: {pagination.total}
                    </p> 

                </div>
                     
                
            </main>
            <Footer />
                
        </>
    );
}
