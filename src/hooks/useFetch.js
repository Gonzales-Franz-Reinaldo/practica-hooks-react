import { useEffect, useState } from "react"

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        errors: null
    });

    const getFetch = async() => {
        
        try{
            const response = await fetch(url);
            const data = await response.json();
            
            setState({
                data,
                isLoading: false,
                errors: null
            });
        }catch(error){
            setState({
                data: null,
                isLoading: false,
                errors: error
            });
        }
    }

    const {data, isLoading, errors} = state;
    
    // para llamar a una function async usamos  useFetch
    useEffect(() => {
        if(!url) return;
        getFetch();
    }, [url]); //Dependencia


    return {
        data,
        isLoading,
        errors
    }
}
