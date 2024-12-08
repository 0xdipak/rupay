'use client'


const RuLetter = () => {
  return (
    <>
      <div className="w-full h-[500px] flex items-center justify-center perspective-1000 cursor-move">
        <div
          className="text-9xl md:text-[200px] font-bold transition-transform duration-100 ease-out"
          style={{
            transformStyle: "preserve-3d",
            backgroundImage: "linear-gradient(45deg, #DC143C 0%, #003893 100%)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            backgroundClip: "text",
          }}
        >
          रु
        </div>
        <div
          className="text-9xl md:text-[200px] font-bold"
          style={{
            transformStyle: "preserve-3d",
            backgroundImage: "linear-gradient(45deg, #DC143C 0%, #003893 100%)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            backgroundClip: "text",
          }}
        >
          Pay
        </div>
      </div>
      <div
        className="max-w-7xl mx-auto text-xl font-bold text-right -mt-28"
        style={{
          transformStyle: "preserve-3d",
          backgroundImage: "linear-gradient(45deg, #DC143C 0%, #003893 100%)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          backgroundClip: "text",
        }}
      >
        —coming soon!
      </div>
    </>
  );
};

export default RuLetter;
