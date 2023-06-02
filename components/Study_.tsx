import Polygon_ from "./Polygon_";

interface Study_Props {}

const Study_ = ({}: Study_Props) => {
  return (
    <div
      className={`w-full h-[100vh] flex flex-col justify-center items-center relative`}
    >
      <img className={`w-full h-full object-cover`} src={`https://images.pexels.com/photos/4254898/pexels-photo-4254898.jpeg?auto=compress&cs=tinysrgb&w=1600`}/>
      <div className={`w-full h-full absolute top-0 left-0 bg-white/5 backdrop-blur-md`} />
      <div className={`w-full h-full absolute left-0 flex flex-col justify-center items-center  topFade2`}>
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
