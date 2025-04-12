'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 10
        }
    }
};

const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 0.8
        }
    }
};

const starVariants = {
    hidden: { opacity: 0, rotate: 0 },
    visible: {
        opacity: 1,
        rotate: 360,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 1.5
        }
    }
};

const Banner = () => {
    return (
        <motion.div 
            className='bg-header'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
        >
            <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">
                <div className='h-16'></div>
                <div className='grid grid-cols-1 lg:grid-cols-12'>
                    <motion.div 
                        className='col-span-7 flex flex-col justify-evenly relative'
                        variants={containerVariants}
                    >
                        <motion.div
                            variants={starVariants}
                            className='absolute top-[-74px] right-[51px]'
                        >
                            <Image src="/assets/banner/star.svg" alt="star-image" width={95} height={97} />
                        </motion.div>
                        <motion.div
                            variants={itemVariants}
                            className='absolute top-[-74px] right-[51px]'
                        >
                            <Image src="/assets/banner/lineone.svg" alt="line-image" width={190} height={148} />
                        </motion.div>
                        <motion.h1 
                            className='text-midnightyellow text-4xl md:text-85xl text-center lg:text-start font-semibold lh-133 pt-5'
                            variants={itemVariants}
                        >
                            採用を賭けから戦略に
                        </motion.h1>
                        <motion.h3 
                            className='text-black opacity-75 text-lg font-normal text-center lg:text-start pt-8'
                            variants={itemVariants}
                        >
                            COCO CAREERは学生と企業を繋ぐ長期インターン掲載プラットフォームです。
                        </motion.h3>
                        <motion.div 
                            className='pt-8 mx-auto lg:mx-0'
                            variants={itemVariants}
                        >
                            <motion.button 
                                className="text-white text-xl font-medium py-6 px-12 rounded-full transition duration-150 ease-in-out bg-electricyellow hover:text-white hover:bg-yellow"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Get started
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    <motion.div 
                        className='col-span-5 flex justify-center xl:-mb-32 xl:-mr-32 pt-10 lg:pt-0'
                        variants={imageVariants}
                    >
                        <Image src="/assets/banner/placeholder.jpeg" alt="we are cococareer" width={1000} height={805} />
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

export default Banner;
