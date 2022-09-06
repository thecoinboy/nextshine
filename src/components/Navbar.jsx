import React, { useState } from 'react';
import { RiMenu4Fill } from 'react-icons/ri'
import { GrClose } from 'react-icons/gr'
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineFacebook, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'


const Navbar = () => {

  const [show, setShow] = useState(false);
  const varient = {
    open:''
  }

  return (
    <div className='fixed right-0 bg-yellow-400'>
      <motion.div 
      className="flex w-[5rem] lg:w-[6rem] items-center justify-center bg-yellow-400 relative z-50 h-screen top-0 left-0 bottom-0">
        <motion.button
          onClick={() => setShow(!show)}
          whileHover={{ scale: 1.4}}
          transition={{duration:.2}}
        >
          {show ? <GrClose size={35} /> : <RiMenu4Fill size={50} />}
        </motion.button>
      </motion.div>
      {
        show ?
          <motion.div className="w-[85vw] lg:w-[40rem] bg-yellow-400 h-screen absolute z-40 right-10 top-0 p-10"
          initial={{x:200}}
          animate={{ x: -15, }}
          >
            <div className='flex justify-center pt-5'>
              <ul className='text-right pr-5 border-r-2 border-black'>
                <motion.li whileHover={{ x:-10, fontWeight:500, fontSize:"35px" }}  className="text-3xl font-bold py-2"><Link to="/">HOME</Link></motion.li>
                <motion.li whileHover={{ x:-10, fontWeight:500, fontSize:"35px" }} className="text-3xl font-bold py-2">  <Link to="/services">SERVICES</Link> </motion.li>
                <motion.li whileHover={{ x:-10, fontWeight:500, fontSize:"35px" }} className="text-3xl font-bold py-2">  <Link to="/project">PROJECT</Link></motion.li>
                <motion.li whileHover={{ x:-10, fontWeight:500, fontSize:"35px" }} className="text-3xl font-bold py-2">  <Link to="/about">ABOUT</Link></motion.li>
                <motion.li whileHover={{ x:-10, fontWeight:500, fontSize:"35px" }} className="text-3xl font-bold py-2">  <Link to="/contact">CONTACT</Link></motion.li>
                <motion.li whileHover={{ x:-10, fontWeight:500, fontSize:"35px" }} className="text-3xl font-bold py-2">  <Link to="/login">LOGIN</Link></motion.li>
              </ul>
            </div>
            <div className="mt-20 flex flex-wrap px-5 lg:px-20 justify-between">
              <motion.span whileHover={{scale:1.5}} >
              <Link to=""> <AiOutlineGithub size={35} className="text-black" /> </Link>
              </motion.span>
              <motion.span whileHover={{scale:1.5}} >
              <Link to=""> <AiOutlineInstagram size={35} className="text-red-500" /> </Link>
              </motion.span>
              <motion.span whileHover={{scale:1.5}} >
              <Link to=""> <AiFillTwitterCircle size={35} className="text-blue-400" /> </Link>
              </motion.span>
              <motion.span whileHover={{scale:1.5}} >
              <Link to=""> <AiOutlineFacebook size={35} className="text-blue-500" /> </Link>
              </motion.span>
              <motion.span whileHover={{scale:1.5}} >
              <Link to=""> <AiFillLinkedin size={35}  className="text-blue-700" /> </Link>
              </motion.span>
            </div>
          </motion.div>
          : ""
      }
    </div>

  )
}

export default Navbar;