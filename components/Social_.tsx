import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Social_Props {
    
}
 
const Social_ = ({}:Social_Props) => {
    return ( 
        <div className={`w-[160px] min-h-screen absolute top-0 left-0 flex flex-col justify-center items-center pb-[50px] xl:opacity-100 opacity-0 xl:pointer-events-auto pointer-events-none z-1`}>
        <FontAwesomeIcon
            icon={faFacebook}
            className={`h-[27px] w-[27px] text-black/60 hover:text-orange-600 transition-all duration-[400ms] cursor-pointer my-[10px]`}
          />
          <FontAwesomeIcon
            icon={faTwitter}
            className={`h-[27px] w-[27px] text-black/60 hover:text-orange-600 transition-all duration-[400ms] cursor-pointer my-[10px]`}
          />
          <FontAwesomeIcon
            icon={faInstagram}
            className={`h-[27px] w-[27px] text-black/60 hover:text-orange-600 transition-all duration-[400ms] cursor-pointer my-[10px]`}
          />
        </div>
     );
}
 
export default Social_;