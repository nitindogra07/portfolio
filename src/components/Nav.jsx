import { NavLink } from "react-router-dom";
import Hamburger from "../universal components/HamBurger";
import { useState } from "react";

export default function Nav() {
  const routes = [
    { name: "Home", route: "/" },
    { name: "About", route: "/about" },
    { name: "Services", route: "/services" },
    { name: "Projects", route: "/projects" },
    { name: "Contact Me", route: "/contact" },
  ];

  const [isActive, SetIsActive] = useState(false);

  function active() {
    SetIsActive(!isActive);
    console.log(isActive);
  }

  

  return (
    <>
      <nav className="w-full bg-[#111111] text-white max-sm:fixed max-sm:top-0 max-sm:left-0 max-sm:z-50 ">
        <div className="flex justify-between  items-center h-[5vw] px-[9vw] max-sm:h-[15vw]">
          <div className="flex items-center justify-between w-full sm:w-auto">
            <span className="flex items-center text-[1.8vw] font-medium max-sm:text-[6vw] max-[376px]:text-[8vw]">
              <p className="text-[#7ae444] mr-2 hover:text-white">Nitin</p>
              <p className="hover:text-[#7ae444]">Dogra</p>
            </span>
            <div
              className="sm:hidden block sm:h-[2vh] sm:w-[2vh]"
              onClick={active}
            >
              <Hamburger />
            </div>
          </div>
          <div className="hidden sm:flex justify-between items-center w-[40%]">
            {routes.map((element, index) => (
              <NavLink
                to={element.route}
                key={index}
                className={({ isActive }) =>
                  `text-[1.1vw] mr-[2.1vw] font-mediumwawdawdawd ${
                    isActive ? "text-[#7ae444]" : "text-white"
                  } hover:text-[#7ae444] transition-colors`
                }
              >
                {element.name}
              </NavLink>
            ))}
          </div>
        </div>
        {isActive && (
          <div className="duration-200 flex flex-col sm:hidden bg-[#111111] w-full gap-2 py-[2vw] border-t border-[#333]">
            {routes.map((element, index) => (
              <NavLink
                to={element.route}
                key={index}
                className={({ isActive }) =>
                  `text-[4vw] font-medium h-[10vw] flex items-center px-[6vw] ${
                    isActive ? "text-[#7ae444] bg-[#2b2b2b] " : "text-white"
                  } hover:text-[#7ae444] transition-colors`
                }
              >
                {element.name}
              </NavLink>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
