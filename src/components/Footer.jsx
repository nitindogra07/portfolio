import Highlight from "./Highlight";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="h-[43vw] max-sm:h-[85vh] max-sm:flex max-sm:items-center w-full bg-[#1a1a1a] max-sm:p-[2vh] p-[7vw_10vw_7vw_10vw]">
      <div className="bg-[#111111] max-sm:rounded-[6vw] max-sm:h-[50%] h-full w-full rounded-[1.5vw] max-sm:justify-between flex flex-col items-center p-[4vw_8vw_8vw_8vw] overflow-hidden">
        <Highlight text={"HAVE PRODUCT IN MIND?"} color={"white"} />
        <h1 className="text-white capitalize max-sm:text-[10vw] text-[5vw] mt-[1vw] font-medium text-center leading-[1.1]">
          lets turn your ideas <br /> into reality
        </h1>
        <div className="h-[7vw] w-full flex justify-center items-center p-[1vw]">
          <Link className="inline-flex h-[2.8vw] max-sm:h-[7vw] max-sm:rounded-full max-sm:p-[5vw] w-fit bg-[#87fa2a] items-center p-[1vw] rounded-[2vw]" to="/contact">Get in touch</Link>
          <h1 className="text-white text-[2vw] font-medium ml-[3vw] mr-[1vw] max-sm:text-[4vw]">
            OR
          </h1>
          <p className="text-white text-[2vw] underline ml-[1vw] font-medium max-sm:text-[3vw]">
            dogranitin579@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}
