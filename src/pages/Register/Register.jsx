
// Dependencies
import React from 'react';
import Header from '../../components/Header/Header';
import './Register.scss';
import axios from 'axios';

const Register = () => {
    const onSubmit = (e) => {
        e.preventDefault();
        const cedula = e.target.cedula.value;
        const nombres = e.target.nombre.value;
        const apellidos = e.target.apellido.value;
        const usuario = e.target.usuario.value;
        const telefono = e.target.telefono.value;
        const pais = e.target.pais.value;
        const correo = e.target.email.value;
        const contrasena = e.target.password.value;
        const contrasena2 = e.target.password2.value;

        const user = {
            cedula,
            nombres,
            apellidos,
            usuario,
            telefono,
            pais,
            correo,
            contrasena,
            contrasena2
        }

        axios.post('http://localhost:3080/clientes', user).then((response) => {
            console.log(response);
            window.location.href = '/login';
        }
        ).catch((err) => {
            console.log(err);
        }
        );
    }

    return (
        <div>
            <Header/>
            <div className="register-container">
                <div className="register-form-container">
                    <h2>Registro</h2>
                    <form className="register-form" onSubmit={(e) => onSubmit(e)}>
                        <div className="register-form-item">
                            <label htmlFor="cedula">Cedula</label>
                            <input type="text" name="cedula" id="cedula" required/>
                        </div>
                        <div className="register-form-item">
                            <label htmlFor="nombre">Nombres</label>
                            <input type="text" name="nombre" id="nombre" required/>
                        </div>
                        <div className="register-form-item">
                            <label htmlFor="apellido">Apellidos</label>
                            <input type="text" name="apellido" id="apellido" required/>
                        </div>
                        <div className="register-form-item">
                            <label htmlFor="usuario">Usuario</label>
                            <input type="text" name="usuario" id="usuario" required/>
                        </div>
                        <div className="register-form-item">
                            <label htmlFor="telefono">Teléfono</label>
                            <input type="text" name="telefono" id="telefono" required/>
                        </div>
                        <div className="register-form-item">
                            <label htmlFor="pais">Pais</label>
                            <input type="text" name="pais" id="pais" required/>
                        </div>
                        <div className="register-form-item">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" required/>
                        </div>
                        <div className="register-form-item">
                            <label htmlFor="password">Contraseña</label>
                            <input type="password" name="password" id="password" required/>
                        </div>
                        <div className="register-form-item">
                            <label htmlFor="password2">Confirmar contraseña</label>
                            <input type="password" name="password2" id="password2" required/>
                        </div>
                        <div className="register-form-item">
                            <button type="submit">Registrarse</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;