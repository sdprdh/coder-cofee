import {useEffect, useState} from 'react';
import {motion} from "framer-motion";
import {CgMenuRight} from "react-icons/cg"
import {RxCross2} from "react-icons/rx";
import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [sidebar, setSidebar] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <motion.nav
            className={`w-full flex items-center justify-between px-4 md:px-12 ${isScrolled ? 'py-4' : 'md:py-8 py-6'} fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 
            ${isScrolled ? 'bg-gradient-to-b from-darkGray/80 to-darkGray/80 backdrop-blur-sm shadow' : 'bg-transparent'}
            }`}
            initial={{opacity: 0, y: -100}}
            animate={{opacity: 1, y: 0}}
            transition={{
                stiffness: 100,
                damping: 10,
            }}
        >
            <h1 className={`text-lg md:text-2xl font-semibold text-white`}>
                CODERS
                <span className={`text-primary`}> COFFEE.</span>
            </h1>

            <div>
                {
                    !sidebar &&
                    <button type='button' className='text-2xl text-white' onClick={() => setSidebar(!sidebar)}>
                        <CgMenuRight/>
                    </button>
                }

                {
                    sidebar &&
                    <motion.div
                        className='w-24 md:w-32 h-screen bg-gradient-to-b from-primary/80 to-primaryDark/80 backdrop-blur-sm flex flex-col items-center absolute top-0 right-0 bottom-0'
                        initial={{opacity: 0, x: 100}}
                        animate={{opacity: 1, x: 0}}
                        transition={{
                            type: 'spring',
                            stiffness: 100,
                            damping: 10,
                        }}
                    >
                        <button type='button' className='text-2xl text-white mt-8 ' onClick={() => setSidebar(false)}>
                            <RxCross2/>
                        </button>
                        <div className='w-full h-full flex flex-col items-center justify-center gap-6'>
                            <div className="w-[1px] h-[70px] bg-white"></div>
                            <a href="#" className='inline-block p-2 rounded-full border border-white text-white'>
                                <FaFacebook/>
                            </a>
                            <a href="#" className='inline-block p-2 rounded-full border border-white text-white'>
                                <FaInstagram/>
                            </a>
                            <a href="#" className='inline-block p-2 rounded-full border border-white text-white'>
                                <FaTwitter/>
                            </a>
                            <div className="w-[1px] h-[70px] bg-white"></div>
                        </div>
                    </motion.div>
                }
            </div>
        </motion.nav>
    )
}
