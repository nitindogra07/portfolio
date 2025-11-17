import Highlight from "../components/Highlight";
export default function LeftDiv() {
  return (
    <div className="h-full w-full max-sm:p-[1vw_20vw_8vw_5vw] pl-[10vw]">
      <Highlight text={"book a call"}  />
      <h1 className="mt-[1vw] text-[4vw] max-sm:text-[10vw] max-sm:leading-10 max-sm:mt-[3vw] leading-14 capitalize font-medium">
        Book a call I'd love to hear from you!
      </h1>
    </div>
  );
}
