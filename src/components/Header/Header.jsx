
function Header() {

    return (
        <nav className="nav-container">
            <div className="logo-container">
                <a href="#inicio"> LOGO </a> 
            </div>
            <ul className="sections-container">
                <li className="sections-navbar">
                    <a href="#inicio" className="nav-link-sections">Inicio</a>
                </li>
                <li className="sections-navbar">
                    <a href="#productos" className="nav-link-sections">Productos</a>
                </li>
                <li className="sections-navbar">
                    <a href="#servicios" className="nav-link-sections">servicios</a>
                </li>
                <li className="sections-navbar">
                    <a href="#comotrabajamos" className="nav-link-sections">Como trabajamos</a>
                </li>
                <li className="sections-navbar">
                    <a href="#quienessomos" className="nav-link-sections">Quienes somos</a>
                </li>
                <li className="sections-navbar">
                    <a href="#contacto" className="nav-link-sections">Contacto</a>
                </li>
            </ul>
        </nav>
    )
}

export default Header