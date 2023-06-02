//Componente que muestra la información de un juego
//Contiene imagen, nombre, precio y botón de compra

import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Game = ({ game, showPlataforma }) => {
    const {id, costo, idioma, imagen, nombre, plataforma} = game;

    const addCart = () => {
        const user = localStorage.getItem('user');
        if (user) {
            return () => {
                const cart = localStorage.getItem('cart');
                if (cart) {
                    const cartArray = JSON.parse(cart);
                    cartArray.push(game);
                    localStorage.setItem('cart', JSON.stringify(cartArray));
                } else {
                    localStorage.setItem('cart', JSON.stringify([game]));
                }
            };
        } else {
            return () => {
                window.location.href = '/login';
            };
        }
    };
    return (
        <div className='GamesList-Card'>
            <div className='GamesList-Card-Image'>
                <img src={imagen} alt={nombre} />
            </div>
            <div className='GamesList-Card-Info'>
                <div className='GamesList-Card-Info-Title'>
                    {nombre}
                </div>
                <div className='GamesList-Card-Info-Price'>
                    ${costo}
                </div>
                {showPlataforma?
                <div className='GamesList-Card-Info-Platform'>
                    Plataforma: {plataforma}
                </div>:''}
                <div className='GamesList-Card-Info-Language'>
                    {idioma}
                </div>
                <div className='GamesList-Card-Info-Button'>
                    <button className='GamesList-Card-Info-Button-Add' onClick={addCart()}>
                        <FontAwesomeIcon icon={faShoppingCart} />
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </div>
    );
}

Game.propTypes = {
    game: PropTypes.object.isRequired
};

export default Game;