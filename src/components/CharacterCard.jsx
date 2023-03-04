
export function CharacterCard({name, image}) {
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
                    mb-4">
                    Más información
                </button>
            </div>
        </div>
    );
}