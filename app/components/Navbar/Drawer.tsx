import React, { ReactNode } from "react";
import { XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

interface DrawerProps {
    children: ReactNode;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const Drawer = ({ children, isOpen, setIsOpen }: DrawerProps) => {
    return (
        <main
            className={
                "fixed overflow-hidden z-50 inset-0 transform ease-in-out " +
                (isOpen
                    ? "transition-opacity opacity-100 duration-300"
                    : "transition-all delay-300 opacity-0 pointer-events-none")
            }
        >
            {/* オーバーレイ */}
            <div
                className={
                    "absolute inset-0 bg-black transition-opacity duration-300 " +
                    (isOpen ? "opacity-50" : "opacity-0")
                }
                onClick={() => setIsOpen(false)}
            />

            {/* ドロワー本体 */}
            <section
                className={
                    "w-80 max-w-lg left-0 absolute bg-white h-full shadow-2xl transition-transform duration-300 ease-in-out " +
                    (isOpen ? "translate-x-0" : "-translate-x-full")
                }
            >
                <article className="relative w-full h-full flex flex-col">
                    {/* ヘッダー */}
                    <header className="p-6 flex items-center justify-between border-b border-gray-100">
                        <Image
                            className="w-32 transition-transform duration-200 hover:scale-105 cursor-pointer"
                            src={"/assets/logo/cococareer-logo.webp"}
                            alt="coco career logo"
                            width={128}
                            height={40}
                            onClick={() => setIsOpen(false)}
                        />
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-2 rounded-full hover:bg-gray-100 transition-all duration-200 hover:rotate-90"
                            aria-label="メニューを閉じる"
                        >
                            <XMarkIcon className="h-6 w-6 text-gray-600" />
                        </button>
                    </header>

                    {/* コンテンツ */}
                    <div className="flex-1 overflow-y-auto p-6">
                        {children}
                    </div>

                    {/* フッター */}
                    <footer className="p-6 border-t border-gray-100">
                        <div className="text-sm text-gray-500 text-center">
                            <div className="transition-colors duration-200 hover:text-gray-700">
                                © 2025 cocomotion/cococareer. <br />
                                All rights reserved.
                            </div>
                        </div>
                    </footer>
                </article>
            </section>
        </main>
    );
}

export default Drawer;
