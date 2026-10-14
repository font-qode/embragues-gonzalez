import './Header.css'
import { motion } from "motion/react";
import { useState } from 'react';

function Header() {

    const [ menuHamburguesa, setMenuHamburguesa ] = useState(false)

    return (
        <nav className="nav-container">
            <motion.div className="logo-container" initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}> 
                <a href="#inicio"> 
                    <img src="/logo.png" alt="logo" />
                </a>
            </motion.div>
            <button className="menu-button" onClick={() => setMenuHamburguesa(!menuHamburguesa)}>
                ☰
            </button>
            <ul className={`sections-container ${menuHamburguesa ? 'open' : ''}`}>
                <li className="sections-navbar">
                    <a href="#inicio" className="nav-link-sections">Inicio</a>
                </li>
                <li className="sections-navbar">
                    <a href="#repuestos" className="nav-link-sections">Repuestos</a>
                </li>
                <li className="sections-navbar">
                    <a href="#servicios" className="nav-link-sections">Servicios</a>
                </li>
                <li className="sections-navbar">
                    <a href="#comotrabajamos" className="nav-link-sections">¿Cómo trabajamos?</a>
                </li>
                <li className="sections-navbar">
                    <a href="#quienessomos" className="nav-link-sections">¿Quiénes somos?</a>
                </li>
                <li className="sections-navbar-contact">
                    <a href="#contacto" className="nav-link-sections">Contacto</a>
                </li>
            </ul>
        </nav>
    )
}

export default Header