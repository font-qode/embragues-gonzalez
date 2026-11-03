import "./Embragues.css";
import { motion } from "motion/react";
import { useState } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

function Embragues() {
  const [productoActual, setProductoActual] = useState(0);

  const totalProductos = 4;

  const siguienteProducto = () => {
    setProductoActual((anterior) => (anterior + 1) % totalProductos);
  };

  const anteriorProducto = () => {
    setProductoActual(
      (anterior) => (anterior - 1 + totalProductos) % totalProductos,
    );
  };
  return (
    <div id="embragues" className="parts-container">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="subtitle-container">
          <h2 className="subtitles">Embragues <span> nuevos </span></h2>
          <h2 className="subtitles"><span>y reparados </span></h2>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="parts-description">
          <h3 className="parts-description-text">
            <span className="hero-span-subtitulo">|</span> Soluciones en embragues nuevos y reparados para todo tipo de vehículos y maquinaria
          </h3>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.3 }}
        viewport={{ once: true }}
        className="parts-list"
      >
        <div className={`embrague-card ${productoActual === 0 ? "active" : ""}`}>
          <div className="part-image-container">
            <img className="part-image" src="/tractor.png" alt="bomba de agua" />
          </div>

          <div className="part-info">
            <h4 className="part-title">Tractores y maquinarias agrícolas</h4>

            <a
              className="part-button"
              target="_blank"
              rel="noopener noreferrer"
              href="https://wa.me/5493456256499?text=Hola,%20quisiera%20saber%20mas%20sobre%20embragues%20para%20tractores%20y%20maquinaria%20agrícola."
            >
              {" "}
              Consultar
            </a>
          </div>
        </div>

        <div className={`embrague-card ${productoActual === 1 ? "active" : ""}`}>
          <div className="part-image-container">
            <img className="part-image" src="/competicion.png" alt="crapodina hidráulica" />
          </div>

          <div className="part-info">
            <h4 className="part-title">Competición</h4>

            <a
              className="part-button"
              target="_blank"
              rel="noopener noreferrer"
              href="https://wa.me/5493456256499?text=Hola,%20quisiera%20saber%20mas%20sobre%20embragues%20de%20competición."
            >
              {" "}
              Consultar
            </a>
          </div>
        </div>

        <div className={`embrague-card ${productoActual === 2 ? "active" : ""}`}>
          <div className="part-image-container">
            <img className="part-image" src="/automotriz.png" alt="crapodina hidráulica" />
          </div>

          <div className="part-info">
            <h4 className="part-title">Automotrices</h4>

            <a
              className="part-button"
              target="_blank"
              rel="noopener noreferrer"
              href="https://wa.me/5493456256499?text=Hola,%20quisiera%20saber%20mas%20sobre%20embragues%20automotrices."
            >
              {" "}
              Consultar
            </a>
          </div>
        </div>

        <div className={`embrague-card ${productoActual === 3 ? "active" : ""}`}>
          <div className="part-image-container">
            <img className="part-image" src="/vial.png" alt="crapodina hidráulica" />
          </div>

          <div className="part-info">
            <h4 className="part-title">Máquinas viales</h4>

            <a
              className="part-button"
              target="_blank"
              rel="noopener noreferrer"
              href="https://wa.me/5493456256499?text=Hola,%20quisiera%20saber%20mas%20sobre%20embragues%20para%20máquinas%20viales."
            >
              {" "}
              Consultar
            </a>
          </div>
        </div>
      </motion.div>

      <div className="parts-controls">
          <button
            className="parts-arrow"
            onClick={anteriorProducto}
            aria-label="Producto anterior"
          >
            <LuChevronLeft />
          </button>

          <span className="parts-counter">
            {productoActual + 1} / {totalProductos}
          </span>

          <button
            className="parts-arrow"
            onClick={siguienteProducto}
            aria-label="Siguiente producto"
          >
            <LuChevronRight />
          </button>
        </div>
    </div>
  );
}

export default Embragues;
