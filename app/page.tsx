"use client";

import CTA_ from "@/components/CTA_";
import Footer_ from "@/components/misc/Footer_";
import Hero_ from "@/components/Hero_";
import Nav_ from "@/components/misc/Nav_";
import Services_ from "@/components/Services_";
import Study_ from "@/components/Study_";
import { motion, useScroll, useTransform } from "framer-motion";
import { RecoilRoot } from "recoil";

export default function Home() {
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  return (
    <RecoilRoot>
      <main
        className="flex flex-col items-center justify-between bg-[#d9dadc]"
        id={`hero`}
      >
        <motion.div style={{ y }} className={``}>
          <Hero_ />
        </motion.div>
        <div
          className={`w-full min-h-[100vh] flex flex-col justify-start items-center`}
        >
          <Services_ />
          <Study_ />
          <CTA_ />
        </div>
      </main>
    </RecoilRoot>
  );
}
