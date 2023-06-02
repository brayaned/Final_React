//Header del sitio
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser, faAddressCard, faMagnifyingGlass, faGamepad, faArrowRightFromBracket, faHammer } from '@fortawesome/free-solid-svg-icons';
import './Header.scss';

const Header = (props) => {
    const user = localStorage.getItem('user');
    const role = JSON.parse(user)?.rol;
    const logoutUser = () => {
        localStorage.removeItem('user');
        window.location.href = '/';
    };
    const authLinks = (
        <ul>
        {role === 'admin' ? 
        <li className='Header-LoginNav-Item'>
            <Link className='nav-link' to='/admin'>
            <FontAwesomeIcon icon={faHammer} />
            Admin
            </Link>
        </li>:''}
        <li className='Header-LoginNav-Item'>
            <Link className='nav-link' to='/cart'>
            <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
        </li>
        <li className='Header-LoginNav-Item' onClick={logoutUser}>
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
            Cerrar sesión
        </li>
        </ul>
    );
    const guestLinks = (
        <ul>
            <li className='Header-LoginNav-Item'>
                <Link className='nav-link' to='/login'>
                    <FontAwesomeIcon className='NavList__item__link__icon' icon={faUser} />
                    Ingresar
                </Link>
            </li>
            <li className='Header-LoginNav-Item'>
                <Link className='nav-link' to='/register'>
                    <FontAwesomeIcon className='NavList__item__link__icon' icon={faAddressCard} />
                    Registrarse
                </Link>
            </li>
        </ul>
    );

    const guestNav = (
        <ul className='NavList'>
            <li className='NavList__item'>
                <FontAwesomeIcon className='NavList__item__link__icon' icon={faGamepad} />
                <Link to='/platform/Xbox' className='NavList__item__link'>Xbox</Link>
            </li>
            <li className='NavList__item'>
                <FontAwesomeIcon className='NavList__item__link__icon' icon={faGamepad} />
                <Link to='/platform/PlayStation' className='NavList__item__link'>Play Station</Link>
            </li>
            <li className='NavList__item'>
                <FontAwesomeIcon className='NavList__item__link__icon' icon={faGamepad} />
                <Link to='/platform/Nintendo%20Switch' className='NavList__item__link'>Nintendo Switch</Link>
            </li>
            <li className='NavList__item'>
                <FontAwesomeIcon className='NavList__item__link__icon' icon={faGamepad} />
                <Link to='/platform/PC' className='NavList__item__link'>PC</Link>
            </li>
            {/* <li className='NavList__item'>
                <FontAwesomeIcon className='NavList__item__link__icon' icon={faMagnifyingGlass} />
                <Link to='/search' className='NavList__item__link'>Buscar</Link>
            </li> */}
        </ul>
    );

    return (
        <header className='Header'>
            <div className='Header-LoginNav' id='navbarColor02'>
                {user ? authLinks : guestLinks}
            </div>
            <Link className='Header-Logo' to='/'>
            DistriPlay
            </Link>
            {guestNav}
        </header>
    );
}

export default Header;