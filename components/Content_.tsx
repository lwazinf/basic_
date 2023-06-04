import { useEffect } from "react";

interface Content_Props {}

const Content_ = ({}: Content_Props) => {
  return (
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
        className={`w-full lg:min-h-[80px] min-h-[80px] lg:px-[400px]  flex flex-row justify-center items-end `}
      >
        <p
          className={`lg:text-[16px] text-[15px] mb-[30px] text-black/50 text-center tracking-[-0.0em] leading-[1.05] cursor-default italic`}
        >
          Ea quis amet veniam ex est nisi nostrud. Irure ut nisi consequat nulla
          exercitation laboris ut elit consequat do. Qui sint sit ut elit ut.
        </p>
      </div>
      <div
        className={`text-white/80 hover:text-white/100 min-h-2 min-w-2 rounded-[3px] bg-orange-600/80 hover:bg-orange-600 transition-all hover:duration-1000 duration-200 p-2 hover:pl-1 ml-[410px] hover:ml-[414px] cursor-pointer flex flex-row justify-center items-center relative`}
      >
        <div className={`w-[50px] mr-2 h-[2px]`} />
        <p className={`text-[18px] font-black`}>Book a call</p>
      </div>
    </div>
  );
};

export default Content_;
