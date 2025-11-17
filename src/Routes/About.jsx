import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Introduction from "../about Components/Introduction";
import Hobbies from "../about Components/Hobbies";
import RouteHeading from "../universal components/RouteHeading";

export default function About() {
  return (
    <>
      <div>
        <Nav />
        <RouteHeading text = {"About me"}/>
        <div>
          <Introduction />
        </div>
        <div>
          <Hobbies />
        </div>
      </div>
      <Footer />
    </>
  );
}
