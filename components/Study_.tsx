import Polygon_ from "./Polygon_";

interface Study_Props {}

const Study_ = ({}: Study_Props) => {
  return (
    <div
      className={`w-full h-[100vh] bg-[#d9dadc] flex flex-col justify-center items-center relative`}
    >
      <div
        className={`w-[160px] h-full absolute top-[-40px] left-0 flex flex-col justify-center items-center`}
      >
        <p
          className={`xl:text-[30px] lg:text-[30px] text-[30px] text-black/20 text-center leading-[.8] tracking-[-0.0em] _Bungee cursor-default -rotate-90 opacity-0 lg:opacity-100`}
        >
          CASE STUDY
        </p>
      </div>
    </div>
  );
};

export default Study_;
