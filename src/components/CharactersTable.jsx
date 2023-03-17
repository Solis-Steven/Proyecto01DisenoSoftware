import FetchImagen from '../api/FetchImagen';

const EpisodeTable = ({ characters }) => {
    
    return (
        <table className="w-full">
            <thead className="bg-slate-600 border-b-2 border-gray-600">
                <tr>
                    <th className="p-3 text-sm tracking-wide text-left text-gray-200">Nombre</th>
                    <th className="p-3 text-sm tracking-wide text-left text-gray-200">Imagen</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-white">
                {characters.map((character, index) => (
                    <tr key={index} className= "bg-[#0d0b52]">

                        <td className="w-3 p-3 text-sm  text-gray-400 hover:text-white whitespace-nowrap"
                            onMouseEnter={(e) => {
                                e.target.classList.add('border-b-2', 'border-white');
                            }} onMouseLeave={(e) => {
                                e.target.classList.remove('border-b-2', 'border-white');
                            }}>{character.name}</td>

                        <td className=" w-11 p-3 text-sm text-gray-400 hover:text-white relative whitespace-nowrap"
                        onMouseEnter={(e) => {
                            e.target.classList.add('border-b-2', 'border-white');
                        }} onMouseLeave={(e) => {
                            e.target.classList.remove( 'border-b-2', 'border-white');
                        }}>
                            <FetchImagen url={character.image} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default EpisodeTable;