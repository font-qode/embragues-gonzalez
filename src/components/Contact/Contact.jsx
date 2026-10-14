import "./Contact.css";
import { motion } from "motion/react";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";


function Contact() {
  return (
    <div id="contacto" className="about-container">
      <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
      <div className="subtitle-container">
        <h2 className="subtitles">Contacto y Ubicación </h2>
      </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
      <div className="parts-description">
        <h3 className="parts-description-text">
          <span className="hero-span-subtitulo">|</span> Escribinos y contanos
          qué repuesto o servicio necesitás.{" "}
        </h3>
      </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.3 }} viewport={{ once: true }}>
      <div className="contact-button-container">
        <a className="contact-button" target="_blank" rel="noopener noreferrer" href="https://wa.me/5493456256499?text=Hola,%20quisiera%20saber%20mas%20sobre."> < FaWhatsapp />  WhatsApp </a>
      </div>
      </motion.div>
      <div>
        <div className="process-list">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
          <div className="contact-card">
            <div>
              <h4 className="card-title-contact"> Contacto </h4>
            </div>
            <div className="social-media-container">
              <div className="social-media">
                <a href="https://instagram.com/embragues_gonzalez?exln=MWpqMHU5aWQ0ODV5Zw%3D%3D"target="_blank" rel="noreferrer"> < FaInstagram /> Instagram </a>
              </div>
              <div className="social-media">
                <a href="https://www.facebook.com/profile.php?id=61560183095762&locale=es_LA"target="_blank" rel="noreferrer"> < FaFacebook /> Facebook</a>
              </div>
              <div className="social-media">
                <a href="mailto:embraguesgonzalez22@gmail.com"> < MdOutlineMailOutline /> Email</a>
              </div>
            </div>
          </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
          <div className="contact-card">
            <div>
              <h4 className="card-title-contact">¿Dónde nos encontramos?</h4>
            </div>
            <div>
              <p className="contact-text"> Av. San Lorenzo 336 Oeste </p>
              <p className="contact-text"> Concordia, Entre Rios, Argentina </p>
              <p className="contact-text"> Código postal: 3202 </p>
            </div>
            <div>
              <span className="span-line-contact">____</span>
            </div>
          </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
          <div className="contact-card">
            <div>
              <h4 className="card-title-contact"> Dias y horarios de atención </h4>
            </div>
            <div>
              <p className="contact-text"> Lunes a viernes </p>
              <p className="contact-text"> 7:30hs a 12hs - 15hs a 19hs </p>
            </div>
            <div>
              <span className="span-line-contact">____</span>
            </div>
          </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
        <div>
          <div className="contact-map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3406.074132692559!2d-58.024916924180886!3d-31.38451937427638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95ade810c0965c79%3A0xfc4d6814c4ea23c5!2sEmbragues%20Gonzalez%20SRL!5e0!3m2!1ses!2sar!4v1791499291972!5m2!1ses!2sar"
              title="Ubicación de Embragues González"
              width="100%"
              height="300"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;