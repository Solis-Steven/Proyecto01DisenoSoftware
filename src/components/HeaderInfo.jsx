import rick from '../assets/img/rick.png';

export const HeaderInfo = () => {
    return (
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

    )
  }
  