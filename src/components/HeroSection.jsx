import Button from "./Button";
import heroImg from "./assets/hero.png";
import Highlight from "./Highlight";
import { FormBtnContext } from "../Contexts/ContactBtnContext";
import { useContext } from "react";
import ContactForm from "../universal components/ContactForm"
export default function HeroSection(){
  const {IsOpen , SetIsOpen} = useContext(FormBtnContext);
  return (
    <>
      <div className="h-[40vw] max-sm:h-[130vw] select-none bg-[#111111] max-sm:justify-start p-[1vw] flex flex-col justify-center items-center relative">
        <Highlight color={"white"} text={"Full Stack Developer"} />
        <span className="max-sm:mt-[5vw]">
          <p className="text-[14vw] max-sm:text-[22vw] uppercase text-white text-center leading-[0.8] mt-1">
            Nitin
          </p>
          <p className="text-[14vw] max-sm:text-[22vw] uppercase text-white text-center leading-[0.8]">
            Dogra
          </p>
        </span>
        <div className="h-[38vw] max-sm:h-[110vw] max-sm:p-0 w-full absolute max-sm:top-[34%] top-[50%] p-[3vw_10vw_3vw_10vw]">
          <div className="h-full w-full">
            <div className="h-full w-full flex flex-col justify-center gap-[3.5vw] relative max-sm:hidden">
              <h1 className="text-white w-[30%] mt-[4vw] text-[1vw]">
                I blend artistry with cutting-edge technology to deliver
                websites that not only look stunning but also drive results.
                Schedule a consultation
              </h1>
              <Button text={"Schedule a consultation"} />
            </div>
            <div className="absoulte h-full max-xs:h-[130vw] max-xxs:h-[150vw] max-xxs:mt-[5vh] max-xs:top-[-19%] max-sm:w-[80%] max-sm:left-[15%] absolute top-[-8.9%] left-[30%] overflow-hidden  w-[40%] flex justify-center">
              <img src={heroImg} className="h-full select-none" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[15vw] max-xs:h-[24vw] max-xxs:h-[27vh] w-full bg-[#111111]"></div>
    </>
  );
}
