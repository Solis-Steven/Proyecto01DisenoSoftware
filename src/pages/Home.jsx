import { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { 
    CharacterCard,
    SearchSection,
    SearchInput,
    Footer,
    Quiz,
    Pagination
} from "../components";
import { fetchCharacters } from "../api/fetchCharacters";
import mainBanner from "../assets/img/mainbanner.png";
import { Filtered } from "../context/FilterContext";
import { QuizProvider } from "../context/QuizContext";


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
                className='bg-cover bg-center h-64 sm:h-96 md:h-128 lg:h-160'
                style={{ backgroundImage: `url(${mainBanner})` }}
            >

                <SearchInput
                    setCharacters={setCharacters}
                    filteredData={filteredData}
                    filterName={filterName} />

                <button
                    className="absolute top-0 right-0 bg-black rounded-lg btn-transparent text-white text-3xl py-4 px-4 mt-4 mr-4 bg-opacity-50 "
                    style={{ fontFamily: "Oswald, sans-serif" }}
                    onClick={onLogOut}
                >
                    Cerrar Sesion
                </button>
            </div>
            <main className="pb-5 bg-[#03154F]">

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

                <Pagination />
            </main>

            <QuizProvider>
                <Quiz />
            </QuizProvider>

            <Footer />

        </>
    );
}