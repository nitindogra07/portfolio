export default function ServiceCard({ele}) {

  return (
    <div className="h-fit max-sm:h-fit max-sm:p-[9vw_5vw_9vw_5vw] text-white w-full bg-[#1a1a1a] p-[3vw_4vw_3vw_4vw] flex flex-col gap-[1vw] max-sm:gap-[5vw] rounded-[1.5vw] max-sm:rounded-[4vw]">
      <h1 className="text-[2vw] max-sm:text-[8vw]">{ele.heading}</h1>
      <div className="w-[80%] max-sm:w-full h-fit text-[1vw] max-sm:text-[4vw] max-sm:font-light">
        <p>
          {ele.body}
        </p>
        <div className="w-full mt-[2vw] max-sm:mt-[5vw] text-[#7ae444]">
          <div className="w-full border-b border-[#2e2e2e] h-[4vw] max-sm:h-[10vw] flex items-center">{ele.keyPoints.one}</div>
          <div className="w-full border-b border-[#2e2e2e] h-[4vw] max-sm:h-[10vw] flex items-center">{ele.keyPoints.two}</div>
          <div className="w-full border-b border-[#2e2e2e] h-[4vw] max-sm:h-[10vw] flex items-center">{ele.keyPoints.three}</div>
        </div>
        <button className="w-fit text-[0.8vw] h-[2.5vw] flex justify-center max-sm:h-[9vw] max-sm:text-[3vw] max-sm:rounded-[5vw] max-sm:p-[4vw] items-center mt-[2vw] max-sm:mt-[10vw] bg-[#7ae444] p-[1vw] text-black rounded-[2vw]">
          Starting Price : ${ele.price}
        </button>
      </div>
    </div>
  );
}
