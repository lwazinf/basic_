"use client";

import Footer_ from "@/components/Footer_";
import Hero_ from "@/components/Hero_";
import Nav_ from "@/components/Nav_";
import Services_ from "@/components/Services_";
import Study_ from "@/components/Study_";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  return (
    <main className="flex flex-col items-center justify-between bg-[#d9dadc]" id={`hero`}>
      <motion.div style={{ y }} className={``}>
        <Hero_ />
      </motion.div>
      <div
        className={`w-full min-h-[100vh] flex flex-col justify-start items-center`}
      >
        <Services_/>
        <Study_ />
        <Footer_ />
      </div>
      <Nav_ />
    </main>
  );
}
