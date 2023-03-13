import { useNavigate } from "react-router-dom";

export function CharacterCard({idChar, name, image}) {

    //advancing to the characters page
    const navigate = useNavigate();

    //get character information and advance to the character page
    const handleClick = async() => {
        console.log(idChar);
        const response = await fetch(`https://rickandmortyapi.com/api/character/${idChar}`);
        if( !response.ok ) {
            throw new Error("Failed to fetch characters");
        }
        const data = await response.json();
        navigate('/character', {state: data});
    }
    return(
        <div className="bg-white rounded-t-xl m-4 w-72 text-center shadow-md shadow-[#03154F] rounded-b-xl ">
            <div className="bg-teal-700 p-3 rounded-t-xl">
                <img 
                    src={image} 
                    alt={name}
                    className="w-40 h-40 object-cover rounded-full mx-auto mb-4" />
            </div>

            <div className="">
                <h3 className="text-center text-lg font-medium my-4">{name}</h3>
                <button
                    className="bg-teal-700 hover:bg-teal-800 text-white p-2 rounded-md
                    mb-4"
                    onClick={handleClick}>
                    Más información
                </button>
            </div>
        </div>
    );
}