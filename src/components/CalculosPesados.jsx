//! USE DE MEMO 

import { useMemo, useState } from 'react';

export const CalculosPesados = () => {
    const [listaNumeros, setListaNumeros] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const [show, setShow] = useState(true);

    // Use useMemo at the top level of the component
    const resultado = useMemo(() => {
        console.log("Calculando...");
        return listaNumeros.reduce((acumulador, numeroActual) => acumulador * numeroActual, 1);
    }, [listaNumeros]);

    const agregarNumero = () => {
        setListaNumeros([...listaNumeros, listaNumeros[listaNumeros.length - 1] + 1]);
        console.log(listaNumeros);
    }

    return (
        <>
            <h1>Calculos pesados</h1>
            <p>{resultado}</p>

            <button className='btn btn-primary' onClick={() => setShow(!show)}>{show ? "Show" : "Hide"}</button>
            <button className='btn btn-primary' onClick={agregarNumero}>Agregar Número</button>
        </>
    );
}













// import { useMemo, useState } from 'react';

// export const CalculosPesados = () => {

//     const [listaNumeros, setListaNumeros] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
//     const [show, setShow] = useState(true);

//     //* Aplicamos el USE MEMO para que no se vuelva a calcular cada vez que se renderice el componente.
//     const getCalculo = (listaNumeros) => useMemo(() =>{
//         console.log("Calculando...");
//         let resultado = listaNumeros.reduce((acumulador, numeroActual) => acumulador * numeroActual, 1);
//         return resultado;
//     }, [listaNumeros]);

//     const agregarNumero = () => {
//         setListaNumeros([...listaNumeros, listaNumeros[listaNumeros.length - 1] + 1]);
//         console.log(listaNumeros);
//     }

//     return (
//         <>
//             <h1>Calculos pesados</h1>
//             <p>{getCalculo(listaNumeros)}</p>

//             <button className='btn btn-primary' onClick={() => setShow(!show)}>{show ? "Show" : "Hide"}</button>
//             <button className='btn btn-primary' onClick={() => agregarNumero()}>Agregar Número</button>
//         </>
//     )
// }
