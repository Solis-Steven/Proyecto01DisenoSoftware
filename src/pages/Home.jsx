import { useEffect } from "react";
import { UserAuth } from "../context/AuthContext";

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
            <h1>Home</h1>
            <button
                onClick={ onLogOut }>
                Cerrar Sesion
            </button>
        </>
    );
}