const EpisodeTable = ({ episodes }) => {


    return (
        <div className="overflow-auto rounded-lg shadow">
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
                    <tr key={index} className= "odd:bg-[#0d0b52]">
                        <td className="w-3 p-3 text-sm  text-gray-300 hover:text-white whitespace-nowrap"
                            onMouseEnter={(e) => {
                                e.target.classList.add('border-b-2', 'border-white');
                            }} onMouseLeave={(e) => {
                                e.target.classList.remove('border-b-2', 'border-white');
                            }}>{episode.episode}</td>
                        <td className=" w-11 p-3 text-sm text-gray-300 hover:text-white relative whitespace-nowrap"
                        onMouseEnter={(e) => {
                            e.target.classList.add('border-b-2', 'border-white');
                        }} onMouseLeave={(e) => {
                            e.target.classList.remove( 'border-b-2', 'border-white');
                        }}>
                            {episode.name}
                        </td>
                        <td className=" w-2 p-3 text-sm  text-gray-300 whitespace-nowrap">{episode.air_date}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    );
}

export default EpisodeTable;