import { useState } from "react";


export function usePagination( initialState ) {
    const [ pagination, setPagination ] = useState( initialState );

    const nextPage = () => {
        setPagination( prevState => {
            const currentPage = prevState.currentPage + 1;
            return({ ...prevState, currentPage });
        })
    }

    const prevPage = () => {
        setPagination( prevState => {
            const currentPage = prevState.currentPage - 1;
            return({ ...prevState, currentPage });
        })
    }

    return([
        pagination,
        { nextPage, prevPage }
    ]);
}