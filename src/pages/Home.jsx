import { useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import mainBanner from "../assets/img/mainbanner.png";
import SearchSection from "../components/SearchFilter";

export function Home() {

    const { user, logOut } = UserAuth();

    //Log out function 
    const onLogOut = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error);
        }
    };

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
                <div className="flex flex-col justify-center items-center h-full">
                    <input
                        className="w-1/2 py-2 px-4 rounded-lg bg-white text-gray-800 font-semibold shadow-md focus:outline-none focus:shadow-outline text-center "
                        type="text"
                        placeholder={`"Rick Sanchez"`}
                    />
                </div>
                {/* Log out button */}
                <button
                    className="absolute top-0 right-0 bg-black rounded-lg btn-transparent text-white text-3xl py-4 px-4 mt-4 mr-4 bg-opacity-50 "
                    style={{ fontFamily: "Oswald, sans-serif" }}
                    onClick={onLogOut}
                >
                    Cerrar Sesion
                </button>
            </div>
            <SearchSection>
            </SearchSection>

            <h1>Home</h1>
        </>
    );
}
