import { useEffect, useRef } from "react";
import { useForm } from "../hooks/useForm";

export const FormularioComponent = () => {

    const focusRef = useRef();

    console.log(focusRef);

    const initialForm = {
        userName: '',
        email: '',
        password: ''
    }

    //* Llamamos a nuestro hook personalizado
    // const {formState, onInputChange} = useForm(initialForm);
    const { formState, userName, email, password, onInputChange } = useForm(initialForm);

    // Desestructuramos 
    // const {userName, email, password} = formState;

    const onSubmit = (event) => {
        event.preventDefault(); // Para que no se recargue la página
        console.log(formState);
    }

    // El focusRef se usa para que el input se ponga en foco al cargar la página.
    useEffect(() => {
        focusRef.current.focus();
    }, [])

    return (
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="userName">User name</label>
                <input type="text"
                    className="form-control"
                    name="userName"
                    placeholder="Enter your userName"
                    value={userName}
                    onChange={onInputChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                    ref={focusRef}
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={onInputChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password"
                    className="form-control"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={onInputChange}
                />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}
