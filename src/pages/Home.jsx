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

import { BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const initialState = {
    currentPage: 1,
    pageSize: 20,
    total: 42
}


export function Home() {
    const slides = [
        {
          url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
        },
        {
          url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
        },
        {
          url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
        },
    
        {
          url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
        },
        {
          url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
        },
      ];
    
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
    };

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
                className="  w-full bg-cover bg-top  p-60 "
                style={{ backgroundImage: `url(${mainBanner})` }}
            >
                {/* Input searcher */}
                <SearchInput handleCharacter={handleCharacter}></SearchInput>
                {/* Log out button */}
                <button id="section2"
                    className="absolute top-0 right-0 bg-black rounded-lg btn-transparent text-white text-3xl py-4 px-4 mt-4 mr-4 bg-opacity-50 "
                    style={{ fontFamily: "Oswald, sans-serif" }}
                    onClick={onLogOut}
                >
                    Cerrar Sesion
                </button>
            </div>
            <main className="mb-5 bg-[#03154F]" id="main">

                <SearchSection/>
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
                
        </>
    );
}
