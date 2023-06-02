
// Dependencias
import React from 'react';
import './GameForm.scss';

const GameForm = ({onSubmit}) => (
    <form className="game-form" onSubmit={(e) => onSubmit(e)}>
        <div className="game-form-container">
            <div className="game-form-input-container">
                <label className="game-form-label" htmlFor="nombre">Nombre</label>
                <input className="game-form-input" type="text" name="nombre" id="nombre" />
            </div>
            <div className="game-form-input-container">
                <label className="game-form-label" htmlFor="plataforma">Plataforma</label>
                <input className="game-form-input" type="text" name="plataforma" id="plataforma" />
            </div>
            <div className="game-form-input-container">
                <label className="game-form-label" htmlFor="precio">Precio</label>
                <input className="game-form-input" type="number" name="costo" id="costo" />
            </div>
            <div className="game-form-input-container">
                <label className="game-form-label" htmlFor="idioma">Idioma</label>
                <input className="game-form-input" type="text" name="idioma" id="idioma" />
            </div>
            <div className="game-form-input-container">
                <label className="game-form-label" htmlFor="productor">Productor</label>
                <input className="game-form-input" name="productor" id="productor" />
            </div>
            <div className="game-form-input-container">
                <label className="game-form-label" htmlFor="imagen">Imagen</label>
                <input className="game-form-input" type="text" name="imagen" id="imagen" />
            </div>
            <div className="game-form-input-container">
                <label className="game-form-label" htmlFor="genero">Genero</label>
                <input className="game-form-input" type="text" name="genero" id="genero" />
            </div>
            <div className="game-form-input-container">
                <label className="game-form-label" htmlFor="clasificacion">Clasificacion</label>
                <input className="game-form-input" type="text" name="clasificacion" id="clasificacion" />
            </div>
            <button className="game-form-submit" type="submit">Registrar</button>
        </div>
    </form>
);

export default GameForm;