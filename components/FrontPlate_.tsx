import Content_ from "./Content_";
import Nav_ from "./Nav_";

interface FrontPlate_Props {}

const FrontPlate_ = ({}: FrontPlate_Props) => {
  return (
    <div
      className={`w-full overflow-hidden min-h-[20px] absolute top-0 rounded-[4px] flex flex-col items-center justify-start`}
    >
      <Content_ />
    </div>
  );
};

export default FrontPlate_;
