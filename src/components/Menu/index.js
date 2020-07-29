// React
import React from 'react';
import { Link } from 'react-router-dom';
// Components
import ButtonLink from '../ButtonLink';
// Assets
import Logo from '../../assets/img/Logo.png';
// CSS
import './Menu.css';

function Menu(props) {
    return (
        <nav className='Menu'>
            <Link to='/'>
                <img alt='AluraFlix' className='Logo' src={Logo} />
            </Link>
            <ButtonLink as={Link} className='ButtonLink' to='/cadastro/video'>
                Novo vídeo
            </ButtonLink>
        </nav>
    );
}

export default Menu;