import Nav from "../components/Nav";
import RouteHeading from "../universal components/RouteHeading"
import ProjectsCardsSection from "../components/ProjectsCardsSection"
import Footer from "../components/Footer"

export default function Projects(){
    return(
        <div className="h-fit w-full">
        <Nav />
        <RouteHeading text={"projects"} />
        <ProjectsCardsSection />
        <Footer />
        </div>
    )
}