import { useState } from "react"
import { UsuarioContext } from "./UsuarioContext"
import PropTypes from 'prop-types'

// const usuario ={
//     nombre: 'Fanz Gonzales',
//     tecnologia: 'React',
//     email: 'gonzales@gmail.com',
//     redes: 'https://www.linkedin.com/in/gonzalesfanz/'
// }

export const UsuarioProvider = ({ children }) => {

    const [usuario, setUsuario] = useState({});

    return (
        <UsuarioContext.Provider value={{ usuario, setUsuario }}>
            {children}
        </UsuarioContext.Provider>
    )
}


UsuarioProvider.propTypes = {
    children: PropTypes.element.isRequired
}
