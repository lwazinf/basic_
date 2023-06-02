import Image from "next/image";
import { Fragment } from "react";

interface PolygonProps {
  image_: string;
  data_: string;
}

const Polygon = ({ image_, data_ }: PolygonProps) => {
  return (
    <div className="flex flex-col justify-center items-center xl:w-[308px] xl:h-[340px] w-[228px] h-[260px] mx-[-12px] relative mix-blend-multiply cursor-pointer">
      <img
        className="w-full h-full object-cover absolute top-0 left-0"
        src={image_}
        alt="Your Image"
      />
      <div
        className={`w-full h-full bg-black/5 backdrop-blur-sm absolute top-0 flex flex-col justify-center items-center`}
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
        />
      </div>
    </div>
  );
};

export default Polygon;

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
