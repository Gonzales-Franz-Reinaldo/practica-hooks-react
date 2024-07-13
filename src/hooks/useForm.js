
import { useState } from 'react';

export const useForm = (initialFrom = {}) => {

    const [formState, setFormState] = useState(initialFrom);

    const onInputChange = ({target}) =>{
        const {name, value} = target;

        setFormState({
            ...formState,
            [name]: value
        })
    }

    return {
        ...formState,
        formState,
        onInputChange
    }
}
