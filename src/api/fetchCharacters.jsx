
export async function fetchCharacters( currentPage ) {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${ currentPage }`);

    if( !response.ok ) {
        throw new Error("Failed to fetch characters");
    }

    const data = await response.json();
    return( data.results );
}