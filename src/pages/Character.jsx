import { useLocation } from "react-router-dom";
import { Footer } from "../components/Footer";

export function Character() {

    const location = useLocation();
    console.log(location.state)
    return(
        <>
            <h1>Character Page</h1>
        </>
    );
}