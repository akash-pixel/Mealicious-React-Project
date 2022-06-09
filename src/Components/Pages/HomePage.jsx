import { motion } from 'framer-motion'
import React from 'react'
import Popular from '../Popular'
import Veggie from '../Veggie'

function HomePage() {
  return (
    <motion.div
    animate={{opacity:1}}
    initial={{opacity:0}}
    exit={{opacity:0}}
    transition={{duraiton:0.5}}
    >
        <Veggie/>
        <Popular title="Popular Recipes" />
        <Popular title="Exotic Recipes" />
    </motion.div>
  )
}

export default HomePage