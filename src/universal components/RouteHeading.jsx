export default function RouteHeading({text}) {
  return (
    <div
      className="w-full flex items-end mt-[8vw]
                  h-[20vw] px-[10vw] pb-[2vw]
                  max-sm:h-auto max-sm:pt-[20vw] max-sm:mt-[2vw] max-sm:pb-[10vw] max-sm:px-[8vw]"
    >
      <h1 className="text-[15vw] max-sm:text-[12vw] max-sm:font-bold max-sm:text-center uppercase text-white w-full">
        {text}
      </h1>
    </div>
  );
}
