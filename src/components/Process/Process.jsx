import "./Process.css";
import { motion } from "motion/react";

function Process() {
  return (
    <div id="comotrabajamos" className="parts-container">
      <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
      <div className="subtitle-container">
        <h2 className="subtitles"> ¿Como trabajamos?</h2>
      </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
      <div className="parts-description">
        <h3 className="parts-description-text">
          <span className="hero-span-subtitulo">|</span> Te ayudamos a encontrar la solución que necesitas
        </h3>
      </div>
      </motion.div>

      <div className="process-list">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.3 }} viewport={{ once: true }} className='services-list'>
        <div className="process-card">
          <div>
            <span className="process-number"> 01</span>
          </div>
          <div className="process-info-container">
            <div>
              <h4 className="process-card-title"> CONTANOS QUE NECESITAS</h4>
            </div>
            <div>
              <p className="info-process"> Escribinos indicando tu consulta. </p>
            </div>
          </div>
        </div>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.6 }} viewport={{ once: true }} className='services-list'>
        <div className="process-card">
          <div>
            <span className="process-number"> 02 </span>
          </div>
          <div className="process-info-container">
            <div>
              <h4 className="process-card-title"> PASANOS LOS DATOS</h4>
            </div>
            <div>
              <p className="info-process"> Marca, modelo, año... </p>
            </div>
          </div>
        </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.9 }} viewport={{ once: true }} className='services-list'>
        <div className="process-card">
          <div>
            <span className="process-number"> 03 </span>
          </div>
          <div className="process-info-container">
            <div>
              <h4 className="process-card-title"> RECIBÍ TU PRESUPUESTO</h4>
            </div>
            <div>
              <p className="info-process"> Te asesoramos y cotizamos. </p>
            </div>
          </div>
        </div>
        </motion.div>
      </div>

      <div className="process-button-container">
        <a className="process-button" target="_blank" rel="noopener noreferrer" href="https://wa.me/5493456256499?text=Hola,%20quisiera%20saber%20mas%20sobre."> Contanos tu consulta </a>
      </div>
    </div>
  );
}

export default Process;
