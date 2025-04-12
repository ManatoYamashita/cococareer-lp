"use client";
import { SetStateAction, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

const names = [
    {
        heading: "イベント企画",
        price: 400000,
        unit: "回",
        sub: "※ 価格条件等交渉可能",
        button: "Start free trial",
        description: "貴社の理念や業務内容に興味のある 学生がインターンを開始する時点で 費用が発生するプラン。",
        options: ["オリジナルイベント企画代行", "採用コンサルティング", "学生30人集客/5人以上の個別", "面談確約"],
        // category: 'yearly',
        imgSrc: '/assets/pricing/starone.svg',
    },
    {
        heading: "インターン紹介",
        price: 150000,
        unit: "人",
        sub: null,
        button: "Start free trial",
        description: "貴社の魅力を最大限に伝えつつ、 学生のニーズに合わせたオリジナ ルイベントを企画。 学生集客30名確約",
        options: ["学生フォローアップMTG", "個別企業紹介", "インターン開始・継続サポート"],
        // category: 'yearly',
        imgSrc: '/assets/pricing/startwo.svg',
    }
]

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

const cardVariants = {
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

const buttonVariants = {
    hover: { 
        scale: 1.05,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 10
        }
    },
    tap: { 
        scale: 0.95,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 10
        }
    }
};

const Pricing = () => {

    // const [selectedCategory, setSelectedCategory] = useState('monthly');

    // const handleCategoryChange = (category: SetStateAction<string>) => {
    //     setSelectedCategory(category);
    // };

    // const filteredData = names.filter((item) => item.category === selectedCategory);
    const filteredData = names;

    return (
        <motion.div 
            id="pricing" 
            className='bg-white relative py-10'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
        >
            <div className='mx-auto max-w-7xl sm:py-20 lg:px-8 my-16'>
                <motion.h3 
                    className='text-center text-4xl sm:text-65xl font-black text-midnightyellow'
                    variants={itemVariants}
                >
                    料金プラン
                </motion.h3>
                <motion.p 
                    className='text-lg font-normal text-center text-black opacity-60 pt-5'
                    variants={itemVariants}
                >
                    最適なプランをお選びください
                </motion.p>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 my-16 mx-5'>
                    {filteredData.map((item, index) => (
                        <motion.div 
                            className='pt-10 pb-28 pl-10 pr-10 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 relative cursor-pointer hover:bg-main group' 
                            key={index}
                            variants={cardVariants}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Image src={item.imgSrc} alt="star-image" width={154} height={154} className='absolute bottom-0 right-0 opacity-20' />
                            <motion.div
                                variants={itemVariants}
                            >
                                <h3 className='text-2xl font-bold text-black'>{item.heading}</h3>
                                <motion.p 
                                    className='text-lg font-normal text-black opacity-75 pt-4'
                                    variants={itemVariants}
                                >
                                    {item.description}
                                </motion.p>
                                <h2 className='text-5xl sm:text-65xl font-bold text-black pt-4'>
                                    ¥{item.price.toLocaleString()}
                                    <span className='text-xl font-normal text-black opacity-60'>{item.unit}</span>
                                </h2>
                                {item.sub && <p className='text-sm font-normal text-black opacity-60 pt-2'>{item.sub}</p>}
                                <motion.button 
                                    className="text-white text-xl font-medium py-6 px-12 rounded-full transition duration-150 ease-in-out bg-electricyellow hover:text-white hover:bg-yellow mt-8 flex items-center gap-2"
                                    variants={buttonVariants}
                                    whileHover="hover"
                                    whileTap="tap"
                                >
                                    {item.button}
                                    <ArrowRight className="w-5 h-5" />
                                </motion.button>
                                <div className='pt-8'>
                                    {item.options.map((option, i) => (
                                        <motion.div 
                                            key={i}
                                            className='flex items-center gap-2 pt-4'
                                            variants={itemVariants}
                                        >
                                            <Check className="w-6 h-6 text-electricyellow" />
                                            <p className='text-lg font-normal text-black opacity-60'>{option}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default Pricing;
