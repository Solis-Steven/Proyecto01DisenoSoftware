import { useEffect, useState } from "react";
import { fetchCharacters } from "../api/fetchCharacters";
import { UserAuth } from "../context/AuthContext";
import { usePagination } from "../hooks/usePagination";

const initialState = {
    currentPage: 1,
    pageSize: 20,
    total: 42
}

export function Home() {
    const [ characters, setCharacters ] = useState([]);
    const { user, logOut } = UserAuth();
    const [ pagination, { nextPage, prevPage } ] = usePagination( initialState );
    
    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchCharacters( pagination.currentPage );
            setCharacters( data );
        }
        fetchData();
    }, [pagination]);

    const onLogOut = async() => {
        try {
            await logOut();
        } catch (error) {
            console.log( error );
        }
    }

    return(
        <>
            <h1>Home</h1>
            <button
                onClick={ onLogOut }>
                Cerrar Sesion
            </button>

            <div className="grid grid-cols-3">
                {
                    characters.map( character => (
                        <li key={character.id}>{character.name}</li>
                    ))
                }
            </div>

            <button
                onClick={ prevPage } 
                className="font-bold text-lg mr-5 mt-5">
                Previous page
            </button>

            <button 
                onClick={ nextPage }
                className="font-bold text-lg mt-5">
                Next page
            </button>

            <p>Página actual: { pagination.currentPage }</p>
            <p>Número máximo de elementos por página: 20</p>
            <p>Total de páginas: 42</p>
            
        </>
    );
}