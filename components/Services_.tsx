import { Element, animateScroll as scroll } from "react-scroll";
import Image from "next/image";
import { Fragment } from "react";

interface Services_Props {}

const Services_ = ({}: Services_Props) => {
  return (
    <div
      className={`w-full h-[70vh] flex flex-col justify-center items-center relative mb-[100px]`}
    >
      {/* <Element name="services" className="element"></Element> */}

      <div
        className={`lg:w-[90em] w-full h-full flex flex-row justify-center items-center relative bottom-[0px]`}
      >
        {[
          {
            url: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            data: "Supervision",
          },
          {
            url: "https://images.pexels.com/photos/2678104/pexels-photo-2678104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            data: "Road Works",
          },
          {
            url: "https://images.pexels.com/photos/5079402/pexels-photo-5079402.jpeg?auto=compress&cs=tinysrgb&w=1600",
            data: "Drainage",
          },
        ].map((obj_) => {
          return (
            <Polygon image_={obj_.url} key={obj_.data} data_={obj_.data} />
          );
        })}
      </div>
      <div
        className={`lg:w-[90em] w-full h-full flex flex-row justify-center items-center relative xl:bottom-[90px] bottom-[127px]`}
      >
        {[
          {
            url: "https://images.pexels.com/photos/4792480/pexels-photo-4792480.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            data: "Blueprints",
          },
          {
            url: "https://images.pexels.com/photos/1336211/pexels-photo-1336211.jpeg?auto=compress&cs=tinysrgb&w=1600",
            data: "Drone Footage",
          },
        ].map((obj_) => {
          return (
            <Polygon image_={obj_.url} key={obj_.data} data_={obj_.data} />
          );
        })}
        {/* <div
          className={`lg:text-[16px] text-[15px] mb-[30px] text-black/40 text-left tracking-[-0.0em] leading-[1.05] cursor-default italic absolute right-[50px] w-[350px] mt-8`}
        >
          <p className={`text-[25px] font-black _Bungee text-black/60 mb-3`}>
            Non aliquip
          </p>{" "}
          laboris aute excepteur excepteur laborum aliqua. Do minim do do
          proident enim et reprehenderit tempor quis. Et voluptate aliquip
          officia in et excepteur ad dolor sit consectetur. Aute ut
          reprehenderit et commodo proident deserunt do quis dolor Lorem ea.
        </div> */}
      </div>

      <div
        className={`w-[160px] h-full absolute top-[-40px] left-0 flex flex-col justify-center items-center`}
      >
        <div
          className={`w-0 h-0 absolute top-[-125px] left-0 flex flex-col justify-center items-center`}
          id={`services`}
        />
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

// ============= Polygons

interface PolygonProps {
  image_: string;
  data_: string;
}

const Polygon = ({ image_, data_ }: PolygonProps) => {
  return (
    <div className="flex flex-col justify-center items-center xl:w-[308px] xl:h-[340px] w-[228px] h-[260px] mx-[-12px] relative mix-blend-multiply cursor-pointer">
      <img
        className="w-full h-full object-cover absolute top-0 left-0  pointer-events-none"
        src={image_}
        alt="Your Image"
      />
      <div
        className={`w-full h-full bg-black/5 backdrop-blur-sm absolute top-0 flex flex-col justify-center items-center  pointer-events-none`}
      >
        <p className={`text-center text-[18px] text-white/80 font-black`}>
        {
          data_
        }
      </p>
      </div>
      <img
        className="w-full h-full object-cover absolute top-0 left-0 hover:opacity-0 opacity-100 transition-all duration-200"
        src={image_}
        alt="Your Image"
      />
      
      <div
        className={`w-full h-full bg-white absolute top-0 left-0 flex flex-col justify-center items-center mix-blend-screen pointer-events-none`}
      >
        <Image
          src="/assets/svg/Hex_.svg"
          alt="Hexagon"
          layout="fill"
          objectFit="contain"
          className={`pointer-events-none`}
        />
      </div>
    </div>
  );
};


interface ShapeProps {}

const Shape = ({}: ShapeProps) => {
  return (
    <Fragment>
      <div className="topPol mask"></div>
      <div className="midPol mask"></div>
      <div className="bottomPol mask"></div>
    </Fragment>
  );
};

