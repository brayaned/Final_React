import Header from "../../components/Header/Header"
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import './Admin.scss'
import axios from "axios";
import Popup from "reactjs-popup";
import GameForm from "../../components/GameForm/GameForm";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Admin = () => {
    const [juegos,setJuegos] = useState([]);
    useEffect(() => {
        updateJuegos();
    }, []);

    const updateJuegos = () => {
        axios.get('http://localhost:3080/juegos').then((res) => {
            console.log(res);
            setJuegos(res.data);
        }).catch((err) => {
            console.log(err);
        });
    };

    const insertSubmitHandler = (event) => {
        event.preventDefault();
        console.log("Evento: ",event.target);
        const user = JSON.parse(localStorage.getItem('user'));
        const userId = user.usuario;
        const nombre = event.target.nombre.value;
        const genero = event.target.genero.value;
        const costo = event.target.costo.value;
        const plataforma = event.target.plataforma.value;
        const imagen = event.target.imagen.value;
        const idioma = event.target.idioma.value;
        const clasificacion = event.target.clasificacion.value;
        const productor = event.target.productor.value;
        
        const juego = {
            userId,
            nombre,
            costo,
            plataforma,
            imagen,
            genero,
            idioma,
            clasificacion,
            productor
        }
        console.log("juego: ", juego);
        axios.post('http://localhost:3080/juegos', juego).then((response) => {
            console.log(response);
            updateJuegos();
            toast.success('Juego registrado con éxito', {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <div>
            <Header />
            <div className="Admin-Container">
                <div className="Admin-Container-Title">
                    <h1>Panel de administración</h1>
                </div>
                <div className="Admin-Container-Content">
                    <div className="Admin-Container-Content-Item">
                        <h2>Juegos</h2>
                        <p>Administra los juegos de la plataforma</p>
                        <div className="Admin-Container-Content-Items">
                            {juegos.map((juego) => (
                                <JuegoItem juego={juego} updateJuegos={updateJuegos}/>
                            ))}
                        </div>
                        <div className="Admin-Container-Content-Add">
                            <Popup trigger={<button className="Admin-Container-Content-Add-Button">Agregar juego</button>} closeOnDocumentClick modal>
                                <GameForm onSubmit={insertSubmitHandler}/>
                            </Popup>
                        </div>
                    </div>
                </div>
            </div>
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
    )
}

const JuegoItem = ({juego, updateJuegos}) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const removeItem = (id) => {
        axios.delete(`http://localhost:3080/juegos/`,{data:{userId: user.usuario, id}}).then((res) => {
            console.log(res);
            updateJuegos();
        }).catch((err) => {
            console.log(err);
        });
    }
    return (
        <div className="Admin-Game">
            <h2 className="Admin-Game-Title">{`${juego.nombre} (${juego.plataforma})`}</h2>
            <button className="Admin-Game-Remove" onClick={() => removeItem(juego.id)}>
                <FontAwesomeIcon icon={faTrash} />
            </button>
        </div>
    )
}

export default Admin