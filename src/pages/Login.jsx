import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import banner from '../assets/img/banner.png';
import { CharacterCard } from "../components/CharacterCard";
import { UserAuth } from "../context/AuthContext";
import rick from '../assets/img/rick.png';
import { Footer } from "../components/Footer";

export function Login() {
  const navigate = useNavigate();
  const { user, googleSignIn } = UserAuth();

  const onLogIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  }

  // Verify if the user has logged in
  useEffect(() => {
    if (user != null) {
      navigate("/");
    }
  }, [user]);
  return (
    <>
      <div>
        <div className='bg-cover bg-center h-64 sm:h-96 md:h-128 lg:h-160'
          style={{ backgroundImage: `url(${banner})` }}
        >
        </div>
        <div className="absolute top-4 right-4">
          <button className="text-white border border-cyan-500 max-w-sm rounded-lg p-1"

            onClick={onLogIn}>
            Iniciar Sesion
          </button>
        </div>
        <div className="absolute top-24 left-6"
        >
          <h1 className="relative text-white text-left text-2xl font-bold"
          > Rick and Morty
          </h1>
          <div className="border-b"></div>
          <h2 className="text-white"
          >
            Es una popular serie de televisión animada que sigue las
            aventuras<br />interdimensionales de un científico loco, Rick,
            y su nieto adolescente, Morty.
          </h2>
        </div>

        <div className="lg:grid lg:grid-cols-2 bg-my-color">
          <div className="col-span-1">
            <div className="bg-my-color overflow-hidden sm:h-96 md:h-128 lg:h-160 lg:px-10 h-64">
              <img src={rick} className="object-cover left-20 object-center px-20 py-16 h-full w-full sm:w-full md:w-full" />
            </div>

          </div>
          <div className="col-span-1">
            <div className="bg-my-color overflow-hidden sm:h-96 md:h-128 lg:h-160 lg:py-12 px-20"
            >
              <h1 className="text-white text-justify text-xl tracking-widest">SOBRE LA SERIE</h1>
              <p className="text-white text-sm md:text-base lg:text-lg">En esta serie, A lo largo de las temporadas, Rick y Morty se enfrentan a una variedad de amenazas y peligros, desde enemigos extraterrestres
                hasta versiones alternativas de sí mismos. También explora temas más profundos, como la depresión y la ansiedad.</p><br />
              <div className="flex border border-cyan-500 max-w-sm rounded-lg bg-my-color p-6 w-full shadow-lg dark:bg-neutral-700">
                <p className="mb-4 text-base text-white dark:text-neutral-200 sm:px-20">
                  Número de temporadas: 6<br />
                  Personajes totales: +800<br />
                  Especies diferentes: +1000<br />
                  Episodios transmitidos: +60<br />
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-center h-76 sm:h-96 md:h-128 lg:h-160 py-10 px-10"
        >
          <h1 className="font-bold text-left"
          >FRASES COMUNES DE LA SERIE</h1>

          <div className="lg:grid grid-cols-3 text-center px-20 py-12 space-y-5"
          >
            <div className="col-span-1">
              <div
                className="block border border-black max-w-sm rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700">
                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                  "¡Estoy hecho polvo, tío!"
                </p>
                <h5
                  className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                  - Rick Sánchez
                </h5>

              </div>
            </div>
            <div className="col-span-1">
              <div
                className="block border border-black max-w-sm rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700">

                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                  "¡Pepinillo Rick!"
                </p>
                <h5
                  className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                  - Rick Sánchez
                </h5>

              </div>
            </div>
            <div className="col-span-1">
              <div
                className="block border border-black max-w-sm rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700">

                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                  "¡Que empiece el espectáculo!"
                </p>
                <h5
                  className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                  - Rick y Morty
                </h5>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}