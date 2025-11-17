import Nav from "../components/Nav";
import RouteHeading from "../universal components/RouteHeading";
import CardContainer from "../components/CardsContainer"
import Footer from "../components/Footer"
import { DiGitMerge } from "react-icons/di";
import { SiCodesignal } from "react-icons/si";
import { IoMdTrendingUp } from "react-icons/io";
import ServicesCards from "../services components/ServicesCards";

export default function Services() {
  const cardData = [
      {
        icon: DiGitMerge,
        heading: "Personalized Approach",
        body: "Every project is unique, and I tailor my approach to fit your specific needs and goals.",
      },
      {
        icon : SiCodesignal,
        heading : "Clear Communication",
        body : "I keep you informed at every stage of the process and provide you regular updates."
      },
      {
        icon : IoMdTrendingUp,
        heading : "After Support",
        body : "My commitment to your success doesn't end at launch. I provide after launch support."
      },
    ];
  return (
    <>
      <div>
        <Nav />
        <div className="h-fit w-full">
          <RouteHeading text="SERVICES" />
        </div>
        <div>
          <ServicesCards />
        </div>
        <CardContainer Heading={"What to Expect​"} HighlightText={"My Philosipy"} cardData={cardData}/>
        <Footer/>
      </div>
    </>
  );
}
