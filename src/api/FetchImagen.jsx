import { useState, useEffect } from 'react';

function FetchImagen({ url }) {
  const [imagen, setImagen] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        const url = URL.createObjectURL(blob);
        setImagen(url);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, [url]);

  return (
    <div className="flex justify-center">
      {imagen && <img src={imagen} alt="Imagen" />}
    </div>
  );
}

export default FetchImagen;