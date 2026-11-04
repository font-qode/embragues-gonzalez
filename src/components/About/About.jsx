import "./About.css";
import historiaRaul from "../../assets/video/historiaraul-optimizado.mp4";
import { motion } from "motion/react";

const caracteristicas = [
  {
    texto: "Repuestos de calidad",
  },
  {
    texto: "Diagnóstico profesional",
  },
  {
    texto: "Más de 50 años de experiencia",
  },
  {
    texto: "Atención personalizada",
  },
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
        <div className="subtitle-container">
          <h2 className="about-title">
            Más de medio siglo
            <span> de experiencia.</span>
          </h2>
        </div>
        <p className="about-intro">
          <span className="hero-span-subtitulo">|</span> Una historia de pasión,
          trabajo y compromiso que continúa de generación en generación.
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
          <span className="about-small-title">QUIÉNES SOMOS</span>

          <h3 className="about-secondary-title">
            Una pasión que se convirtió en oficio.
          </h3>

          <div className="text-container">
            <p className="about-text">
              Embragues Gonzalez es una empresa familiar de Concordia
              especializada en embragues, reparación y repuestos, construida
              sobre más de medio siglo de experiencia en el oficio.
            </p>

            <p className="about-text">
              Fundada por Raúl Gonzalez después de una extensa trayectoria en el
              rubro, combina conocimiento técnico, responsabilidad y atención
              cercana para brindar seguridad y confianza en cada trabajo.
            </p>

            <p className="about-text">
              Su historia comenzó mucho antes de la apertura de la empresa: con
              una pasión que nació desde chico y encontró continuidad en una
              nueva generación.
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
            Continuar historia
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
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
          >
            <span className="about-card-number">0{index + 1}</span>

            <span className="about-card-texto">{item.texto}</span>
          </motion.div>
        ))}
      </div>

      {/* MISIÓN Y VISIÓN */}

      <div className="about-values-container">
        <motion.div
          className="about-values-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="about-small-title">NUESTROS VALORES</span>

          <h3 className="about-secondary-title">
            Nuestro presente.
            <span className="about-values-accent"> Nuestro futuro.</span>
          </h3>
        </motion.div>

        <div className="about-values-grid">
          <motion.article
            className="about-value-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="about-value-number">01 / PROPÓSITO</span>

            <h4>Nuestra misión</h4>

            <p>
              Brindar soluciones integrales en embragues y transmisiones para
              maquinaria agrícola, maquinaria pesada, transporte, vehículos
              familiares y de competición, combinando experiencia, innovación y
              un profundo conocimiento técnico. Trabajamos con rapidez,
              eficiencia y compromiso para ofrecer productos y servicios
              confiables, desarrollando soluciones personalizadas que respondan
              a las necesidades reales de cada cliente y construyendo relaciones
              basadas en la confianza y el trato familiar.
            </p>
          </motion.article>

          <motion.article
            className="about-value-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <span className="about-value-number">02 / PROYECCIÓN</span>

            <h4>Nuestra visión</h4>

            <p>
              Ser la empresa referente en Argentina en soluciones de embragues y
              transmisiones, reconocida por la excelencia de nuestro trabajo, la
              capacidad de resolver desafíos técnicos complejos y la cercanía
              con nuestros clientes. Aspiramos a crecer manteniendo nuestros
              valores familiares, liderando la innovación en el sector y
              consolidándonos como el socio de confianza elegido por quienes
              buscan calidad, experiencia y resultados comprobados.
            </p>
          </motion.article>
        </div>
      </div>
    </section>
  );
}

export default About;
