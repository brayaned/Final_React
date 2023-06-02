
import React, { useState } from "react";
import "./Cart.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Header from "../../components/Header/Header";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Carrito = () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const [total, setTotal] = useState(cart.reduce((acc, item) => acc + item.costo, 0));
    
    const removeItem = (id) => {
        const newCart = cart.filter((item) => item.id !== id);
        cart = newCart;
        localStorage.setItem("cart", JSON.stringify(newCart));
        setTotal(newCart.reduce((acc, item) => acc + item.costo, 0));
    };

    const regCompra = () => {
        const user = JSON.parse(localStorage.getItem('user'));
        const usuario = user.usuario;
        const estatus = "Aprobada";
        const listaVideojuegos = cart.map((item) => item.id);
        const compra = {
            usuario,
            estatus,
            listaVideojuegos
        }
        console.log("compra: ", compra);
        axios.post('http://localhost:3080/compras', compra).then((response) => {
            localStorage.removeItem('cart');
            toast.success('Compra realizada con éxito', {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
            window.location.href = '/';
        }).catch((error) => {
            console.log(error);
            toast.error('Error, no se pudo realizar la compra', {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        });
    }

    return (
        <div className="cart">
            <Header/>
            {
                <div className="cart-container">
                <div className="cart-items">
                    {cart?.map((item) => {
                        return (
                        <CartItem
                            key={item.id}
                            id={item.id}
                            name={item.nombre}
                            price={item.costo}
                            image={item.imagen}
                            removeItem={removeItem}
                        />)
            })}
                </div>
                <div className="cart-total">
                    <h2>Total: ${total}</h2>
                    <button className="cart-checkout" onClick={regCompra}>Checkout</button>
                </div>
                </div>
            }
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

const CartItem = ({ id, name, price, image, removeItem }) => {
    return (
        <div className="cart-item">
        <div className="cart-item-info-container">
            <img className="cart-item-image" src={image} alt={name} />
            <div className="cart-item-info">
                <h3 className="cart-item-info-title">{name}</h3>
                <p>${price}</p>
            </div>
        </div>
        <button className="cart-item-remove" onClick={() => removeItem(id)}>
            <FontAwesomeIcon icon={faTrash} />
        </button>
        </div>
    );
}

export default Carrito;