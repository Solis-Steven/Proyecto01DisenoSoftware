import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

export function Login() {
    const navigate = useNavigate();
    const { user, googleSignIn } = UserAuth();

    const onLogIn = async() => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log( error );
        }
    }

    // Verify if the user has logged in
    useEffect(() => {
        if( user != null ) {
            navigate("/");
        }
    }, [ user ]);
    return(
        <>
            <h1>Login</h1>
            <button 
                onClick={ onLogIn }>
                Iniciar Sesion
            </button>
        </>
    );
}