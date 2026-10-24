import './Hero.css';
import { motion } from "motion/react";
import { FaWhatsapp } from "react-icons/fa";

function Hero() {

    return (
        <>
        <div id='inicio' className="Hero-container">
            <div className="Hero-subcontainer">
                <div className="Hero-information-container">
                    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} viewport={{ once: true }}>
                    <div className="Hero-subtitulo-container"> 
                        <h2 className="Hero-subtitulo"> 
                           <span className='hero-span-subtitulo'>|</span> Con toda una <span className='hero-span-subtitulo'>vida</span> de <span className='hero-span-subtitulo'>experiencia</span> 
                        </h2>
                    </div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                        <div className="Hero-titulo-container">
                            <h1 className="Hero-titulo"> Embragues Gonzalez</h1>
                        </div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} viewport={{ once: true }}>
                    <div className="Hero-subtitulo-container"> 
                        <p className='hero-parrafo-subtitulo'> Brindamos soluciones integrales en embragues y transmisiones para maquinaria agrícola, maquinaria pesada, transporte, vehículos familiares y de competición, combinando experiencia, innovación y un profundo conocimiento técnico. </p>
                    </div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }} viewport={{ once: true }}>
                    <div className="Hero-button-container">
                        <a target="_blank" rel="noopener noreferrer" href="https://wa.me/5493456256499?text=Hola,%20quisiera%20solicitar%20un%20presupuesto." className="Hero-button"> SOLICITAR PRESUPUESTO </a>
                    </div>
                    </motion.div>
                </div>
                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }} viewport={{ once: true }}>
                <div className="Hero-ver-productos-container">
                    <span> Más información </span>
                    <span className='end-arrow'> ↓ </span>
                </div>
                </motion.div>
            </div>
        </div>
        <a className='whatsapp-container' target="_blank" rel="noopener noreferrer" href="https://wa.me/5493456256499?text=Hola,%20quisiera%20solicitar%20un%20presupuesto.">
            < FaWhatsapp />
        </a>
        </>
    )
}

export default Hero