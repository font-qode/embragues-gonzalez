import './Footer.css'
import { motion } from "motion/react";

function Footer() {

    return(
        <footer className="footer">
            <motion.div initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
            <div className='footer-name-logo-container'>
                <div className='footer-logo-container'> 
                    <img src="/logoCompleto.png" alt="logo Embragues Gonzalez" />
                </div>
            </div>
            </motion.div>
            <div className='footer-derechos-container'>
                <span>© 2026 Embragues Gonzalez. Todos los derechos reservados.</span>
            </div>
        </footer>
    )
}

export default Footer