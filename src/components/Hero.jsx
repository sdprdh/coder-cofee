import bgSlate from '../assets/bg-slate.png';
import {motion} from "framer-motion";
import tumblerImage from "../assets/black.png";

export const Hero = () => {
    const styles = {
        width: '100%',
        minHeight: '120vh',
        backgroundImage: `url(${bgSlate})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }

    return (
        <section style={styles}>
            <div className='w-full'>
                <div className='w-full min-h-screen flex items-center justify-center'>
                    <div
                        className='w-full h-full flex flex-col md:flex-row items-center md:items-start justify-between text-lightOrange relative'>

                        <div className='flex-1 md:p-4 mt-28'>
                            <motion.h1
                                className='text-7xl font-bold leading-tight ms-16'
                                initial={{opacity: 0, y: -100}}
                                animate={{opacity: 1, y: 0}}
                                transition={{
                                    type: 'spring',
                                    stiffness: 100,
                                    damping: 10,
                                    delay: 1
                                }}
                            >
                                Blvck <br/> Tumbler
                            </motion.h1>
                            <motion.div
                                className='mt-8 relative z-50 py-4 px-4 md:px-8 before:absolute before:top-0 before:left-0 before:bottom-0 before:right-[40%] md:before:right-[65%] before:bg-gray-700/25 before:opacity-50'
                                initial={{opacity: 0, y: 100}}
                                animate={{opacity: 1, y: 0}}
                                transition={{
                                    type: 'spring',
                                    stiffness: 100,
                                    damping: 10,
                                    delay: 1
                                }}
                            >
                                <h2 className='text-2xl'>Black Lifestyle Lovers,</h2>
                                <p className='mt-4 text-sm leading-loose opacity-55'>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Delectus aspernatur, cumque eos neque dolorem
                                    architecto deserunt quis voluptatibus in quisquam quia
                                    ducimus
                                </p>
                            </motion.div>
                        </div>

                        <div>
                            <motion.img
                                src={tumblerImage}
                                alt="tumbler-image"
                                className='h-[380px] md:h-[600px] mt-10 md:mt-14 relative z-40 img-shadow'
                                initial={{opacity: 0, scale: 0}}
                                animate={{opacity: 1, scale: 1}}
                                transition={{
                                    type: 'spring',
                                    stiffness: 100,
                                    delay: 0.4,
                                    damping: 10,
                                }}
                            />
                            <motion.div
                                className='h-[140px] md:h-[180px] w-[140px] md:w-[180px] absolute top-[36rem] md:top-36 right-14 md:right-[26rem] border-primary border-[20px] z-10 rounded-full'
                                initial={{opacity: 0, y: 100}}
                                animate={{opacity: 1, y: 0}}
                                transition={{
                                    type: 'spring',
                                    stiffness: 100,
                                    damping: 10,
                                    delay: 0.8,
                                }}
                            >
                            </motion.div>
                        </div>

                        <div className='flex-1 p-4 hidden md:flex justify-end mt-96'>
                            <motion.div
                                className='relative z-50 py-4 px-8 before:absolute before:top-0 before:right-0 before:bottom-0 before:left-[45%] before:bg-darkGray/50 before:opacity-50'
                                initial={{opacity: 0, y: 100}}
                                animate={{opacity: 1, y: 0}}
                                transition={{
                                    type: 'spring',
                                    stiffness: 100,
                                    damping: 10,
                                    delay: 1
                                }}
                            >
                                <h2 className='text-2xl'>Blvck Tumbler</h2>
                                <p className='mt-4 text-sm leading-loose opacity-55'>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br/>
                                    Delectus aspernatur,Delectus aspernatur, Delectus <br/>
                                    aspernatur,Delectus aspernatur,
                                </p>
                            </motion.div>
                        </div>

                        <div className="absolute top-80 md:top-20 -right-14 md:right-[100px] z-[1]">
                            <motion.h1
                                className="text-9xl scale-150 font-bold text-darkGray/40 leading-none"
                                initial={{opacity: 0, x: -100}}
                                animate={{opacity: 1, x: 0}}
                                transition={{
                                    type: 'spring',
                                    stiffness: 100,
                                    damping: 10,
                                    delay: 0.8
                                }}
                            >
                                Blvck <br/> Tumbler
                            </motion.h1>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
