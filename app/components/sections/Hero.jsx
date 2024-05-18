
const HeroSection = () => {
  return (
    <section className="h-screen w-full flex items-center justify-center">
      <div className="h-full w-full text-center max-w-xs md:max-w-4xl mx-auto flex flex-col items-center justify-around md:justify-evenly">
        <div>
          <h1 className="font-barlow text-7xl md:text-9xl">
            Hey there!
          </h1>
          <p className="mt-6 block md:hidden text-sm md:text-lg">
            I am a software developer who likes building web applications for you.
          </p>
        </div>
        <div>
          <p className="hidden md:block text-sm md:text-lg">
            I am a software developer who likes building web applications for you.
          </p>
          <p className="mt-4 text-sm md:text-md">
            “Thank you for visiting! While there isn’t much to explore at the moment, I invite you to return in the near future. I have exciting things in store for you. Looking forward to having you back on my website!” 😊
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
