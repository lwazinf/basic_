interface Content_Props {}

const Content_ = ({}: Content_Props) => {
  return (
    <div
      className={`w-full min-h-[20px] flex flex-col items-center justify-start`}
    >
      <div
        className={`w-full min-h-[500px] xl:px-[200px] px-[250px] flex flex-row justify-center items-end`}
      >
        <p
          className={`xl:text-[110px] text-[100px] text-black/80 font-black text-center leading-[.8] tracking-[-0.08em] _Bungee cursor-default`}
        >
          BRAND STATEMENT GOES HERE
        </p>
      </div>
      <div
        className={`w-full min-h-[80px] px-[400px] flex flex-row justify-center items-end`}
      >
        <p
          className={`text-[18px] text-black/50 text-center tracking-[-0.0em] leading-[1.05] cursor-default`}
        >
          Ea quis amet veniam ex est nisi nostrud. Irure ut nisi consequat nulla
          exercitation laboris ut elit consequat do. Qui sint sit ut elit ut.
        </p>
      </div>
    </div>
  );
};

export default Content_;
