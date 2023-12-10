interface Quote_Props {}

const Quote_ = ({}: Quote_Props) => {
  return (
    <div
      className={`w-full h-[70vh] bg-[#f6ffff] flex flex-col justify-center items-center overflow-hidden relative`}
    >
      <img
        className={`w-full object-cover opacity-50`}
        src={`assets/images/plan.jpg`}
      />
      <div
        className={`flex flex-col justify-center items-center absolute top-0 left-0 w-full h-full`}
      >
        <div className={`min-w-[150px] min-h-[40px] rounded-[6px]`}>
        <p
          className={`text-[90px] text-black/80 font-black text-center leading-[.8] tracking-[-0.08em] _Bungee cursor-default`}
          id={`section_`}
        >
          BRAND STATEMENT <br/>
          GOES HERE
        </p>
        </div>
      </div>
    </div>
  );
};

export default Quote_;
