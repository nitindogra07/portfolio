import ServiceCard from "./ServiceCard";
export default function ServicesCards() {
  const data = [
    {
      heading: "Web Design",
      body: " Web design is more than just aesthetics; it's about marrying form with function to create a seamless user experience that captivates and converts. My web design services focus on building responsive, engaging, and visually appealing websites that reflect your brand’s essence.",
      keyPoints: {
        one: "Custom Tailored Components",
        two: "Responsive layouts",
        three: "Reusable Components",
      },
      price: "400",
    },
    {
      heading: "Development",
      body: " Front end development brings your website to life, transforming static designs into dynamic, interactive user experiences. I specialize in clean, efficient coding that ensures your website is fast, responsive, and visually stunning. Using tools like Git for efficient project management and collaboration.",
      keyPoints: {
        one: "HTML, CSS, & JS Expertise",
        two: "Cross-Browser Compatibility",
        three: "Faster Load Times",
      },
      price: "600",
    },
    {
      heading: "Brand Identity",
      body: "A strong brand identity is essential for standing out in today’s competitive market. I help businesses create cohesive and compelling brand images that resonate with their target audience and convey their core values. Developing color palettes, typography, and imagery guidelines for brand consistency.",
      keyPoints: {
        one: "Logo Design",
        two: "Cohesive Color Palettes",
        three: "Brand Guidelines",
      },
      price: "1000",
    },
  ];
  return (
    <div className="h-fit w-full p-[3vw_12vw_3vw_12vw] max-sm:p-[3vw_3vw_25vw_3vw] flex flex-col gap-[2vw] max-sm:gap-[8vw]">
      {data.map((ele, idx) => {
        return <ServiceCard ele={ele} key={idx} />;
      })}
    </div>
  );
}
