import Image from "next/image";
import TopImg from "../../assets/images/website-about-pic-1.jpeg";

const AboutPage = () => {
  return (
    <section className="pt-20">
      <div className="flex w-full h-full gap-20 items-center justify-center">
        <div className="w-full md:w-1/2">
          <h2 className="font-barlow text-3xl md:text-5xl">Hey it's Antra!</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </p>
        </div>
        <div className="">
          <Image
            src={TopImg}
            quality={80}
            alt="my-picture"
            className="w-96 h-96 z-10 object-cover rounded-3xl"
          />
          <div />
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
