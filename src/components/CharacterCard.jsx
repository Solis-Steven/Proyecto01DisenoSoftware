
export function CharacterCard() {
    return(
        <div className="m-4 w-72 text-center shadow-md rounded-b-xl">
            <div className="bg-teal-700 p-3 rounded-t-xl">
                <img 
                    src="https://rickandmortyapi.com/api/character/avatar/5.jpeg" 
                    alt="Imagen"
                    className="w-40 h-40 object-cover rounded-full mx-auto mb-4" />
            </div>

            <div className="">
                <h3 className="text-center text-lg font-medium my-4">Nombre Personaje</h3>
                <button
                    className="bg-teal-700 hover:bg-teal-800 text-white p-2 rounded-md
                    mb-4">
                    Más información
                </button>
            </div>
        </div>
    );
}