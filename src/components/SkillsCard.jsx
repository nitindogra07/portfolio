import Button from "./Button";
export default function SkillsCard({ data }) {
  const Icon = data.icon;
  return (
    <div
      className={`overflow-hidden  h-[35vw] max-sm:h-fit max-sm:p-[10vw_5vw_8vw_5vw] max-sm:mt-[14vw] max-sm:w-full max-sm:rounded-[6vw] mt-[7vw] p-[4vw_2vw_4vw_2vw] w-[25vw] rounded-[1.5vw] `}
      style={{ backgroundColor: data.color }}
    >
      <div className="h-[10%] w-full">
        <Icon className={`text-[3vw] max-sm:text-[15vw] text-${data.iconColor}`}/>
        <h1 className="mt-[1vw] text-[2.5vw] max-sm:text-[9vw] max-sm:mt-[5vw]" style={{ color: data.textColor }}>
          {data.heading}
        </h1>
        <p
          className={`text-[1.1vw] max-sm:text-[4.8vw]`}
          style={{ color: data.textColor }}
        >
          {data.body}
        </p>
        <div className={`h-[3.5vw] max-sm:h-[7vh] max-sm:text-[4.2vw] max-sm:flex max-sm:items-center w-full  mt-[2vw] border-b border-${data.iconColor} p-[1vw] capitalize text-[1.1vw]`} style={{color : data.textColor}}>{data.keyPoints.one}</div>
        <div className={`h-[3.5vw] max-sm:h-[7vh] max-sm:text-[4.2vw] max-sm:flex max-sm:items-center w-full  border-b border-${data.iconColor} p-[1vw] capitalize text-[1.1vw]`} style={{color : data.textColor}}> {data.keyPoints.two}</div>
        <div className={`h-[3.5vw] max-sm:h-[7vh] max-sm:text-[4.2vw] max-sm:flex max-sm:items-center w-full  border-b             border-${data.iconColor} p-[1vw] capitalize text-[1.1vw] max-sm:mb-[5vh] `} style={{color : data.textColor}}>{data.keyPoints.three}</div>
        <div className="h-fit w-full flex justify-center items-center mt-[2vw] overflow-hidden">
          <Button text={"Schedule a consultation"} />
        </div>
      </div>
    </div>
  );
}
