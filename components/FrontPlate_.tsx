import Content_ from "./Content_";
import Nav_ from "./Nav_";

interface FrontPlate_Props {}

const FrontPlate_ = ({}: FrontPlate_Props) => {
  return (
    <div
      className={`w-[90em] min-h-[20px] absolute top-0 rounded-[4px] flex flex-col items-center justify-start`}
    >
      <Nav_ />
      <Content_ />
    </div>
  );
};

export default FrontPlate_;
