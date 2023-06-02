import HeroVisuals_ from "./HeroVisuals_";
import Nav_ from "./Nav_";
import Social_ from "./Social_";

interface BackPlate_Props {}

const BackPlate_ = ({}: BackPlate_Props) => {
  return (
    <div className={`flex flex-col items-center justify-between`}>
      <div className={`w-full 3xl:h-[0px] h-[350px] bg-[#f0f1f3]`} />
      <HeroVisuals_ />
    </div>
  );
};

export default BackPlate_;
