import { useNavigate } from "react-router-dom";

const EpisodeTable = ({ episodes }) => {

    const navigate = useNavigate();

    const handleClick = async(idEpisode) => {
        console.log(idEpisode)
        const response = await fetch(`https://rickandmortyapi.com/api/episode/${idEpisode}`);
        if( !response.ok ) {
            throw new Error("Failed to fetch episodes");
        }
        const data = await response.json();
        navigate('/episode', {state: data});
    }
    return (
        <table className="w-full">
            <thead className="bg-slate-600 border-b-2 border-gray-600">
                <tr>
                    <th className="p-3 text-sm tracking-wide text-left text-gray-200">Episodio</th>
                    <th className="p-3 text-sm tracking-wide text-left text-gray-200">Nombre</th>
                    <th className="p-3 text-sm tracking-wide text-left text-gray-200">Fecha de lanzamiento</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-black">
                {episodes.map((episode, index) => (
                    <tr key={index} className= "odd:bg-[#0b0946]">
                        <button
                        onClick={() => handleClick(index+1)}
                        >
                        <td className="w-3 p-3 text-sm  text-gray-400 hover:text-white whitespace-nowrap"
                            onMouseEnter={(e) => {
                                e.target.classList.add('border-b-2', 'border-white');
                            }} onMouseLeave={(e) => {
                                e.target.classList.remove('border-b-2', 'border-white');
                            }}>{episode.episode}</td>
                        </button>
                        <td className=" w-11 p-3 text-sm text-gray-400 hover:text-white relative whitespace-nowrap"
                        onMouseEnter={(e) => {
                            e.target.classList.add('border-b-2', 'border-white');
                        }} onMouseLeave={(e) => {
                            e.target.classList.remove( 'border-b-2', 'border-white');
                        }}>
                            {episode.name}
                        </td>
                        <td className=" w-2 p-3 text-sm  text-gray-400 whitespace-nowrap">{episode.air_date}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default EpisodeTable;