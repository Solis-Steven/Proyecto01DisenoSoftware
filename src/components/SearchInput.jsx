import { useState } from "react";
import { fetchCharacters } from "../api/fetchCharacters";


const SearchInput = ({setCharacters}) => {

    const [ inputValue, setInputValue ] = useState("");
    const [ testValue, setTestValue ] = useState("");
    // const {data, isLoading} = useFetchData(inputValue, getCharacters);

    const onInputChange = ({ target }) => {

        setInputValue( target.value );
        console.log(target.value)
    }

    const  onSubmit =  async(event) => {
        event.preventDefault()
        const url = `https://rickandmortyapi.com/api/character/?name=${ inputValue }&status=${testValue}`
        const data = await fetchCharacters( url );
        setCharacters(data)
        setInputValue("")
 

    }




    return (
        <div className="flex flex-col justify-center items-center h-full">
            <form onSubmit={ event => onSubmit(event)}>
                <input
                    className="w-60 py-2 px-4 rounded-lg bg-white text-gray-800 font-semibold shadow-md focus:outline-none focus:shadow-outline text-center "
                    type="text"
                    placeholder={`"Rick Sanchez"`}
                    onChange={event => onInputChange(event)}
                    value={inputValue}/>
            </form>
        </div>

    )

}
export default SearchInput
