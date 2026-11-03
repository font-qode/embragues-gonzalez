import './Services.css'
import { motion } from "motion/react";
import {
  LuTractor,
  LuDroplets,
  LuWrench,
  LuConstruction
} from "react-icons/lu";
import { GiCheckeredFlag } from "react-icons/gi";



function Services() {

    return (
        <div id='servicios' className="services-container">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
            <div className="subtitle-container">
                <h2 className="subtitles"> Servicios </h2>
            </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
            <div className="parts-description">
                <h3 className="parts-description-text"> <span className='hero-span-subtitulo'>|</span> Ofrecemos servicios especializados en reparación y mantenimiento de sistemas de embrague, garantizando un funcionamiento óptimo, seguro y duradero para cada vehículo.</h3>
            </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.3 }} viewport={{ once: true }} className='services-list'>
                <div className='services-card'>
                    <div className='services-icon-container'>
                        < LuTractor className='services-icon'/>
                    </div>
                    <div className='services-info'>
                        <h4 className='services-title'> Embragues para tractores y maquinaria agrícola </h4>
                        <span className='services-description'> Lorem ipsum dolor sit amet consectetur adipiconse asperiores vel, temporum sed mollitia!</span>
                    </div>
                </div>
                <div className='services-card'>
                    <div className='services-icon-container'>
                        < GiCheckeredFlag className='services-icon'/>
                    </div>
                    <div className='services-info'>
                        <h4 className='services-title'> Embragues de competición </h4>
                        <span className='services-description'> Lorem ipsum dolor sit amet consectetur adipiconse asperiores vel, temporum sed mollitia!</span>
                    </div>
                </div>
                <div className='services-card'>
                    <div className='services-icon-container'>
                        < LuWrench className='services-icon'/>
                    </div>
                    <div className='services-info'>
                        <h4 className='services-title'> Reparación de embragues automotrices </h4>
                        <span className='services-description'> Lorem ipsum dolor sit amet consectetur adipiconse asperiores vel, temporum sed mollitia!</span>
                    </div>
                </div>
                <div className='services-card'>
                    <div className='services-icon-container'>
                        < LuConstruction className='services-icon'/>
                    </div>
                    <div className='services-info'>
                        <h4 className='services-title'> Embragues para máquinas viales </h4>
                        <span className='services-description'> Lorem ipsum dolor sit amet consectetur adipiconse asperiores vel, temporum sed mollitia!</span>
                    </div>
                </div>
                <div className='services-card'>
                    <div className='services-icon-container'>
                        < LuDroplets className='services-icon'/>
                    </div>
                    <div className='services-info'>
                        <h4 className='services-title'> Sistemas y embragues en baño de aceite </h4>
                        <span className='services-description'> Lorem ipsum dolor sit amet consectetur adipiconse asperiores vel, temporum sed mollitia!</span>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Services