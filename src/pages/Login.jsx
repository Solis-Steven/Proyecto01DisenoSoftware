import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import { CharacterCard } from "../components/CharacterCard";
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
            <div>
                <Card />
            </div>
            <h1 className="text-indigo-700">Login</h1>
            <button 
                onClick={ onLogIn }>
                Iniciar Sesion
            </button>  
        </>
    );
}