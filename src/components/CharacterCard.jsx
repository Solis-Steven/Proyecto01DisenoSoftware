
export function CharacterCard() {
    return(
        <div className="m-4 w-72 text-center shadow-md rounded-lg">
            <div className="bg-teal-700">
                <img 
                    src="../assets/img/banner.png" 
                    alt="Imagen"
                    className="w-40 h-40 object-cover rounded-full mx-auto mb-4" />
            </div>

            <div className="">
                <h3 className="text-center text-lg font-medium mb-4">Nombre Personaje</h3>
                <button
                    className="bg-teal-700 hover:bg-teal-800 text-white p-2 rounded-md
                    mb-4">
                    Mas informacion
                </button>
            </div>
        </div>
    );
}