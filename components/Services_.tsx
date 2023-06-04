import {
  Element,
  animateScroll as scroll,
} from "react-scroll";
import Polygon_ from "./Polygon_";

interface Services_Props {}

const Services_ = ({}: Services_Props) => {
  return (
    <div
      className={`w-full h-[70vh] flex flex-col justify-center items-center relative`}
    >
      {/* <Element name="services" className="element"></Element> */}
      <div
        className={`w-[90em] h-full flex flex-row justify-center items-center relative bottom-[0px]`}
      >
        {
          [{url: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", data: 'Supervision'}, {url: "https://images.pexels.com/photos/2678104/pexels-photo-2678104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", data: 'Road Works'}, {url: "https://images.pexels.com/photos/5079402/pexels-photo-5079402.jpeg?auto=compress&cs=tinysrgb&w=1600", data: 'Drainage'}, ].map((obj_) => {
            return (
              <Polygon_ image_={obj_.url} key={obj_.data} data_={obj_.data}/>
            )
          })
        }
        
      </div>
      <div
        className={`w-full h-full flex flex-row justify-center items-center relative xl:bottom-[90px] bottom-[127px]`}
      >
        {
          [{url: "https://images.pexels.com/photos/4792480/pexels-photo-4792480.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", data: 'Blueprints'}, {url: "https://images.pexels.com/photos/1336211/pexels-photo-1336211.jpeg?auto=compress&cs=tinysrgb&w=1600", data: 'Drone Footage'}].map((obj_) => {
            return (
              <Polygon_ image_={obj_.url} key={obj_.data} data_={obj_.data}/>
            )
          })
        }
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
