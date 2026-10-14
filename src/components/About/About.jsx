import historiaRaul from "../../assets/video/historiaraul.mp4";
import "./About.css";
import { motion } from "motion/react";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { GiMagnifyingGlass, GiHexagonalNut, GiStarMedal } from "react-icons/gi";


function About() {
  return (
    <div id="quienessomos" className="about-container">
      <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
      <div className="subtitle-container">
        <h2 className="subtitles"> ¿Quienes somos? </h2>
      </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
      <div className="parts-description">
        <h3 className="parts-description-text">
          {" "}
          <span className="hero-span-subtitulo">|</span> Detrás de cada trabajo
          hay experiencia{" "}
        </h3>
      </div>
      </motion.div>
      <div className="info-video-container">
        <motion.div className="info-about-container" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.3 }} viewport={{ once: true }}>
          <div className="text-container">
            <p className="about-text">
            {" "}
            Embragues González es una empresa familiar de Concordia
            especializada en embragues, reparación y repuestos, construida sobre
            más de medio siglo de experiencia en el oficio. Fundada por Raúl
            González después de una extensa trayectoria en el rubro, combina
            conocimiento técnico, responsabilidad y atención cercana para
            brindar seguridad y confianza en cada trabajo.
          </p>
          <p className="about-text">
            Su historia no empieza con la apertura de Embragues González:
            empieza mucho antes. Empieza con Raúl, con una pasión que nació
            desde chico, se convirtió en oficio, atravesó décadas de trabajo,
            dio origen a dos proyectos empresariales y encontró continuidad en
            una nueva generación.
          </p>
          </div>
          <div className="about-card-container">
            <motion.div className="about-card" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
              <div className="about-card-icono"> < GiHexagonalNut /> </div>
              <span className="about-card-texto">
                {" "}
                Repuestos de calidad{" "}
              </span>
            </motion.div>

            <motion.div className="about-card" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
              <div className="about-card-icono"> < GiMagnifyingGlass /> </div>
              <span className="about-card-texto">
                {" "}
                Diagnóstico profesional{" "}
              </span>
            </motion.div>

            <motion.div className="about-card" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
              <div className="about-card-icono"> < GiStarMedal /> </div>
              <span className="about-card-texto">
                {" "}
                Más de 50 años de experiencia{" "}
              </span>
            </motion.div>

            <motion.div className="about-card" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
              <div className="about-card-icono"> < HiOutlineUserCircle /></div>
              <span className="about-card-texto">
                Atención personalizada
              </span>
            </motion.div>
          </div>
          </motion.div>
          <motion.div className="video-about-container" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
            <video src={historiaRaul} controls playsInline preload="metadata"></video>
            <a href="https://www.instagram.com/embragues_gonzalez/reels/" target="_blank" rel="noopener noreferrer" className="services-button"> Continuar historia →</a>
          </motion.div>
        </div>
      </div>
  );
}

export default About;
