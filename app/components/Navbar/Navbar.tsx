import { Disclosure } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Signdialog from "./Signdialog";
import Registerdialog from "./Registerdialog";
import Image from 'next/image'

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'Product', href: '#product', current: true },
    { name: 'Pricing', href: '#pricing', current: false },
    { name: 'Features', href: '#features', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Disclosure as="nav" className={`fixed w-full z-50 transition-all duration-300 ${
            isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}>
            <>
                <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
                            {/* LOGO */}
                            <div className="flex flex-shrink-0 items-center">
                                {/* モバイル用ロゴ */}
                                <div className="block lg:hidden">
                                    <video
                                        className="h-10 w-32"
                                        src={'/assets/logo/cococareer-logo.webm'}
                                        autoPlay
                                        muted
                                        playsInline
                                        onError={(e) => {
                                            const video = e.target as HTMLVideoElement;
                                            video.src = '/assets/logo/cococareer-logo.mp4';
                                            video.onerror = () => {
                                                video.style.display = 'none';
                                                const img = video.nextElementSibling as HTMLImageElement;
                                                if (img) img.style.display = 'block';
                                            };
                                        }}
                                    />
                                    <Image
                                        className="hidden h-10 w-32"
                                        src={'/assets/logo/cococareer-logo.png'}
                                        alt="cococareer-logo"
                                        width={128}
                                        height={40}
                                    />
                                </div>

                                {/* デスクトップ用ロゴ */}
                                <div className="hidden lg:block h-10 w-32">
                                    <video
                                        className="h-full w-full"
                                        src={'/assets/logo/cococareer-logo.webm'}
                                        autoPlay
                                        muted
                                        playsInline
                                        onError={(e) => {
                                            const video = e.target as HTMLVideoElement;
                                            video.src = '/assets/logo/cococareer-logo.mp4';
                                            video.onerror = () => {
                                                video.style.display = 'none';
                                                const img = video.nextElementSibling as HTMLImageElement;
                                                if (img) img.style.display = 'block';
                                            };
                                        }}
                                    />
                                    <Image
                                        className="hidden h-full w-full"
                                        src={'/assets/logo/cococareer-logo.png'}
                                        alt="cococareer-logo"
                                        width={128}
                                        height={40}
                                    />
                                </div>
                            </div>

                            {/* LINKS */}
                            <div className="hidden lg:block ml-16">
                                <div className="flex space-x-8">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current ? 'text-black' : 'text-gray-600',
                                                'px-3 py-2 text-base font-medium transition-colors duration-200 hover:text-black relative group'
                                            )}
                                            aria-current={item.href ? 'page' : undefined}
                                        >
                                            {item.name}
                                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* SIGNIN DIALOG */}
                        <Signdialog />

                        {/* REGISTER DIALOG */}
                        <Registerdialog />

                        {/* DRAWER FOR MOBILE VIEW */}
                        <div className='block lg:hidden'>
                            <Bars3Icon 
                                className="block h-6 w-6 text-gray-600 hover:text-black transition-colors duration-200" 
                                aria-hidden="true" 
                                onClick={() => setIsOpen(true)} 
                            />
                        </div>

                        {/* DRAWER LINKS DATA */}
                        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                            <Drawerdata />
                        </Drawer>
                    </div>
                </div>
            </>
        </Disclosure>
    )
}

export default Navbar;
