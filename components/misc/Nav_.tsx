import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Nav_Props {}

const Nav_ = ({}: Nav_Props) => {
  return (
    <div
      className={`w-full h-[70px] fixed top-0 flex flex-row justify-center items-center md:bg-white/5 md:backdrop-blur-md z-3`}
    >
      <div
        className={`w-[200px] h-full hover:h-[120%] flex flex-row justify-center items-center hover:text-orange-200/80 text-white/80 transition-all duration-200`}
      >
          <div
          className={`bg-black/80 h-full px-4 flex flex-row justify-center items-end text-[20px] font-black cursor-default rounded-b-[2px] md:backdrop-blur-none backdrop-blur-md`}
        >
        <a href={`#hero`}>
          Brand
        </a>
        </div>
      </div>
      <Menu_ />
      <div
        className={`w-[200px] h-full flex flex-row justify-center items-center text-[20px] text-black font-black`}
      >
        <div
          className={`w-full min-h-full flex flex-row justify-center items-center xl:opacity-0 md:opacity-100 opacity-0 xl:pointer-events-none md:pointer-events-auto pointer-events-none`}
        >
          <FontAwesomeIcon
            icon={faFacebook}
            className={`h-[20px] w-[20px] text-black/60 hover:text-orange-600 transition-all duration-[400ms] cursor-pointer mx-[6px]`}
          />
          <FontAwesomeIcon
            icon={faTwitter}
            className={`h-[20px] w-[20px] text-black/60 hover:text-orange-600 transition-all duration-[400ms] cursor-pointer mx-[6px]`}
          />
          <FontAwesomeIcon
            icon={faInstagram}
            className={`h-[20px] w-[20px] text-black/60 hover:text-orange-600 transition-all duration-[400ms] cursor-pointer mx-[6px]`}
          />
        </div>
        <FontAwesomeIcon
          icon={faBars}
          className={`h-[100%] w-[20px] absolute top-0 text-black/60 hover:text-orange-600 transition-all duration-[400ms] cursor-pointer mx-[6px] xl:opacity-0 md:opacity-0 opacity-100 xl:pointer-events-none md:pointer-events-none pointer-events-auto`}
        />
      </div>
    </div>
  );
};

export default Nav_;

// ===================================== Menu_

interface Menu_Props {}

const Menu_ = ({}: Menu_Props) => {
  return (
    <div
      className={`w-full h-full flex flex-row justify-center items-center md:opacity-100 opacity-0 md:pointer-events-auto pointer-events-none`}
    >
      {/* <Link
            activeClass="active"
            // className="hero"
            to="services"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          > */}
      <a href={`#hero`}>
        <p
          className={`text-[14px] text-black/60 mx-4 hover:text-orange-600 hover:font-medium transition-all duration-200 cursor-pointer`}
        >
          Home
        </p>
      </a>
      {/* </Link> */}
      <a href={`#services`}>
        <p
          className={`text-[14px] text-black/60 mx-4 hover:text-orange-600 hover:font-medium transition-all duration-200 cursor-pointer`}
        >
          Services
        </p>
      </a>
      <a href={`#study`}>
        <p
          className={`text-[14px] text-black/60 mx-4 hover:text-orange-600 hover:font-medium transition-all duration-200 cursor-pointer`}
        >
          Case Studies
        </p>
      </a>
      <a href={`#cta`}>
        <p
          className={`text-[14px] text-black/60 mx-4 hover:text-orange-600 hover:font-medium transition-all duration-200 cursor-pointer`}
        >
          MOVE NOW
        </p>
      </a>
    </div>
  );
};
