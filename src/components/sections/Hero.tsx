import React from "react";
import Image from "@/components/ui/Image";
import { Download } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
    return (
        <section className="relative w-full pt-12 md:pt-24 lg:pt-32">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-20 -left-20 w-[400px] h-[400px] bg-brand-main/20 rounded-full blur-[120px]" />
                <div className="absolute top-40 right-10 w-[500px] h-[500px] bg-brand-light/10 rounded-full blur-[150px]" />
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                {/* ฝั่งซ้าย: ข้อความ */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col text-center lg:text-left order-2 lg:order-1 px-4 lg:px-8"
                >
                    <h1 className="font-display text-6xl md:text-8xl lg:text-[7.5rem] font-black leading-[0.9] tracking-tighter text-text-main mb-6 uppercase">
                        EKARIN <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-main to-brand-light">SOITHONGSUK</span>
                    </h1>

                    <p className="text-lg md:text-xl text-text-muted font-medium max-w-lg mb-10 leading-relaxed mx-auto lg:mx-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ex sed quaerat non modi iure et quae sit numquam at.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                        {/* เปลี่ยนเป็นปุ่ม Download CV */}
                        <a
                            href="/path-to-your-cv.pdf"
                            download
                            className="rounded-full bg-brand-main px-8 py-4 text-sm font-bold tracking-widest text-white transition-all hover:scale-105 hover:bg-brand-dark shadow-[0_0_30px_rgba(163,120,181,0.4)] uppercase flex items-center gap-2"
                        >
                            Download CV <Download className="w-4 h-4" />
                        </a>
                        <a
                            href="#portfolio"
                            className="rounded-full border border-brand-main/30 bg-card/10 backdrop-blur-md px-8 py-4 text-sm font-bold tracking-widest text-text-main transition-all hover:bg-brand-main/10 hover:border-brand-main/50 uppercase"
                        >
                            View Projects
                        </a>
                    </div>
                </motion.div>

                {/* ฝั่งขวา: รูปภาพ */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 0.6 }}
                    className="relative order-1 lg:order-2 flex justify-end items-center h-[400px] sm:h-[500px] lg:h-[700px] w-full pr-8 lg:pr-16"
                >
                    <div className="absolute w-[70%] h-[70%] bg-gradient-to-tr from-brand-main/40 to-brand-light/20 rounded-full blur-[80px] animate-pulse-slow" />
                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                        className="relative w-full h-full max-w-[500px] lg:max-w-none drop-shadow-[0_20px_50px_rgba(163,120,181,0.3)]"
                    >
                        <Image
                            src="https://plus.unsplash.com/premium_photo-1731765064003-303e6aee9749?q=80&w=1972&auto=format&fit=crop"
                            alt="Ekarin Profile"
                            fill
                            className="object-contain object-bottom"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}