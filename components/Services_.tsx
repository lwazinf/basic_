import Polygon_ from "./Polygon_";

interface Services_Props {}

const Services_ = ({}: Services_Props) => {
  return (
    <div
      className={`w-full h-[70vh] bg-[#d9dadc] flex flex-col justify-center items-center relative`}
    >
      <div
        className={`w-full h-full flex flex-row justify-center items-center relative bottom-[0px]`}
      >
        <Polygon_ image_="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        <Polygon_ image_="https://images.pexels.com/photos/2678104/pexels-photo-2678104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        <Polygon_ image_="https://images.pexels.com/photos/5079402/pexels-photo-5079402.jpeg?auto=compress&cs=tinysrgb&w=1600" />
      </div>
      <div
        className={`w-full h-full flex flex-row justify-center items-center relative bottom-[90px]`}
      >
        <Polygon_ image_="https://images.pexels.com/photos/4792480/pexels-photo-4792480.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        <Polygon_ image_="https://images.pexels.com/photos/1336211/pexels-photo-1336211.jpeg?auto=compress&cs=tinysrgb&w=1600" />
      </div>
      <div
        className={`w-[160px] h-full absolute top-[-40px] left-0 flex flex-col justify-center items-center`}
      >
        <p
          className={`xl:text-[30px] lg:text-[30px] text-[30px] text-black/20 text-center leading-[.8] tracking-[-0.0em] _Bungee cursor-default -rotate-90 opacity-0 lg:opacity-100`}
        >
          SERVICES
        </p>
      </div>
    </div>
  );
};

export default Services_;
