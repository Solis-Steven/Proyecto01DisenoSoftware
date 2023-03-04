import { useEffect } from "react";
import { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import mainBanner from "../assets/img/mainbanner.png";
import SearchSection from "../components/SearchFilter";
import SearchInput from "../components/SearchInput";


export function Home() {

    const { user, logOut } = UserAuth();

    const [characters, setCharacters] = useState([])



    //Log out function 
    const onLogOut = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error);
        }
    };

    const handleCharacter = (value) => {
        setCharacters({...characters, value})
    }

    // Verify if the user has logged in from Authentication context
    useEffect(() => {
        console.log(user);
    }, [user]);


    return (
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
            <SearchSection/>

            <h1>Home</h1>
        </>
    );
}
