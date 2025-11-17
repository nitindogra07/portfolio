import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";
import { FormBtnContext } from "../Contexts/ContactBtnContext";
import { useContext } from "react";
export default function Button({ text }) {
  const { IsOpened } = useContext(FormBtnContext);
  return (
    <button
      onClick={IsOpened}
      className="inline-flex h-[2.8vw] max-sm:h-[7vw] max-sm:rounded-full max-sm:p-[5vw] w-fit bg-[#87fa2a] items-center p-[1vw] rounded-[2vw]"
    >
      <MdOutlineSubdirectoryArrowRight className="mr-1" />
      <span className="whitespace-nowrap text-[1vw] max-sm:text-[3.5vw] max-sm:font-light">
        {text}
      </span>
    </button>
  );
}
