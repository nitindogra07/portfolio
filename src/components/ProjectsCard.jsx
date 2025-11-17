import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";
export default function ProjectsCard({ data }) {
  return (
    <div className="h-full overflow-hidden max-sm:h-[55vh] w-full bg-[#111111] border border-[#2b2b2b] max-sm:mb-[6vw] max-sm:rounded-[7vw] rounded-[2vw] p-[0.5vw_0_0_0]">
      <div className="h-[15%] max-sm:h-[20%] max-sm:p-[5vw] w-full flex p-[1vw]">
        <span className="text-white w-full h-full flex">
          <MdOutlineSubdirectoryArrowRight className="text-[#87fa2a]" />
          {data.name}
        </span>
        <span className="text-white ">{data.year}</span>
      </div>
      <div className="h-[85%] hover:scale-[1.05] hover:transition-all hover:ease-in  hover:duration-200 max-sm:h-[80%] w-full rounded-[2vw] max-sm:rounded-[6vw] overflow-hidden">
        <img src={data.image} alt="" className="object-cover h-full w-full" />
      </div>
    </div>
  );
}
