import { Navigate, Route, Routes } from "react-router-dom";
import { NavBar } from "./routers/components/NavBar";
import { Home } from "./routers/Home";
import { About } from "./routers/About";
import { Contact } from "./routers/Contact";
import { UsuarioProvider } from "./routers/context/UsuarioProvider";
import { Login } from "./routers/Login";

export const App = () => {
    return (
        <UsuarioProvider>
            <NavBar></NavBar>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route path="/contact" element={<Contact></Contact>}></Route>
                <Route path="/*" element={<Navigate to="/"></Navigate>}></Route>
            </Routes>
        </UsuarioProvider>
    )
}
