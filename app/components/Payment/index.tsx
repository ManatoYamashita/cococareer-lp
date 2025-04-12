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

const Payment = () => {
    return (
        <motion.div 
            className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
        >
            <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1'>
                <motion.div 
                    className='col-span-6 flex justify-center'
                    variants={imageVariants}
                >
                    <Image src="/assets/payment/placeholder.jpeg" alt="payment" width={600} height={600} />
                </motion.div>

                <motion.div 
                    className='col-span-6 flex flex-col justify-center mb-32'
                    variants={containerVariants}
                >
                    <motion.h2 
                        className='text-midnightyellow text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-143'
                        variants={itemVariants}
                    >
                        企業と学生のビジョンに寄り添った共創企画支援
                    </motion.h2>
                    <motion.h3 
                        className='text-black text-lg font-normal text-center lg:text-start lh-173 opacity-75 pt-3'
                        variants={itemVariants}
                    >
                        コミュニティのメンバーは、<br />
                        自己分析を通じて自分の価値観や強みを明確にし、<br />
                        企業との価値観の共有を促進することで、<br />
                        より適切な進路選択やキャリア形成をサポートします。
                    </motion.h3>
                    <motion.div
                        variants={itemVariants}
                    >
                        <Link href={'/'} className="text-electricyellow text-lg font-medium flex gap-2 pt-4 mx-auto lg:mx-0">
                            Learn more <Image src="/assets/people/arrow-right.svg" alt="arrow-right" width={24} height={24} />
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Payment;
