import React from 'react';
import './NavBar.scss';
import Link from 'next/link';

const NavBar = () => {
    return (
        <nav className='NavBarWrapper'>
            <div className='Left'>
                <img
                    height={40}
                    src='/feather.png'
                    alt='Logo'
                    className='Logo' />
                <p className='LogoText'>BODY GLOW SPA</p>
            </div>
            <div className='Right'>
                <Link href="#servicios">
                    <p className='LogoText'>SERVICIOS</p>
                </Link>
                <Link
                    href=""
                    target='_blank'
                    rel="noopener noreferrer"
                    >
                    <img
                        height={35}
                        src="/location.png"
                        alt="Location"
                        className='icons'
                    />
                </Link>
                <Link
                    href="https://wa.me/5493546500838/?text=Hola!%20Podrias%20pasarme%20un%20presupuesto?%20Me%20interesa%20el%20sercivio%20de%20Body%20Glow."
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                        height={35}
                        src="/whatsapp.png"
                        alt="WhatsApp"
                        className='icons'
                    />
                </Link>
                <Link
                    href=
                    "https://www.instagram.com/body_glow_spa/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                        height={35}
                        src="/instagram.png"
                        alt="Instagram"
                        className='icons'
                    />
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;