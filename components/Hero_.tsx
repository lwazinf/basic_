import BackPlate_ from "./BackPlate_";
import FrontPlate_ from "./FrontPlate_";

interface Hero_Props {}

const Hero_ = ({}: Hero_Props) => {
  return (
    <div className={`flex flex-col items-center justify-between`}>
      <BackPlate_ />
      <FrontPlate_ />
    </div>
  );
};

export default Hero_;
