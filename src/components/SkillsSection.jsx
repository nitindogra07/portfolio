import Highlight from "./Highlight";
import SkillsCard from "./SkillsCard";
import { MdElectricalServices } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { BsStarFill } from "react-icons/bs";
export default function SkillsSection() {
  const cardData = [
    {
      icon : BsStarFill,
      iconColor : "black",
      heading : "Tech Stack",
      body : "These are the technologies i use to create unbelievable outcomes",
      keyPoints: {
        one : "HTML5 , CSS3 ,JavaScript",
        two: "TailwindCss , ReactJs , GSAP",
        three : " NodeJS , ExpressJS , MongoDB"
      },
      color : "#e0ffc0",
      textColor : "black"
    },
    {
      icon: GiSkills,
      iconColor : "white",
      heading: "Skills",
      body: "A collection of my technical and non-technical skills",
      keyPoints: {
        one: "Responsive Design",
        two: "SEO & Performance Optimization",
        three: "Api Integration",
      },
      color: "#1a1a1a",
      textColor: "white",
    },
    {
      icon: MdElectricalServices,
      iconColor : "black",
      heading: "Services",
      body: "Here are the services i offer which leads to an unforgetable experince.",
      keyPoints: {
        one: "web Development",
        two: "deployment",
        three: "maintainable codes",
      },
      color: "#fefefe",
      textColor: "black",
    },
  ];
  return (
    <div className="h-[67vw] max-sm:h-fit max-sm:p-[4vw_10vw_30vw_10vw] w-full bg-[#111111] p-[4vw_10vw_4vw_10vw]">
      <Highlight text={"WHAT I OFFER"} color={"white"} />
      <div className="h-fit w-[50vw] max-sm:w-full max-sm:mt-[1vh]">
        <h1 className="text-[5vw] mt-[1vw] text-white leading-[0.9] max-sm:text-[12vw]">
          Empowering Brands Through Design
        </h1>
      </div>
      <div className="h-fit w-full flex justify-between max-sm:flex-col items-center">
        {cardData.map((ele, idx) => {
          return <SkillsCard data={ele} key={idx} />;
        })}
      </div>
    </div>
  );
}
