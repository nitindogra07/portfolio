import Nav from "../components/Nav";
import RouteHeading from "../universal components/RouteHeading";
import RightDiv from "../ContactPage components/RightDiv";
import LeftDiv from "../ContactPage components/LeftDiv";
import Footer from "../components/Footer";
import Socials from "../ContactPage components/Socials";
export default function Contact() {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div>
        <RouteHeading text="Contact" />
      </div>
      <div className="h-fit w-full max-sm:inline-block flex p-[2vw_0_2vw_0] max-sm:pb-[20vw] text-white">
        <div className="h-full max-sm:h-[60vw] w-1/2 max-sm:w-full">
          <LeftDiv />
        </div>
        <div className="h-full w-[50%] max-sm:w-full ">
          <RightDiv />
        </div>
      </div>
      <div>
        <Socials />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
