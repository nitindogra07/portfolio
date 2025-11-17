import Highlight from "../components/Highlight";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
export default function Hobbies() {
  const img = [
    {
      photo: img1,
    },
    {
      photo: img2,
    },
    {
      photo: img3,
    },
  ];
  return (
    <div className="h-[120vh] max-sm:h-fit w-full bg-[#f8f8f8] max-sm:flex max-sm:flex-col max-sm:gap-[10vw] p-[7vw] overflow-hidden">
      <div className="h-fit w-full flex flex-col items-center">
        <Highlight text={"My World"} />
        <h1 className="text-[4.5vw] text-center leading-18 font-medium mt-[1vw] max-sm:leading-11 max-sm:text-[10vw] max-sm:mt-[5vw]">
          When I am not Working <br /> I am Travelling
        </h1>
      </div>
      <div className="h-[80vh] max-sm:h-full w-full p-[2vw] max-sm:flex-col-reverse flex items-center justify-around">
        {img.map((ele, idx) => {
          return (
            <div
              className="h-[25vw] max-sm:rounded-[4vw] max-sm:h-[100vw] max-sm:mb-[10vw] max-sm:w-full w-[20vw] bg-amber-300 rounded-[1vw] overflow-hidden"
              key={idx}
            >
              <img
                src={ele.photo}
                key={idx}
                className="h-full w-full object-cover"
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
