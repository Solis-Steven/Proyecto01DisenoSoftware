import { useEffect } from "react";
import { Carousel } from "../components/Carousel";
import { CharacterCard } from "../components/CharacterCard";
import { UserAuth } from "../context/AuthContext"; 

const slides = [
    "https://i.ibb.co/ncrXc2V/1.png",
    "https://i.ibb.co/B3s7v4h/2.png",
    "https://i.ibb.co/XXR8kzF/3.png",
    "https://i.ibb.co/yg7BSdM/4.png",
]

export function Home() {
    const { user, logOut } = UserAuth();
    const onLogOut = async() => {
        try {
            await logOut();
        } catch (error) {
            console.log( error );
        }
    }
    useEffect(() => {
        console.log(user);
    }, [ user ]);

    return(
        <>
            {/* <h1>Home</h1> */}
            {/* <button */}
                // onClick={ onLogOut }
                {/* Cerrar Sesion */}
            {/* </button> */}
            {/* <CharacterCard /> */}
            <main className="App">
                <div className="max-w-lg">
                    <Carousel>
                        {
                            slides.map( (s, i) => (
                                <CharacterCard key={i} />
                                // <img src={s} key={i} alt="imagen" />
                            ))
                        }
                    </Carousel>
                </div>
            </main>
            
        </>
    );
}