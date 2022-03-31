import { motion } from "framer-motion"

export const NotFound = () =>{

    return(
        <>
          <motion.h1
            initial={{color: "black", opacity: 0 }}
            transition={{duration:3}}
            animate={{opacity:1}}
          >404 Not Found</motion.h1>
        </>
    );
}