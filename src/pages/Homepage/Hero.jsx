import React from 'react'
import ReactTypingEffect from 'react-typing-effect'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { TbArrowBottomCircle } from 'react-icons/tb'
import bg from '../../pics/cool-background.png'
// import hero from '../../pics/off.jpg'

const Hero = () => {
    return (
        <div className='h-auto p-10 flex lg:h-screen flex-col justify-center' style={{ backgroundImage: `url(${bg})` }} >
            <div className='w-full flex flex-wrap'>
                <div className=''>
                    <motion.h1
                        initial={{ y: -200, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration:0.7, delay:1}}
                        className='text-4xl lg:text-8xl font-bold'   > Hi, We Are Nextshine
                    </motion.h1>
                    <motion.div className="mt-10"
                        initial={{ y:200, opacity: 0}}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration:0.8, delay:2}}
                        >
                        <ReactTypingEffect
                            text={["Make Creative Designs...", "Serve Complete Web Solutions...", "Create 3D Products..."]}
                            speed={50}
                            eraseSpeed={50}
                            eraseDelay={1000}
                            typingDelay={1000}
                            className="text-5xl font-normal"
                        />
                    </motion.div>
                </div>
            </div>
            <motion.div
                className='flex justify-center mt-16 lg:mt-52'
                initial={{ y: -200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4}}
                whileHover={{ y: 30 }}
            >
                <Link className='cursor-pointer w-[15px] h-[15px] rounded-full border-red-800 p-3 border-x-2 relative border-y-2' to='section2' smooth={true} duration={1000} > <TbArrowBottomCircle size={30}
                    className="absolute top-3 left-[-3px]  text-red-800" /> </Link>
            </motion.div>
        </div>
    )
}

export default Hero