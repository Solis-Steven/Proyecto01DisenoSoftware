export async function fetchEpisodes(
    page = "", 
    name = "", 
    status = "", 
    species = "", 
    gender = "" ) {
const url = `https://rickandmortyapi.com/api/character/?page=${page}&name=${name}&status=${status}&species=${species}&gender=${gender}`
const response = await fetch(url);

if( !response.ok ) {
throw new Error("Failed to fetch Episodes");
}

const data = await response.json();
return( data );
}