//This is the footer component for all pages
export const Footer = () => {
  return (
    <div className="flex flex-col bg-my-color text-white items-center justify-center
    text-center sm:flex-row gap-10 lg:justify-evenly">
        <div className="py-10 px-10">
            <h1 className="text-3xl">
                3 BITS
            </h1>
            <p className="text-lg max-w-md">
                3 bits es un grupo de estudiantes del Instituto
                Tecnológico De Costa Rica apasosionadas por la tecnología 
                y el desarrollo de software.
            </p>
        </div>
        <div className="py-10 px-10">
            <h1 className="text-white px-10 mb-6 text-3xl text-end">
                Contáctenos
            </h1>
            <p className="text-lg">stevenso@estudiantec.cr</p>
            <p className="text-lg">javier@estudiantec.cr</p>
            <p className="text-lg mb-5">asolanojim@estudiantec.cr</p>
        </div>
    </div>

  )
}
