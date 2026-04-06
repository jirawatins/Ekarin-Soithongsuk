import React from "react";
import { Layers, Play, Video } from "lucide-react";
// เอา import Showreel ออกได้เลยถ้าไม่ได้ใช้ที่อื่นแล้ว
import { motion } from "motion/react";

export default function Expertise() {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-2 md:px-0 mt-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-2 group relative rounded-[2.5rem] overflow-hidden border border-brand-main/20 shadow-2xl bg-black min-h-[400px] md:min-h-[500px] flex"
            >
                <div className="absolute inset-0 opacity-70 group-hover:opacity-100 transition-opacity duration-700">
                    {/* เปลี่ยนตรงนี้เป็นแท็ก video และดึงไฟล์จาก public */}
                    <video
                        src="/SLRfinal.avi"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

                <div className="relative z-10 p-8 md:p-12 flex flex-col justify-end w-full h-full mt-auto pointer-events-none">
                    <div className="flex items-center gap-4 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-brand-main/90 text-white backdrop-blur-md shadow-[0_0_30px_rgba(163,120,181,0.6)]">
                            <Play className="w-6 h-6 ml-1" fill="currentColor" />
                        </div>
                        <div>
                            <span className="text-brand-main font-black tracking-widest text-xs uppercase block mb-1">Demo</span>
                            <h3 className="text-white font-display text-3xl md:text-4xl font-black uppercase tracking-tight">Final Blocking</h3>
                        </div>
                    </div>
                    <p className="text-white/70 max-w-md font-medium text-sm md:text-base transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                        ตัวอย่างผลงานแอนิเมชัน 3 มิติ แสดงขั้นตอนการทำ Blocking เพื่อกำหนดท่าทางและการเคลื่อนไหว
                    </p>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="lg:col-span-1 rounded-[2.5rem] border border-brand-main/20 bg-card/40 backdrop-blur-xl p-8 flex flex-col justify-between shadow-2xl"
            >
                <div>
                    <h3 className="font-display text-2xl font-black text-text-main uppercase mb-6 tracking-tighter">Core Expertise</h3>
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-2xl bg-brand-main/10 text-brand-main border border-brand-main/20">
                                <Layers className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-text-main font-bold mb-1">3D Modeling</h4>
                                <p className="text-sm text-text-muted">High-poly & low-poly assets optimized for game engines.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-2xl bg-brand-main/10 text-brand-main border border-brand-main/20">
                                <Video className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-text-main font-bold mb-1">Cinematic Animation</h4>
                                <p className="text-sm text-text-muted">Rigging, keyframing, and motion capture clean-up.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}