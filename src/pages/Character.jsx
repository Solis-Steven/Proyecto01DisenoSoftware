import { useLocation, useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import EpisodeTable from "../components/EpisodeTable";
import { useEffect, useState } from "react";
import Divider from "../components/Divider";
import { BsHouse, BsArrowRight, BsFlag } from 'react-icons/bs';

export function Character() {

    //Router functionalities
    const location = useLocation();
    const navigate = useNavigate();

    //Character Data
    const character = location.state;

    // Episode Data
    const [episodesData, setEpisodesData] = useState([]);

    useEffect(() => {
        const fetchEpisodes = async () => {
            try {
                const episodePromises = character.episode.map(async (episodeUrl) => {
                    const response = await fetch(episodeUrl);
                    if (!response.ok) {
                        throw new Error("Failed to fetch episodes");
                    }
                    const data = await response.json();
                    return data;
                });
                const episodes = await Promise.all(episodePromises);
                setEpisodesData(episodes);
            } catch (error) {
                console.error(error);
            }
        };
        fetchEpisodes();
        window.scrollTo(0, 0);
    }, [character.episode]);

    const manageClick = () => {
        navigate('/');
    }


    return (
        <>
            <div className=" pt-8 px-9 flex flex-wrap bg-[#585858] pb-10 ">
                <button
                    className="absolute top-0 right-0 bg-[#521069] rounded-lg btn-transparent text-white text-3xl py-4 px-4 mt-4 mr-4  "
                    style={{ fontFamily: "Oswald, sans-serif" }}
                    onClick={manageClick}
                >
                    Volver
                </button>
                <div className="justify-items-center">
                    <img className={`rounded-lg ${character.status === "Alive" ? `border-green-500 ` : character.status === "Dead" ? `border-red-500` : `border-transparent`} border-8 mr-3 h-96 w-96 object-cover `} src={character.image} />
                    <p className="text-center  text-3xl text-white font-bold">Especie: <span className="font-thin">{character.species}</span></p>
                </div>
                <div>
                    <h1 className=" sm:text-center pt-4 pb-4 text-6xl text-white font-bold">
                        {character.name}
                    </h1>
                    <div className=" w-full overflow-hidden">
                        <Divider />
                    </div>
                    <div className=" flex justify-between mb-6">
                        <p className="pt-14  text-3xl text-white font-bold">Género: <span className="font-thin">{character.gender}</span></p>
                        <p className="pt-14  pl-9 text-3xl text-white font-bold">Tipo: <span className="font-thin">{character.type === "" ? 'No especificado' : character.type}</span></p>
                    </div>
                    <div className=" flex flex-wrap">
                        <div className="flex">
                        <BsHouse className="text-white font-bold text-4xl" />
                        <p className="pl-2 text-3xl text-white font-bold">{character.origin.name}</p>
                        </div>
                        <BsArrowRight className="mx-5 text-white font-bold text-4xl justify-center" />
                        <div className="flex">
                            <BsFlag className="text-white font-bold text-3xl" />
                            <p className="pl-2 text-3xl text-white font-bold">{character.location.name}</p>
                        </div>


                    </div>
                </div>
            </div>
            <div className="overflow-auto bg-[#0d0b52] pt-8">
                <EpisodeTable
                    episodes={episodesData} />
            </div>
            <Footer />

        </>
    );
}