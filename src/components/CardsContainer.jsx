import Highlight from "./Highlight";
import Card from "./Card";
export default function CardsContainer({ HighlightText, Heading, cardData }) {
  return (
    <div className="h-fit max-sm:h-fit w-full bg-[#f8f8f8] max-sm:p-[13vw_5vw_13vw_5vw] p-[8vw_9vw_8vw_9vw]">
    <div>
      <Highlight color={""} text={HighlightText} />
      <h1 className="capitalize text-[5vw] max-sm:mt-3 max-sm:text-[12.5vw] max-sm:leading-[1.1] max-sm:mb-[3vh] text-[#121212]">
        {Heading}
      </h1>
      <div className="h-fit mt-[3vw] max-sm:inline max-sm:justify-start w-full p-[2vw] flex justify-between">
        {cardData.map((ele, idx) => {
          return <Card data={ele} key={idx} />;
        })}
      </div>
    </div>
    </div>
  );
}
