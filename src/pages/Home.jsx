import { useEffect, useState } from "react";
import { Carousel } from "../components/Carousel";
import { CharacterCard } from "../components/CharacterCard";
import { UserAuth } from "../context/AuthContext";
import { fetchCharacters } from "../api/fetchCharacters";
import mainBanner from "../assets/img/mainbanner.png";
import SearchSection from "../components/SearchSection";
import SearchInput from "../components/SearchInput";
import { Footer } from "../components/Footer";
import { Filtered } from "../context/FilterContext";


export function Home() {
    const { logOut } = UserAuth();

    // Characters information
    const [characters, setCharacters] = useState([]);

    // Filtered data
    const { filteredData,
        filterName,
        filterStatus,
        filterSpecie,
        filterGender,
        nextPage,
        prevPage,
        pageInfo,
        setPageInfo } = Filtered();


    useEffect(() => {
        // Get filtered data
        const { page, name, status, specie, gender } = filteredData;
        const fetchData = async () => {
            try {
                const data = await fetchCharacters(page, name, status, specie, gender);
                setCharacters(data.results);
                const newPageInfo = {
                    currentPage: page,
                    max: 20,
                    totalPages: data.info.pages
                }
                setPageInfo(newPageInfo);
            } catch (error) {
                const newPageInfo = {
                    currentPage: 0,
                    max: 20,
                    totalPages: 0
                }
                setCharacters([]);
                setPageInfo(newPageInfo);
            }
        }
        fetchData();
    }, [filteredData]);


    //Log out function 
    const onLogOut = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error);
        }
    };



    return (
        <>
            {/* Header of the main page*/}
            <div
                className="  w-full bg-cover bg-top  p-60"
                style={{ backgroundImage: `url(${mainBanner})` }}
            >
                {/* Input searcher */}
                <SearchInput
                    setCharacters={setCharacters}
                    filteredData={filteredData}
                    filterName={filterName} />
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

                <SearchSection
                    filterStatus={filterStatus}
                    filterSpecie={filterSpecie}
                    filterGender={filterGender} />
                <div className="grid 2xl:px-20 bg-[#03154F] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4 w-full justify-items-center items-center">
                    {
                        characters.map(character => (
                            <CharacterCard
                                key={character.id}
                                idChar={character.id}
                                name={character.name}
                                image={character.image}
                            />
                        ))
                    }
                </div>
                <div className="flex bg-[#03154F] text-white justify-evenly">
                    <button
                        disabled={filteredData.page === 1}
                        onClick={prevPage}>
                        Previous page
                    </button>

                    <button
                        disabled={filteredData.page === pageInfo.totalPages}
                        onClick={nextPage}>
                        Next page
                    </button>
                </div>
                <div className="bg-[#03154F] text-white text-center">
                    <p>
                        Pagina actual: {pageInfo.currentPage}
                    </p>
                    <p>
                        Maximo de elementos por pagina: {pageInfo.max}
                    </p>
                    <p>
                        Total de paginas: {pageInfo.totalPages}
                    </p>

                </div>


            </main>
            <Footer />

        </>
    );
}