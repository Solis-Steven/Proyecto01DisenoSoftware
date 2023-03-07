import { createContext, useContext, useState } from "react";

const initialState = {
    page: 1,
    name: "",
    status: "",
    specie: "",
    gender: ""
}

const FilterContext = createContext();
export function FilterProvider({ children }) {
    const [ filteredData, setFilteredData] = useState( initialState );

    const filterName = ( newName ) => {
        // Only change the name
        setFilteredData( prevFilter => ({
            ...prevFilter,
            name: newName
        }));
    }

    const filterStatus = ({ value }) => {
        // Only change the status
        setFilteredData( prevFilter => ({
            ...prevFilter,
            status: value
        }));
    }

    const filterSpecie = ({ value }) => {
        // Only change the specie
        setFilteredData( prevFilter => ({
            ...prevFilter,
            specie: value
        }));
    }

    const filterGender = ({ value }) => {
        // Only change the gender
        setFilteredData( prevFilter => ({
            ...prevFilter,
            gender: value
        }));
    }

    const nextPage = () => {
        setFilteredData( prevFilter => ({
            ...prevFilter,
            page: prevFilter.page + 1
        }));
    }

    const prevPage = () => {
        setFilteredData( prevFilter => ({
            ...prevFilter,
            page: prevFilter.page - 1
        }));
    }

    return(
        <FilterContext.Provider value={{
            filteredData,
            filterName,
            filterStatus,
            filterSpecie,
            filterGender,
            nextPage,
            prevPage
        }}>
            { children }
        </FilterContext.Provider>
    );
}

export const Filtered = () => {
    return useContext( FilterContext );
}