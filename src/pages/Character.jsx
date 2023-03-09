import { useLocation, useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import EpisodeTable from "../components/EpisodeTable";
import { useEffect, useState} from "react";

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
    }, [character.episode]);

    const manageClick = () => {
        navigate('/');
    }


    return (
        <>
            <h1>Character Page</h1>
            <div>
                <button

                    onClick={manageClick}
                >
                    Volver
                </button>
                <h1>
                    {character.name}
                </h1>
                <img src={character.image}></img>
            </div>
            <div className="bg-[#050345]">
                <EpisodeTable
                episodes={episodesData}/>
            </div>
            <Footer />

        </>
    );
}