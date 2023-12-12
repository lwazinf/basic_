import { useRecoilState } from "recoil";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faBolt,
  faLocationCrosshairs,
  faDroplet,
  faHeart,
  faInfoCircle,
  faTimes,
  faTowerBroadcast,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

interface Pill_Props {
  src_: string;
  topic_: string;
  content_: string
}

const Pill_ = ({ src_, content_, topic_ }: Pill_Props) => {
  const [focus_, setFocus_] = useState(true)
  return (
    <div
      className={`w-[350px] h-[550px] rounded-[6px] bg-white/80 hover:bg-white transition-all duration-[400ms] hover:duration-75 shadow-sm m-2 cursor-pointer relative overflow-hidden opacity-80 hover:opacity-100`}
    >
      <img
        src={`${src_}`}
        className={`w-full h-full object-cover opacity-80 hover:opacity-100 transition-all duration-100`}
      />
      <div
        className={`w-full h-full object-cover bg-white/5 backdrop-blur-lg transition-all duration-100 absolute top-0`}
      />
      <img
        src={`${src_}`}
        className={`w-full h-full object-cover transition-all duration-100 scale-110 ${ focus_ ? 'opacity-100' : 'opacity-0'} absolute top-0`}
      />
      <div
        className={`w-full h-full object-cover flex flex-col justify-start items-center absolute top-0 pt-16 hover:pt-8 transition-all duration-200 ${ focus_ ? 'opacity-0' : 'opacity-100'}`}
        onMouseEnter={() => {
          setFocus_(false)
        }}
        onMouseLeave={() => {
          setFocus_(true)
        }}
      >
        <p className={`text-[40px] font-black opacity-50`}>{`${topic_}`}</p>
        <div className={`text-[12px] font-normal italic opacity-50 w-full px-6 text-justify`}>{`${content_}`}</div>
      </div>
    </div>
  );
};

export default Pill_;
