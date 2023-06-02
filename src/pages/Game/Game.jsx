import axios from "axios"
import React, {useEffect, useState} from "react"
import { useLocation } from "react-router-dom"
import Header from "../../components/Header/Header";
import {default as GameComponent} from "../../components/Game/Game";
import './Game.scss';

const Game = () => {
    const [games, setGames] = useState([]);
    const location = useLocation();
    const platform = location.pathname.split("/")[2];
    useEffect(() => {
        axios.get(`http://localhost:3080/juegos/?plataforma=${platform}`).then((response) => {
            console.log("data:",response.data);
            setGames(response.data);
        }
        ).catch((error) => {
            console.log(error);
        }
        );
    }, [platform]);
    return (
        <div>
            <Header />
            <div className="GamesList">
                {games.map((game) => {
                    return <GameComponent game={game} key={game.id} />
                }
                )}
            </div>
        </div>
    )
}

export default Game;