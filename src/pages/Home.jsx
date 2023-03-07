import { useEffect, useState } from "react";
import { Carousel } from "../components/Carousel";
import { CharacterCard } from "../components/CharacterCard";
import { UserAuth } from "../context/AuthContext"; 
import { fetchCharacters } from "../api/fetchCharacters";
import mainBanner from "../assets/img/mainbanner.png";
import SearchSection from "../components/SearchSection";
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

    const [input, setInput] = useState('');
    
    useEffect(() => {
        const fetchData = async () => {
            const url = `https://rickandmortyapi.com/api/character/?page=${ pagination.currentPage }`
            const data = await fetchCharacters( url );
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



    return  (
        <>
            {/* Header of the main page*/}
            <div
                className="  w-full bg-cover bg-top  p-60"
                style={{ backgroundImage: `url(${mainBanner})` }}
            >
                {/* Input searcher */}
                <SearchInput setCharacters={setCharacters}></SearchInput>
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

                <SearchSection />
                <div className="grid 2xl:px-20 bg-[#03154F] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4 w-full justify-items-center items-center">
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