export const Footer = () => {
  return (
    <div className="lg:grid grid-cols-2 bg-my-color"
    style={{fontFamily:"Oswald,sans-serif"}}>
        <div className="col-span-1">
            <div className="bg-my-color bg-center h-66 sm:h-96 md:h-128 lg:h-160 px-24 py-20">
                <h1 className="text-white px-10 py-16 text-3xl"
                    >
                    3 BITS
                    <h2 className="py-6 text-base text-light">3 bits es un grupo de estudiantes del Instituto
                    Tecnológico De Costa Rica apasosionadas por la tecnología 
                    y el desarrollo de software.</h2>
                </h1>
            </div>
        </div>
        <div className="col-span-1">
            <div className="bg-my-color bg-center h-66 sm:h-96 md:h-128 lg:h-160 px-24 py-20">
                <h1 className="text-white px-10 py-16 text-3xl text-end"
                >
                Contáctenos
                <h2 className="py-6 text-end text-base text-light">stevenso@estudiantec.cr<br/>javier@estudiantec.cr
                <br/>asolanojim@estudiantec.cr</h2>
                </h1>
            </div>
        </div>
        <div className="flex w-full bg-my-color">
            <h1 className="border-b">d</h1>
        </div>
    </div>

  )
}
