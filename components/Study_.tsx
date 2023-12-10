import Pill_ from "./Pill_";

interface Study_Props {}

const Study_ = ({}: Study_Props) => {
  return (
    <div
      className={`w-full h-[100vh] flex flex-col justify-center items-center relative`}
      id={`study`}
    >
      <img
        className={`w-full h-full object-cover`}
        src={`https://images.pexels.com/photos/4254898/pexels-photo-4254898.jpeg?auto=compress&cs=tinysrgb&w=1600`}
      />
      <div
        className={`w-full h-full absolute top-0 left-0 bg-white/20 backdrop-blur-md`}
      />
      <div
        className={`w-full h-full absolute top-0 left-0 flex flex-col justify-center items-center topFade2`}
      >
        <div
          className={`w-full h-full absolute top-0 left-0 flex flex-col justify-center items-center bottomFade2`}
        ></div>
        <InnerContent_/>
      </div>

      <div
        className={`w-[160px] h-full absolute left-0 flex flex-col justify-center items-center`}
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

// InnerContent_

interface InnerContent_Props {}

const InnerContent_ = ({}: InnerContent_Props) => {
  return (
    <div
      className={`lg:w-[90em] w-full h-full relative flex flex-row justify-center items-center text-black/70`}
    >
      <Pill_ />
      <Pill_ />
      <Pill_ />
    </div>
  );
};
