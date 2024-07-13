//! USE DE CALLBACK

import { useCallback, useState } from 'react';
import { Incrementar } from './Incrementar';

export const CallBackComponent = () => {

    const [counter, setCounter] = useState(0);

    // El useCallback se usa para memorizar una función y evitar que se redibuje el 
    // componente hijo cada vez que se redibuje el componente padre.
    const incrementarPadre = useCallback(
        (val) =>{
            setCounter(contador => contador + val);
        }, []
    );

    return (
        <>
        <h1>Contador: {counter}</h1>
        <Incrementar incrementar={incrementarPadre} />
        </>
    )
}
