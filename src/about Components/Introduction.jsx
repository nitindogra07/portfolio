import hero from "../components/assets/hero.png";
export default function Introduction() {
  return (
    <div className="h-dvh w-full flex bg-[#111111] max-sm:inline-block max-sm:h-[50vh] max-sm:w-full">
      <div className="w-1/2 max-sm:w-full max-sm:h-fit flex justify-center">
        <div className="bg-linear-to-b from-[#a5ff52] via-[#c5ff8c] to-[#e0febf] rounded-[2vw] h-[70%] max-sm:h-[60%] max-sm:w-[70%] w-[60%] overflow-hidden flex justify-center">
          <img src={hero} className="h-full w-[70%] max-sm:w-full" alt="" />
        </div>
      </div>
      <div className=" h-dvh max-sm:h-[210vw] overflow-hidden bg-[#111111] w-1/2 max-sm:inline-block max-sm:w-full flex flex-col justify-center p-[0vw_4vw_0vw_4vw] ">
        <div className="h-[30%] w-full flex items-center max-sm:p-[0vw_3vw_0vw_3vw] max-sm:h-[25%]">
          <h1 className="text-white font-medium text-[5vw] max-sm:text-[12vw] max-sm:leading-12 leading-18">
            Welcome to my Creative World
          </h1>
        </div>
        <div className="h-[70%] max-sm:h-[70%] w-full pt-[2vw] max-sm:p-[3vw_5vw_3vw_5vw]">
          <p className="text-white">
            My journey into the world of Development began during my college
            years, where I was captivated by the intersection of creativity and
            technology. Inspired by the power of visual storytelling, I pursued
            a degree in B.Tech and honed my skills in various Development
            disciplines.
          </p>
          <p className=" text-white mt-[2vw] ">
            Today, I am driven by the belief that great development is not just
            about writing code; it’s about building seamless, scalable, and
            user-focused experiences that solve real problems and form
            meaningful connections between technology and the people who use it.
          </p>

          <a
            href="/resume.pdf"
            download
            className="max-sm:mt-[10vw] inline-flex mt-[3vw] h-[2.8vw] max-sm:h-[9vw] max-sm:rounded-[6.5vw] max-sm:p-[1.5vh] w-fit bg-[#87fa2a] items-center p-[1vw] rounded-[2vw]"
          >
            Download resume
          </a>
        </div>
      </div>
    </div>
  );
}
