
import historiaRaul from "../../assets/video/historiaraul.mp4";
import "./About.css";
import { motion } from "motion/react";
import {
  HiOutlineUserCircle
} from "react-icons/hi2";
import {
  GiMagnifyingGlass,
  GiHexagonalNut,
  GiStarMedal
} from "react-icons/gi";

const caracteristicas = [
  {
    icono: <GiHexagonalNut />,
    texto: "Repuestos de calidad"
  },
  {
    icono: <GiMagnifyingGlass />,
    texto: "Diagnóstico profesional"
  },
  {
    icono: <GiStarMedal />,
    texto: "Más de 50 años de experiencia"
  },
  {
    icono: <HiOutlineUserCircle />,
    texto: "Atención personalizada"
  }
];

function About() {
  return (
    <section id="quienessomos" className="about-container">

      <motion.div
        className="about-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >

        <h2 className="about-title">
          Más de medio siglo
          <span> de experiencia.</span>
        </h2>

        <p className="about-intro">
          <span className="hero-span-subtitulo">|</span> Una historia de pasión, trabajo y compromiso
          que continúa de generación en generación.
        </p>
      </motion.div>

      <div className="info-video-container">

        <motion.div
          className="info-about-container"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="about-small-title">
            QUIÉNES SOMOS
          </span>

          <h3 className="about-secondary-title">
            Una pasión que se convirtió en oficio.
          </h3>

          <div className="text-container">
            <p className="about-text">
              Embragues Gonzalez es una empresa familiar
              de Concordia especializada en embragues,
              reparación y repuestos, construida sobre
              más de medio siglo de experiencia en el oficio.
            </p>

            <p className="about-text">
              Fundada por Raúl González después de una extensa
              trayectoria en el rubro, combina conocimiento
              técnico, responsabilidad y atención cercana
              para brindar seguridad y confianza en cada trabajo.
            </p>

            <p className="about-text">
              Su historia comenzó mucho antes de la apertura
              de la empresa: con una pasión que nació desde
              chico y encontró continuidad en una nueva generación.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="video-about-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="about-video-frame">
            <video
              src={historiaRaul}
              controls
              playsInline
              preload="metadata"
            />
          </div>

          <a
            href="https://www.instagram.com/embragues_gonzalez/reels/"
            target="_blank"
            rel="noopener noreferrer"
            className="about-video-link"
          >
            Continuar historia <span>↗</span>
          </a>
        </motion.div>
      </div>

      <div className="about-card-container">
        {caracteristicas.map((item, index) => (
          <motion.div
            className="about-card"
            key={index}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1
            }}
            viewport={{ once: true }}
          >
            <span className="about-card-number">
              0{index + 1}
            </span>

            <div className="about-card-icono">
              {item.icono}
            </div>

            <span className="about-card-texto">
              {item.texto}
            </span>
          </motion.div>
        ))}
      </div>

    </section>
  );
}

export default About;
