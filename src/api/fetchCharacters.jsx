
export async function fetchCharacters( url ) {
    const response = await fetch(url);

    if( !response.ok ) {
        throw new Error("Failed to fetch characters");
    }

    const data = await response.json();
    return( data.results );
}