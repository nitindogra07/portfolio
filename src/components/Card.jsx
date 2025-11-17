export default function Card({ data }) {
  const IconComponent = data.icon;
  return (
    <div className="h-fit max:h-[50vw] max-sm:m-[4.5vw_4.5vw_4.5vw_4.5vw] w-[24vw] max-sm:w-full p-[1.5vw] max-sm:p-[2vw]">
      <div className="bg-[#171d15] h-[3.2vw] w-[3.2vw] max-sm:h-[12vw] max-sm:w-[12vw] rounded-full">
        <span className="h-full w-full flex justify-center items-center text-[1.7vw] max-sm:text-[4vh] text-[#86f91f]">
          <IconComponent />
        </span>
      </div>
      <div className="h-fit w-fit mt-[1vw] max-sm:p-[1vw]">
        <h1 className="text-[1.6vw] max-sm:text-[6.5vw]">{data.heading}</h1>
      </div>
      <div className="h-fit w-fit mt-[1vw] max-sm:text-[4.5vw] font-light max-sm:p-[1vw]">
        {data.body}
      </div>
    </div>
  );
}
