
// This components is displayed if the user enters a non-existing url
export default function ErrorPage() {

  return (
    <div id="error-page" className="flex itemes-center justify-center h-screen">
      <h1 className="">Oops!</h1>
      <p>Lo sentimos, un error inesperado a ocurrido.</p>
      <p>
        Pagina no encontrada
      </p>
    </div>
  );
}