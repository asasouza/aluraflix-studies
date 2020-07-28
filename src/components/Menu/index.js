// React
import React from 'react';
// Components
import ButtonLink from '../ButtonLink';
// Assets
import Logo from '../../assets/img/Logo.png';
// CSS
import './Menu.css';

function Menu(props) {
    return (
        <nav className='Menu'>
            <a href='/'>
                <img alt='AluraFlix' className='Logo' src={Logo} />
            </a>
            <ButtonLink className='ButtonLink' href='/'>
                Novo vídeo
            </ButtonLink>
        </nav>
    );
}

export default Menu;