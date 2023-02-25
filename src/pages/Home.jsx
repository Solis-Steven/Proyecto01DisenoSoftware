import { useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import banner from '../assets/banner.png';


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
            <div>
                <img src=
            </div>
            <h1>Home</h1>
            <button
                onClick={ onLogOut }>
                Cerrar Sesion
            </button>
        </>
    );
}