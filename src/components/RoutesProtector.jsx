import { Navigate } from "react-router";
import { UserAuth } from "../context/AuthContext";
//This component is used to protect the routes that are not allowed to be accessed by the user who is not logged in. If the user is not logged in, 
//the user will be redirected to the login page. If the user is logged in, the user will be able to access the route.
export function RoutesProtector({ children }) {
    const { user } = UserAuth();

    if( !user ) {
        return <Navigate to={"/"} />
    }

    return( children );
}