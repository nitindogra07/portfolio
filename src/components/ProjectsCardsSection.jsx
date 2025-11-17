import Highlight from "./Highlight";
import { Link } from "react-router-dom";
import ProjectsCard from "./ProjectsCard";
export default function ProjectsCardsSection() {
  const CardsData = [
    {
      name: 1,
      year: 2024,
      image:
        "https://websitedemos.net/web-designer-portfolio-02/wp-content/uploads/sites/1513/2025/02/Project-Pic-1.png",
    },
    {
      name: 2,
      year: 2024,
      image:
        "https://websitedemos.net/web-designer-portfolio-02/wp-content/uploads/sites/1513/2025/01/Portfolio-Img-2.png",
    },
    {
      name: 3,
      year: 2024,
      image:
        "https://websitedemos.net/web-designer-portfolio-02/wp-content/uploads/sites/1513/2025/02/Porject-Imgg.png",
    },
    {
      name: 4,
      year: 2024,
      image:
        "https://websitedemos.net/web-designer-portfolio-02/wp-content/uploads/sites/1513/2025/01/Portfolio-Img-4.png",
    },
  ];
  return (
    <div className="h-[110vw] max-sm:h-fit w-full bg-[#111111] max-sm:p-[0vw_5vw_12vw_5vw] p-[10vw_10vw_5vw_10vw]">
      <Highlight text={"SELECTED WORK 2025-2026"} color={"white"} />
      <div className="h-fit w-[50vw] max-sm:m-[2.5vh_0_8vh_0] max-sm:w-full mt-[1vw]">
        <h1 className="text-[5vw] leading-[1.1] text-white max-sm:text-[13vw] max-sm:leading-[0.9] font-medium">
          Elevating Brands with Design Brilliance
        </h1>
      </div>
      <div className="h-[70vw] mt-[5vw] max-sm:inline w-full grid grid-cols-2 grid-rows-2 gap-[1.5vw]">
        {CardsData.map((ele, idx) => {
          return (
            <div className="" key={idx}>
              <ProjectsCard data={ele} key={idx} />
            </div>
          );
        })}
      </div>
      <div className="h-[10vw] w-full flex justify-center items-center">
          <Link to = "/projects" className="inline-flex h-[2.8vw] max-sm:h-[9vw] max-sm:rounded-[6.5vw] max-sm:p-[1.5vh] w-fit bg-[#87fa2a] items-center p-[1vw] rounded-[2vw]">Browse all work</Link>
      </div>
    </div>
  );
}
