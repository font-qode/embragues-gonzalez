import "./Repuestos.css";
import { motion } from "motion/react";
import { useState } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

function Repuestos() {
  const [productoActual, setProductoActual] = useState(0);

  const totalProductos = 6;

  const siguienteProducto = () => {
    setProductoActual((anterior) => (anterior + 1) % totalProductos);
  };

  const anteriorProducto = () => {
    setProductoActual(
      (anterior) => (anterior - 1 + totalProductos) % totalProductos,
    );
  };
  return (
    <div id="repuestos" className="parts-container">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="subtitle-container">
          <h2 className="subtitles">Repuestos y Accesorios</h2>
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
            <span className="hero-span-subtitulo">|</span> Contamos con una alta
            variedad de repuestos y accesorios para mantener el rendimiento y
            durabilidad del sistema de embrague.
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
        <div className={`part-card ${productoActual === 0 ? "active" : ""}`}>
          <div className="part-image-container">
            <img className="part-image" src="/bombadeagua.png" alt="bomba de agua" />
          </div>

          <div className="part-info">
            <h4 className="part-title">Bombas de agua</h4>

            <span className="part-description">
              Lorem ipsum dolor sit amet consectetur adipiconse asperiores vel,
              temporum sed mollitia!
            </span>

            <a
              className="part-button"
              target="_blank"
              rel="noopener noreferrer"
              href="https://wa.me/5493456256499?text=Hola,%20quisiera%20saber%20mas%20sobre%20bombas%20de%20agua."
            >
              {" "}
              Consultar
            </a>
          </div>
        </div>

        <div className={`part-card ${productoActual === 1 ? "active" : ""}`}>
          <div className="part-image-container">
            <img className="part-image" src="/crapodinahidraulica.png" alt="crapodina hidráulica" />
          </div>

          <div className="part-info">
            <h4 className="part-title">Crapodinas hidráulicas</h4>

            <span className="part-description">
              Lorem ipsum dolor sit amet consectetur adipiconse asperiores vel,
              temporum sed mollitia!
            </span>

            <a
              className="part-button"
              target="_blank"
              rel="noopener noreferrer"
              href="https://wa.me/5493456256499?text=Hola,%20quisiera%20saber%20mas%20sobre%20crapodinas%20hidráulicas."
            >
              {" "}
              Consultar
            </a>
          </div>
        </div>

        <div className={`part-card ${productoActual === 2 ? "active" : ""}`}>
          <div className="part-image-container">
            <img className="part-image" src="/coronaarranque.png" alt="crapodina hidráulica" />
          </div>

          <div className="part-info">
            <h4 className="part-title">Corona de arranque</h4>

            <span className="part-description">
              Lorem ipsum dolor sit amet consectetur adipiconse asperiores vel,
              temporum sed mollitia!
            </span>

            <a
              className="part-button"
              target="_blank"
              rel="noopener noreferrer"
              href="https://wa.me/5493456256499?text=Hola,%20quisiera%20saber%20mas%20sobre%20coronas%20de%20arranque."
            >
              {" "}
              Consultar
            </a>
          </div>
        </div>

        <div className={`part-card ${productoActual === 3 ? "active" : ""}`}>
          <div className="part-image-container">
            <img className="part-image" src="/bombabombinhidraulico.png" alt="crapodina hidráulica" />
          </div>

          <div className="part-info">
            <h4 className="part-title">Bomba y bombín hidráulico</h4>

            <span className="part-description">
              Lorem ipsum dolor sit amet consectetur adipiconse asperiores vel,
              temporum sed mollitia!
            </span>

            <a
              className="part-button"
              target="_blank"
              rel="noopener noreferrer"
              href="https://wa.me/5493456256499?text=Hola,%20quisiera%20saber%20mas%20sobre%20bomba%20y%20bombín%20de%20agua."
            >
              {" "}
              Consultar
            </a>
          </div>
        </div>

        <div className={`part-card ${productoActual === 4 ? "active" : ""}`}>
          <div className="part-image-container">
            <img className="part-image" src="/kitdistribucion.png" alt="crapodina hidráulica" />
          </div>

          <div className="part-info">
            <h4 className="part-title">Kit de distribución</h4>

            <span className="part-description">
              Lorem ipsum dolor sit amet consectetur adipiconse asperiores vel,
              temporum sed mollitia!
            </span>

            <a
              className="part-button"
              target="_blank"
              rel="noopener noreferrer"
              href="https://wa.me/5493456256499?text=Hola,%20quisiera%20saber%20mas%20sobre%20kit%20de%20distribución."
            >
              {" "}
              Consultar
            </a>
          </div>
        </div>

        <div className={`part-card ${productoActual === 5 ? "active" : ""}`}>
          <div className="part-image-container">
            <img className="part-image" src="/rulemanes.png" alt="crapodina hidráulica" />
          </div>

          <div className="part-info">
            <h4 className="part-title">Rulemanes</h4>

            <span className="part-description">
              Lorem ipsum dolor sit amet consectetur adipiconse asperiores vel,
              temporum sed mollitia!
            </span>

            <a
              className="part-button"
              target="_blank"
              rel="noopener noreferrer"
              href="https://wa.me/5493456256499?text=Hola,%20quisiera%20saber%20mas%20sobre%20rulemanes."
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

export default Repuestos;
