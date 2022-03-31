import React from "react";

import { motion } from "framer-motion"
import {useNavigate} from 'react-router'

import '../styles/style/entrance.css'

export const LoadPAge = () =>{
    
    const navigate = useNavigate();

    const redirectingHome =( )=>{
        navigate('https://kill-coder.github.io/petalinas/home');
    }

    return(
        <motion.div className="intro"
        initial={{
            scale:0.2,
            opacity:0.2
        }}
        transition={{duration: 1.5}}
        animate={{
            scale:1,
            opacity:1
        }}
        >
            <img className="logo" src={require('../styles/images/logo_Petalinas.png')} />
            <motion.h1 className="initialtext"
                whileHover={{scale: 1.2}}
                initial={{opacity: 0,
                x:200,
                color: "#000000"
                }}
                transition={{ duration:3.5}}
                animate={{
                    opacity:2,
                    x:0,
                    color:"#8a2be2"
                }}
            >by Llaurant</motion.h1>
            

            <motion.button className="btn btn-primary"
                whileHover={{scale: 1.5}} 
                initial={{opacity: 0,
                    x:200,
                    }}
                    transition={{ duration:3.5}}
                    animate={{
                        opacity:2,
                        x:0,
                    }}
                    onClick={redirectingHome}>Home</motion.button>
        </motion.div>
    );
}

