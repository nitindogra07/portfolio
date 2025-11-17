import CardsContainer from "./CardsContainer";
import { DiGitMerge } from "react-icons/di";
import { SiCodesignal } from "react-icons/si";
import { IoMdTrendingUp } from "react-icons/io";
export default function CardContainerHome() {
  const cardData = [
    {
      icon: DiGitMerge,
      heading: "Tailored Design",
      body: "I believe that every brand is unique and deserves a website that is just as distinctive.",
    },
    {
      icon: SiCodesignal,
      heading: "User-Centric Approach",
      body: "With a strong focus on user experience, I design websites that are intuitive and easy to navigate.",
    },
    {
      icon: IoMdTrendingUp,
      heading: "Trending Technologies",
      body: "I stay at the forefront of web design trends and technologies to offer you the most innovative solutions.",
    },
  ];
  return (
    <CardsContainer
      Heading={"Why Work with Me"}
      HighlightText={"why choose me"}
      cardData={cardData}
    />
  );
}
