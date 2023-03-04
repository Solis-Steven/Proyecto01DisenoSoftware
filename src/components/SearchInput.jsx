import { useFetchData } from "../hooks/useFetchData"
import { getCharacters } from "../helpers/getCharacters"
import { useState } from "react";

const SearchInput = ({handleCharacter}) => {

    const [ inputValue, setInputValue ] = useState("");
    const {data, isLoading} = useFetchData(inputValue, getCharacters);

    const onInputChange = ({ target }) => {

        setInputValue( target.value );
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const input = inputValue.trim(); 

        if( input.length < 1 ) return;

        console.log(input)

        // handleResquest( input );
    }

    const handleResquest = (value) => {
        const isFetch = useFetchData(value, getCharacters)
        console.log(isFetch)
    }



    return (
        <div className="flex justify-center items-center h-full sm:h-auto">
            <form onSubmit={ event => onSubmit(event)}>
                <input
                    className="w-60 py-2 px-4 rounded-lg bg-white text-gray-800 font-semibold shadow-md focus:outline-none focus:shadow-outline text-center "
                    type="text"
                    placeholder={`"Rick Sanchez"`}  
                    onChange={event => onInputChange(event)}/>
            </form>
        </div>

    )

}
export default SearchInput
