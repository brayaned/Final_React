import axios from "axios";
import Header from "../../components/Header/Header"
import { useState } from "react";
import './Login.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [errorMessage, setErrorMessage] = useState('');

    const userLogin = (event) => {
        event.preventDefault();
        const user = event.target.usernameField.value;
        const password = event.target.passwordField.value;
        axios.post('http://localhost:3080/clientes/login', {
            usuario: user,
            contrasena: password
        }).then((response) => {
            console.log("response.data: ",response.data);
            localStorage.setItem('user', JSON.stringify(response.data.data));
            window.location.href = '/';
        }
        ).catch((error) => {
            console.log(error);
            setErrorMessage('Usuario o contraseña incorrectos');
        }
        );
    }

    return (
        <div>
            <Header />
            <div className="Login-Container">
                <div className="Login-Container-Message">
                    {errorMessage}
                </div>
                <h1 className="Login-Container-Title">Iniciar sesión</h1>
                <form onSubmit={(e) => userLogin(e)}>
                    <div className="Login-Form">
                        <label for="usernameField" className="Login-Form-Input-Label">Nombre de usuario</label>
                        <input type="text" className="Login-Form-Input-Field" id="usernameField" aria-describedby="emailHelp" placeholder="Ingresa tu correo electrónico" />
                        <label for="passwordField" className="Login-Form-Input-Label">Contraseña</label>
                        <input type="password" className="Login-Form-Input-Field" id="passwordField" placeholder="Ingresa tu contraseña" />
                        <button type="submit" className="btn btn-primary Login-Form-Button">Ingresar</button>
                    </div>
                </form>
                <ToastContainer
                    position="bottom-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
            </div>
        </div>
    )
}

export default Login;