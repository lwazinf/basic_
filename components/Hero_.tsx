'use client';

import BackPlate_ from "./BackPlate_";
import FrontPlate_ from "./FrontPlate_";
import Social_ from "./Social_";
import { motion, useScroll, useTransform } from "framer-motion";

interface Hero_Props {}

const Hero_ = ({}: Hero_Props) => {
  // let { scrollYProgress } = useScroll()
  // let y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  return (
    <div className={`flex flex-col items-center justify-between`}>
      <BackPlate_ />
      {/* <motion.div style={{ y }} className={`w-full min-h-[20px] absolute top-0 flex flex-col items-center justify-center`}> */}
      <FrontPlate_ />
      {/* </motion.div> */}
      <Social_ />
    </div>
  );
};

export default Hero_;
