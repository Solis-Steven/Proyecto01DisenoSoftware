import { useState } from "react";
import { fetchCharacters } from "../api/fetchCharacters";


const SearchInput = ({ setCharacters, filteredData, filterName }) => {

    const [ inputValue, setInputValue ] = useState("");

    const onInputChange = ({ target }) => {

        setInputValue( target.value );
    }

    const  onSubmit =  async(event) => {
        event.preventDefault()
        filterName( inputValue );
        const { name, status, specie, gender } = filteredData;
        const data = await fetchCharacters( name, status, specie, gender );
        setCharacters( data.results )
        setInputValue("")
    }




    return (
        <div className="flex flex-col justify-center items-center h-full">
            <form onSubmit={ event => onSubmit(event)}>
                <input
                    className="w-60 py-2 px-4 rounded-lg bg-white text-gray-800 font-semibold shadow-md 
                    focus:outline-none focus:shadow-outline text-center"
                    type="text"
                    placeholder={`"Rick Sanchez"`}
                    onChange={event => onInputChange(event)}
                    value={inputValue}/>
            </form>
        </div>

    )

}
export default SearchInput
