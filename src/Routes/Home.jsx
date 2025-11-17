import Nav from "../components/Nav";
import HeroSection from "../components/HeroSection";
import CardContainerHome from "../components/CardContainerHome";
import ProjectsCardsSection from "../components/ProjectsCardsSection";
import SkillsSection from "../components/SkillsSection";
import Footer from "../components/Footer";
import ContactForm from "../universal components/ContactForm";
import { FormBtnContext } from "../Contexts/ContactBtnContext";
import { useContext } from "react";
export default function Home() {
  const { IsClicked , IsClosed } = useContext(FormBtnContext);
  return (
    <div className="h-dvh w-full">
      <>
        <Nav />
        <HeroSection />
        <CardContainerHome />
        <ProjectsCardsSection />
        <SkillsSection />
        <Footer />
      </>

      {IsClicked && (
            <ContactForm />
      )}
    </div>
  );
}
