import Pill_ from "./Pill_";

interface Study_Props {}

const Study_ = ({}: Study_Props) => {
  return (
    <div
      className={`w-full h-[100vh] flex flex-col justify-center items-center relative`}
      id={`study`}
    >
      <img
        className={`w-full h-full object-cover`}
        src={`https://images.pexels.com/photos/4254898/pexels-photo-4254898.jpeg?auto=compress&cs=tinysrgb&w=1600`}
      />
      <div
        className={`w-full h-full absolute top-0 left-0 bg-white/20 backdrop-blur-md`}
      />
      <div
        className={`w-full h-full absolute top-0 left-0 flex flex-col justify-center items-center topFade2`}
      >
        <div
          className={`w-full h-full absolute top-0 left-0 flex flex-col justify-center items-center bottomFade2`}
        ></div>
        <InnerContent_/>
      </div>

      <div
        className={`w-[160px] h-full absolute left-0 flex flex-col justify-center items-center`}
      >
        <p
          className={`xl:text-[30px] lg:text-[30px] text-[30px] text-black/20 text-center leading-[.8] tracking-[-0.0em] _Bungee cursor-default -rotate-90 opacity-0 lg:opacity-100`}
        >
          CASE STUDY
        </p>
      </div>
    </div>
  );
};

export default Study_;

// InnerContent_

interface InnerContent_Props {}

const InnerContent_ = ({}: InnerContent_Props) => {
  return (
    <div
      className={`lg:w-[90em] w-full h-full relative flex flex-row justify-center items-center text-black/70`}
    >
      <Pill_ content_={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a laoreet erat. Proin enim magna, varius a ante et, tristique fringilla felis. Proin nec gravida mi. In semper convallis nisl, ac ultrices ante bibendum sit amet. Vivamus ac laoreet justo. Donec hendrerit augue at leo mollis rhoncus. Praesent ut ipsum et enim aliquet laoreet.`} topic_={`CONTENT`} src_={`https://images.pexels.com/photos/6615190/pexels-photo-6615190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`} />
      <Pill_ content_={`In interdum ornare lorem, sed consectetur tortor convallis eu. Morbi nisl mi, venenatis sed malesuada nec, luctus nec nisi. Vivamus lacinia vulputate tortor vel accumsan. Suspendisse potenti. Cras a augue faucibus, ultricies purus eu, congue ante. Vestibulum porta pharetra faucibus.`} topic_={`CONTENT`} src_={`https://images.pexels.com/photos/1116035/pexels-photo-1116035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`} />
      <Pill_ content_={`Quisque ligula purus, mattis non consectetur in, malesuada ut orci. Sed fringilla erat mattis, mattis magna aliquam, sollicitudin neque. Ut elementum turpis vel tempus mattis. Morbi ullamcorper eros ex, vitae ultricies magna scelerisque vitae. Maecenas nibh libero, rutrum eget rutrum pretium, finibus eget quam. Pellentesque vitae ligula ullamcorper, condimentum urna eu, efficitur erat.`} topic_={`CONTENT`} src_={`https://images.pexels.com/photos/2100681/pexels-photo-2100681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`} />
    </div>
  );
};
