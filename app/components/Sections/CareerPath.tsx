"use client";

import { careerData } from "@/app/constants";
import { Button } from "../UI/Button";

const CareerPathSection = () => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "assets/Antra-Verma--Resume.pdf";
    link.target = "_blank";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="w-full px-4 bg-secondary md:bg-primary">
      <div className="container-wrapper text-primary md:bg-secondary py-10 md:py-20">
        <h2 className="section-title-sm">My Career Path So Far</h2>
        <div className=" flex flex-col gap-10 py-12">
          {careerData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row md:items-start gap-6 md:gap-20"
            >
              <div className="text-xl text-left md:text-right md:w-1/3 text-tertiary font-semibold">
                <p>{item.title}</p>
                <p className="font-normal">({item.duration})</p>
              </div>
              <div className="md:w-2/3 w-full md:max-w-xl text-gray-300 text-lg leading-relaxed">
                {item.description}
              </div>
            </div>
          ))}
        </div>
        <Button
          variant="primary"
          className="block mt-4 mx-auto"
          onClick={downloadResume}
        >
          Download CV
        </Button>
      </div>
    </section>
  );
};

export default CareerPathSection;
