export default function Highlight({ text, color }) {
  return (
    <span
      className={`max-sm:mt-[4vw] text-${color} w-fit h-[1.8vw] max-sm:h-[6vw] max-sm:p-[4vw] inline-flex items-center justify-center p-[1vw] border text-center rounded-[150px] border-[#535250]`}
    >
      <span className="h-[0.8vw] w-[0.8vw] max-sm:h-[2.5vw] max-sm:w-[2.5vw] rounded-full bg-[#87fa2a] mr-2"></span>
      <p className="max-sm:text-[4vw] uppercase">{text}</p>
    </span>
  );
}
