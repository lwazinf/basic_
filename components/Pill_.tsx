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

interface Pill_Props {
    src_: string
}

const Pill_ = ({src_}: Pill_Props) => {
  return (
    <div
      className={`w-[350px] h-[550px] rounded-[6px] bg-white/80 hover:bg-white transition-all duration-[400ms] hover:duration-75 shadow-sm m-2 cursor-pointer relative overflow-hidden`}
    >
     <img src={`${src_}`} className={`w-full h-full object-cover opacity-80 hover:opacity-100 transition-all duration-100`}/>
    </div>
  );
};

export default Pill_;