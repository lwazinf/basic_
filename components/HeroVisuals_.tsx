import Social_ from "./Social_";

interface HeroVisuals_Props {}

const HeroVisuals_ = ({}: HeroVisuals_Props) => {
  return (
    <div
      className={`w-full 2xl:min-h-screen min-h-[20px] flex flex-col justify-end items-center relative overflow-hidden`}
    >
      <img
        alt={`.hero`}
        src={`https://images.pexels.com/photos/1437493/pexels-photo-1437493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`}
        className={`h-full object-cover`}
      />
      <div className={`w-full min-h-screen absolute bottom-0 bottomFade`} />
      <div className={`w-full min-h-screen absolute top-0 topFade 3xl:opacity-0 opacity-100`} />
    </div>
  );
};

export default HeroVisuals_;
