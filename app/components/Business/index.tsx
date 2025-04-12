import Image from 'next/image';
import Link from 'next/link';

const Business = () => {

    return (
        <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">

            <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1'>

                <div className='col-span-6 flex flex-col justify-center'>
                    <h2 className='text-midnightyellow text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-143'>「超自己分析」を行なった学生コミュニティ</h2>
                        <h3 className='text-black text-lg font-normal text-center lg:text-start lh-173 opacity-75 pt-3'>コミュニティのメンバーは、<br />
                        自己分析を通じて自分の価値観や強みを明確にし、<br />
                    企業との価値観の共有を促進することで、<br />
                    より適切な進路選択やキャリア形成をサポートします。</h3>
                    <Link href={'/'} className="text-electricyellow text-lg font-medium flex gap-2 pt-4 mx-auto lg:mx-0">
                        Learn more <Image src="/assets/people/arrow-right.svg" alt="arrow-right" width={24} height={24} />
                    </Link>
                </div>

                <div className='col-span-6 flex justify-center mt-10 lg:mt-0'>
                    <Image src="/assets/business/placeholder.jpeg" alt="business" width={1000} height={805} />
                </div>

            </div>
        </div>

    )
}

export default Business;
