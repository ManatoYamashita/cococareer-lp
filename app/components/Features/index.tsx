import Image from "next/image";
import Link from 'next/link';
import { Brain, Users, Sparkles } from 'lucide-react';

interface datatype {
    heading: string;
    paragraph: string;
    icon: React.ReactNode;
    image: string;
}

const Aboutdata: datatype[] = [
    {
        heading: "超自己分析",
        paragraph: '目標の不透明さに悩む大学生を\n支援する取り組みです。\n自己分析を通じて自分の価値観や\n強みを明確にし、\n企業との価値観の共有を促進することで、\nより適切な進路選択や\nキャリア形成をサポート',
        icon: <Brain className="w-8 h-8 text-electricyellow" />,
        image: "/assets/features/placeholder.jpeg"
    },
    {
        heading: "共創企画支援",
        paragraph: '意欲あふれる学生に対して\n長期インターンの紹介を行なう。\ncoco careerの定期イベントや\n企業とのタイアップイベントなど\nゲストやコンテンツを用意し、\n様々な機会提供を行う。',
        icon: <Users className="w-8 h-8 text-electricyellow" />,
        image: "/assets/features/placeholder.jpeg"
    },
    {
        heading: "AIマッチング",
        paragraph: 'AIを活用したマッチングシステムを\n構築。\n学生の自己分析結果や\n求人企業の要件をもとに、\n最適なインターン先を提案する。',
        icon: <Sparkles className="w-8 h-8 text-electricyellow" />,
        image: "/assets/features/placeholder.jpeg"
    }
]

const Features = () => {
    return (
        <div className="relative bg-gradient-to-b from-babyyellow to-white" id="features">
            {/* 装飾用の背景要素 */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-electricyellow/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-electricyellow/10 rounded-full blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-2xl py-20 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="text-center mb-16">
                    <h3 className="text-4xl sm:text-5xl font-semibold text-black leading-tight">
                        大学生と新たな可能性を<br />
                        生み出していく
                    </h3>
                    <div className="mt-6">
                        <div className="inline-block w-24 h-1 bg-electricyellow rounded-full" />
                    </div>
                </div>

                <h5 className="text-black opacity-60 text-lg font-normal text-center leading-relaxed max-w-3xl mx-auto">
                    Coco careerは採用支援、イベント企画、<br />
                    長期インターン、送客支援、アンケート調査など<br />
                    企業と学生の繋がりを深める<br />
                    様々な取り組みを行なっています。
                </h5>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-8 lg:gap-x-8 mt-16'>
                    {Aboutdata.map((item, i) => (
                        <div key={i} className='group bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden featureShadow hover:transform hover:scale-105 transition-all duration-300'>
                            <div className="relative h-48 w-full overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.heading}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                            </div>
                            <div className="p-8">
                                <div className="flex items-center justify-center w-16 h-16 bg-electricyellow/10 rounded-xl mb-6 group-hover:bg-electricyellow/20 transition-colors duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-semibold text-black mb-4 group-hover:text-electricyellow transition-colors duration-300">{item.heading}</h3>
                                <h4 className='text-lg font-normal text-black opacity-50 leading-relaxed whitespace-pre-line'>{item.paragraph}</h4>
                                <Link href={'/'} className="text-electricyellow text-lg font-medium flex items-center gap-2 pt-6 pb-2 hover:opacity-80 transition-opacity duration-200">
                                    詳しく見る
                                    <Image src="/assets/people/arrow-right.svg" alt="arrow-right" width={20} height={20} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Features;
