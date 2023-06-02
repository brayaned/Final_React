//Pagina de home
//Se encarga de mostrar el header y la lista de juegos

import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Game from '../../components/Game/Game';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import './Home.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = (props) => {
    const [games,setGames] = useState([]);
    const [psGames,setPSGames] = useState([]);
    const [xGames,setXGames] = useState([]);
    const [switchGames,setSwitchGames] = useState([]);
    const [pcGames,setPCGames] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3080/juegos/?limit=10').then((response) => {
            setGames(response.data);
        });
        axios.get('http://localhost:3080/juegos/?plataforma=PlayStation&limit=3').then((response) => {
            setPSGames(response.data);
        });
        axios.get('http://localhost:3080/juegos/?plataforma=Xbox&limit=3').then((response) => {
            setXGames(response.data);
        });
        axios.get('http://localhost:3080/juegos/?plataforma=Nintendo%20Switch&limit=3').then((response) => {
            setSwitchGames(response.data);
        });
        axios.get('http://localhost:3080/juegos/?plataforma=PC&limit=3').then((response) => {
            setPCGames(response.data);
        });
    }, []);

    return (
        <div className='Home'>
            <Header />
            <div className='GamesList'>
                <div className='GamesList-Container'>
                    <Container>
                        <Row>
                            <Col xs="8">
                                <div className='GamesList-Block-Title'>
                                    Ultimos lanzamientos
                                </div>
                                {games.map((game) => {
                                    return <Game game={game} showPlataforma key={game.id}/>
                                })}
                            </Col>
                            <Col>
                                <div className='GamesList-Block-Title'>
                                    PlayStation
                                </div>
                                {psGames.map((game) => {
                                    return <Game game={game} key={game.id} />
                                })}
                                <br/>
                                <div className='GamesList-Block-Title'>
                                    Xbox
                                </div>
                                {xGames.map((game) => {
                                    return <Game game={game} key={game.id} />
                                })}
                                <br/>
                                <div className='GamesList-Block-Title'>
                                    Nintendo Switch
                                </div>
                                {switchGames.map((game) => {
                                    return <Game game={game} key={game.id} />
                                })}
                                <br/>
                                <div className='GamesList-Block-Title'>
                                    PC
                                </div>
                                {pcGames.map((game) => {
                                    return <Game game={game} key={game.id} />
                                })}
                            </Col>
                        </Row>
                    </Container>
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
    );
};

export default Home;