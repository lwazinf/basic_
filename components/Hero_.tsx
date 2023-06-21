'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagramSquare, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { motion, useScroll, useTransform } from "framer-motion";

interface Hero_Props {}

const Hero_ = ({}: Hero_Props) => {
  // let { scrollYProgress } = useScroll()
  // let y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  return (
    <div className={`flex flex-col items-center justify-between`}>
      <BackPlate_ />
      <FrontPlate_ />
      <Social_ />
    </div>
  );
};

export default Hero_;

// ========== misc

interface Social_Props {}

const Social_ = ({}:Social_Props) => {
  return ( 
      <div className={`w-[160px] min-h-screen absolute top-0 left-0 flex flex-col justify-center items-center pb-[50px] xl:opacity-100 opacity-0 xl:pointer-events-auto pointer-events-none z-1`}>
      <FontAwesomeIcon
          icon={faFacebook}
          className={`h-[27px] w-[27px] text-black/60 hover:text-orange-600 transition-all duration-[400ms] cursor-pointer my-[10px]`}
        />
        <FontAwesomeIcon
          icon={faTwitter}
          className={`h-[27px] w-[27px] text-black/60 hover:text-orange-600 transition-all duration-[400ms] cursor-pointer my-[10px]`}
        />
        <FontAwesomeIcon
          icon={faInstagramSquare}
          className={`h-[27px] w-[27px] text-black/60 hover:text-orange-600 transition-all duration-[400ms] cursor-pointer my-[10px]`}
        />
      </div>
   );
}

// ===============

interface FrontPlate_Props {}

const FrontPlate_ = ({}: FrontPlate_Props) => {
  return (
    <div
      className={`w-full overflow-hidden min-h-[20px] absolute top-0 rounded-[4px] flex flex-col items-center justify-start`}
    >
      <div
      className={`w-[90em] min-h-[20px] flex flex-col items-center justify-start`}
    >
      <div
        className={`w-full lg:min-h-[500px] min-h-[350px] xl:px-[200px] lg:px-[250px] px-[350px] flex flex-row justify-center items-end`}
      >
        <p
          className={`xl:text-[110px] lg:text-[100px] text-[70px] text-black/80 font-black text-center leading-[.8] tracking-[-0.08em] _Bungee cursor-default`}
          id={`section_`}
        >
          BRAND <mark className="rounded-[2px]">STATEMENT </mark>GOES HERE
        </p>
      </div>
      <div
        className={`lg:w-full w-[500px] lg:mt-0 mt-2 lg:min-h-[80px] min-h-[80px] lg:px-[400px]  flex flex-row justify-center items-end `}
      >
        <p
          className={`lg:text-[16px] text-[15px] mb-[30px] text-black/50 text-center tracking-[-0.0em] leading-[1.05] cursor-default italic`}
        >
          Ea quis amet veniam ex est nisi nostrud. Irure ut nisi consequat nulla
          exercitation laboris ut elit consequat do. Qui sint sit ut elit ut.
        </p>
      </div>
      <a href={`#cta`}>
        <div
          className={`text-white/80 hover:text-white/100 min-h-2 min-w-2 rounded-[3px] bg-orange-600/80 hover:bg-orange-600 transition-all hover:duration-1000 duration-200 p-2 hover:pl-1 ml-[410px] hover:ml-[414px] cursor-pointer flex flex-row justify-center items-center relative`}
        >
          <div className={`w-[50px] mr-2 h-[2px]`} />
          <p className={`text-[15px] font-black`}>BOOK NOW</p>
        </div>
      </a>
    </div>
    </div>
  );
};

// ==============

interface BackPlate_Props {}

const BackPlate_ = ({}: BackPlate_Props) => {
  return (
    <div className={`flex flex-col items-center justify-between`}>
      <div className={`w-full 3xl:h-[0px] h-[350px] bg-[#f0f1f3]`} />
      <motion.div
    // style={{ y }}
      className={`w-full 2xl:min-h-screen min-h-[20px] flex flex-col justify-end items-center relative overflow-hidden`}
    >
      <img
        alt={`.hero`}
        src={`https://images.pexels.com/photos/1437493/pexels-photo-1437493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`}
        className={`h-full object-cover`}
      />
      <div className={`w-full min-h-screen absolute bottom-0 bottomFade`} />
      <div className={`w-full min-h-screen absolute top-0 topFade 3xl:opacity-0 opacity-100`} />
    </motion.div>
    </div>
  );
};
