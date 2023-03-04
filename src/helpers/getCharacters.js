
export const getCharacters = async (characterName) => {
    const url = `https://rickandmortyapi.com/api/character/?name=${ characterName }`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const character = data.map( char => ({
        id: char.id,
        name: char.name,
        img: char.image
    }) );

    return( character );

}