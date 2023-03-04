import { useEffect, useState } from "react";


export const useFetchData = ( category, helper ) => {

    const [ data, setData ] = useState( [] );
    const [ isLoading, setIsLoading ] = useState( true );

    const getInfo = async () => {
        const newImages = await helper( category );
        setData( newImages );
        setIsLoading( false );
    }

    useEffect( () => {
        getInfo()
    }, []);

    return({
        data,
        isLoading
    });
}