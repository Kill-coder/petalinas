import React from 'react';
import { motion } from "framer-motion"


import { FaInstagram , FaTwitter} from "react-icons/fa";
import {FcIdea, FcInTransit, FcGlobe, FcBiomass ,FcInfo} from "react-icons/fc"
import { SiGmail } from "react-icons/si";


import '../styles/style/home.css'

export function Home () {

    return(
        <div>
          <div className='navbar'>
            <motion.img src={require('../styles/images/logo_Petalinas.png')} height={100} width={120}
              initial={{opacity:0.2}}
              animate={{
                opacity: 1,
                rotate: 360
              }}
              transition={{duration: 1.3}}
            />
            
             {/* Icons social media */}
            <div className='social-media'>
              <motion.p
                whileHover={{scale: 1.2}}
                initial={{opacity: 0,
                x:200,
                color: "#000000"
                }}
                transition={{ duration:1}}
                animate={{
                    opacity:2,
                    x:0,
                }}
              ><a href='https://www.instagram.com/proyectopetalinas_/' target={'_blank'} rel="nofollow noopener noreferrer"><FaInstagram /> </a> @proyectopetalinas</motion.p>
              <motion.p
              whileHover={{scale: 1.2}}
              initial={{opacity: 0,
              x:200,
              color: "#000000"
              }}
              transition={{ duration:1}}
              animate={{
                  opacity:2,
                  x:0,
              }}
              ><a href='https://twitter.com/petalinas' target={'_blank'}  rel="nofollow noopener noreferrer"> <FaTwitter /> </a> @petalinas</motion.p>    
              <motion.p
              whileHover={{scale: 1.2}}
              initial={{opacity: 0,
              x:200,
              color: "#000000"
              }}
              transition={{ duration:1}}
              animate={{
                  opacity:2,
                  x:0,
              }}
              ><a href='https://www.google.com/intl/es/gmail/about/' target={'_blank'} rel="nofollow noopener noreferrer"> <SiGmail /> </a> proyectopetalinas@gmail.com</motion.p>                  
            </div>
          </div>
          
          {/* Información */}
          <div className='info'>
              <p className='slogan'>Un snack de cercania para poner color a tu día</p>
              <p className='slogantwo'>Innovador, saludable y sostenible</p>
              <p className='text-petalinas'>
                ¿Que e <b>Petalinas</b>?
                Petalinas es un nuevo concepto divertido y saludable de snack para comer entre horas. Este nombre hace referencia a su ingrediente más vanguardista: los pétalos de las flores.
                Con este proyecto queremos  combatir el desperdicio de flores comestibles debido a la elevada producción durante las épocas de menor consumo.
                El origen de esta propuesta surge de la intención de revalorizar el cultivo de azafrán, aprovechando los restos florales que no se utilizan.<br/>
                <b>Petalinas</b> emplea biorresiduos sostenibles de km 0 que, con creatividad, permiten desarrollar un producto que no te dejara indiferente.
              </p>
          </div>

          {/*Propiedades Petalinas*/}
          <div className='propiedades'>
            <motion.img src={require('../styles/images/bolsa_petalinas.png')} height={100} width={100}
              whileHover={{scale:1.5}}
              initial={{scale:0 , y:100}}
              transition={{
                duration:1,
              }}
              animate={{
                scale:1,
                y:0
              }}
            />
            <div className='frases'>
              <p className='frase'><FcBiomass size={40}/> Petalinas es el snack perfecto, debido a su elevado<br/>contenido en oligoelementos y compuestos bioactivos</p>
              <p className='frase'><FcGlobe size={40}/> Ofrece un sabor único y diferente, evocado a la naturaleza</p>
              <p className='frase'><FcInTransit size={40}/> Gracias a su envase versátil y de fácil transporte, permitellevarlo contigo a cualquier parte</p>
            </div>
          </div>
          
          {/*Datos del producto*/}
          <div className='ingredientes'>
              <p className='especias'><b className='resaltado'>¿Por qué especias?</b><br/>
               Las especias son potenciadores del sabor naturales que nos permiten introducir al consumidor sabores diferentes y únicos</p>
              <p className='azafran'><FcInfo size={40}/><b className='resaltado'>Azafrán</b><br/>
               <b className='resaltado'>¿Qué esta pasando con el azafrán en España?</b><br/>
                Desde hace siglos, el cultivo del azafrán ha formado parte de la agricultura y cultura española para su uso como condimento,
                fragancias, tinte e incluso fármacos, siendo una de las especias más preciadas en el mercado. No obstante, en los últimos años, su cultivo ha ido en declive
                hasta reducirse considerablemente, principalmente debido a su poca rentabilidad.
              </p>
              <p className='curiosidades'><FcIdea size={40}/><b className='resaltado'>¿Sabías que..?</b><br/>
                Por cada kilogramo de azafrán se desperdicia 63 kilogramos de restos florales.
              </p>
          </div>

          {/*Fotos producto y nutricional*/}
          <div className='fotos'>
            <motion.img src={require('../styles/images/Bolsa_gusanitos.png')} height={300} width={300} className="fotoBolsa"
                whileHover={{scale:1.2}}
                initial={{scale:0 , y:100}}
                transition={{
                  duration:1,
                }}
                animate={{
                  scale:1,
                  y:0
                }}
                />
             <img  src={require('../styles/propiedades/Bajo_grasa.png')} height={40} width={40} />
             <img src={require('../styles/propiedades/bajo_sal.png')} height={50} width={50}/>
             <img src={require('../styles/propiedades/celiacos.png')} height={50} width={50}/>
             <img src={require('../styles/propiedades/fuente_fibra.png')} height={50} width={50}/>
             <img src={require('../styles/propiedades/sin_sal.png')} height={50} width={50}/>
             <img src={require('../styles/propiedades/veganos.png')} height={50} width={50}/>
          </div>

          {/* Footer */}
          <footer className='footer'>
            <p className='textfooter'>© 2022 Petalinas.  All rights reserved.</p>
            <p className='localizacion'>Camino de Vera,s/n,Edificio 3H<br/>
               46022Valencia,Valencia
            </p>
          </footer>
        </div>
    );
}