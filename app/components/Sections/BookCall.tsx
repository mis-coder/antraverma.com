import { Button } from "../UI/Button";

const BookCallSection = () => {
  return (
    <section className="w-full py-16">
      <div className="w-full max-w-screen-xl mx-auto px-6 md:px-20 flex flex-wrap flex-col items-center justify-between gap-6">
        <h1 className="text-3xl md:text-5xl font-playfair">
          Not sure what fits you best?
        </h1>
        <Button
          variant="primary"
          className="w-full md:w-auto px-12 py-4 text-lg"
        >
          Book a call with me
        </Button>
      </div>
    </section>
  );
};

export default BookCallSection;
