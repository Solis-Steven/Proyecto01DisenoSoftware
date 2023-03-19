import FetchImagen from '../api/FetchImagen';

//This component is responsible for displaying the table with the characters
export const CharactersTable = ({ characters }) => {
    
    return (    
        <div className="flex justify-center align-center">
            <table className="w-full sm:w-5/6 border border-white">
                <thead className="bg-slate-600 border-b-2 border-gray-600">
                    <tr>
                        <th 
                            className="p-3 text-2xl tracking-wide font-bold text-center text-gray-200
                            border border-r-white">
                            Nombre
                        </th>
                        <th 
                            className="p-11 text-2xl tracking-wide font-bold text-center text-gray-200">
                            Imagen
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-white">
                    {/* This is the map that iterates the characters and displays them in the table */}
                    {characters.map((character, index) => (
                        <tr key={index} className= "bg-[#0d0b52]">

                            <td className="w-3 text-lg font-bold text-center text-white
                            border border-r-white"
                            >{character.name}</td>

                            <td className=" w-3 p-3"
                            >
                                <FetchImagen url={character.image} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}