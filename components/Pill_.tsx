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

interface Pill_Props {}

const Pill_ = ({}: Pill_Props) => {
  return (
    <div
      className={`w-[350px] h-[550px] rounded-[6px] bg-white/80 hover:bg-white transition-all duration-200 shadow-sm m-2 cursor-pointer hover:mb-8`}
    >
     
    </div>
  );
};

export default Pill_;