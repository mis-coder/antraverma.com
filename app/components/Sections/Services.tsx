import { services } from "@/app/constants";
import Image from "next/image";

const ServicesSection = () => {
  return (
    <section className="w-full px-4 py-16 md:py-24" id="services">
      <div className="container-wrapper">
        <div>
          <h2 className="section-title">
            My Services
          </h2>
          <p className="text-lg italic max-w-screen-md text-center mx-auto mb-10">
            Whether you're starting from scratch or scaling your current
            product, I offer solutions that are built to ship—fast, stable, and
            tailored to your needs!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="h-auto bg-primary rounded-2xl border border-gray-200 p-8 transition-all hover:bg-tertiary hover:shadow-[0px_20px_20px_rgba(0,0,0,0.20)] hover:border-none hover:-translate-y-2 transitional-all duration-500 ease-out cursor-default hover:text-primary group"
            >
              <div className="mb-4 h-16 w-16 rounded-full bg-tertiary group-hover:bg-primary flex items-center justify-center transition-all duration-500 ease-out">
                <Image
                  src={service.icon}
                  alt="icon"
                  className="h-full w-full object-contain text-tertiary"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-1">{service.title}</h3>
              <p className="mb-3 text-base leading-relaxed text-pretty">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
