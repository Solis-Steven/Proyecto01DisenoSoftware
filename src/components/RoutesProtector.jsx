import { Navigate } from "react-router";
import { UserAuth } from "../context/AuthContext";

export function RoutesProtector({ children }) {
    const { user } = UserAuth();

    if( !user ) {
        return <Navigate to={"/"} />
    }

    return( children );
}