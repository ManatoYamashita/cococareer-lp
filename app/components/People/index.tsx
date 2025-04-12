'use client';

import Image from 'next/image';
import Link from 'next/link';
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
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 0.8
        }
    }
};

const People = () => {
    return (
        <motion.div 
            id="product"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
        >
            <div className="mx-auto max-w-7xl px-6">
                <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1 pt-10 lg:pt-32 lg:mt-20'>
                    <motion.div 
                        className='col-span-6 flex justify-center'
                        variants={imageVariants}
                    >
                        <Image src="/assets/people/placeholder.jpeg" alt="nothing" width={1000} height={805} />
                    </motion.div>

                    <motion.div 
                        className='col-span-6 flex flex-col justify-evenly lg:pl-24 mt-10 lg:mt-0'
                        variants={containerVariants}
                    >
                        <motion.h1 
                            className='text-midnightyellow text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-143'
                            variants={itemVariants}
                        >
                            自分の可能性にワクワクする日々を
                        </motion.h1>
                        <motion.h3 
                            className='text-black text-lg font-normal text-center lg:text-start lh-173 opacity-75 pt-5 lg:pt-0'
                            variants={itemVariants}
                        >
                            大学生が在学中に「何を経験するか」<br />
                            これは今後のキャリア選択、人生を大きく左右するものだ。そう断言できます。<br />
                            私自身も大学一年生のとき、些細なきっかけで起業に興味を持ち、会社を立ち上げました。それまでは学歴こそが成功の全てだと信じていましたが、起業を通じてさまざまな人々と出会い、自分の価値観や得意・不得意を深く理解することができました。
                        </motion.h3>
                        <motion.div
                            variants={itemVariants}
                        >
                            <Link href={'/'} className="text-electricyellow text-lg font-medium flex gap-2 mx-auto lg:mx-0 pt-5 lg:pt-0">
                                Learn more <Image src="/assets/people/arrow-right.svg" alt="arrow-right" width={24} height={24} />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

export default People;
