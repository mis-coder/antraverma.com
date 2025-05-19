"use client";

import { careerData } from "@/app/constants";

const CareerPathSection = () => {
  return (
    <section className="w-full px-4 bg-secondary md:bg-primary">
      <div className="container-wrapper py-10 md:py-20">
        <h2 className="section-title-sm">My Career Path So Far</h2>
        <div className=" text-primary md:bg-secondary flex flex-col gap-10 py-12">
          {careerData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row md:items-start gap-6 md:gap-20"
            >
              <div className="text-lg text-left md:text-right md:w-1/3 text-tertiary font-semibold">
                <p>{item.title}</p>
                <p className="font-normal">({item.duration})</p>
              </div>
              <div className="md:w-2/3 w-full md:max-w-xl text-gray-300 text-md leading-relaxed">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerPathSection;
