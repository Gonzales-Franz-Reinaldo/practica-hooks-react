import { useFetch } from "../hooks/useFetch";

export const UsuariosComponent = () => {

    // Llamamos a nuestro custom hook useFetch y le pasamos la url de la API que queremos consumir.
    const { data, isLoading, errors } = useFetch("https://jsonplaceholder.typicode.com/users");

  return (
    <>
        <h1>Lista de Usuarios</h1>
        {   isLoading ? <h4>Cargando...</h4> :
            errors ? <p>A ocurrido un error: {errors}</p> :
                <table className="table table-dark" border={1}>
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Website</th>
                            <th scope="col">City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(user => {
                            return (
                                <tr key={user.id}>
                                    <th scope="row">{user.id}</th>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.website}</td>
                                    <td>{user.address.city}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
        }
    </>
  );
};
