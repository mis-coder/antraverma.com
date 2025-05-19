import { onlineMeetUrl } from "@/app/constants";
import Link from "next/link";
import { Button } from "../UI/Button";

interface BookCallSectionProps {
  text: string;
  subText: string;
}

const BookCallSection: React.FC<BookCallSectionProps> = ({ text, subText }) => {
  return (
    <section className="w-full py-16">
      <div className="container-wrapper flex flex-wrap flex-col items-center justify-between gap-6">
        <h1 className="text-3xl md:text-5xl font-playfair text-center">{text}</h1>
        <p className="mt-0 text-gray-700 text-center">{subText}</p>
        <Button
          variant="primary"
          className="w-full md:w-auto px-12 py-4 text-lg"
        >
          <Link href={onlineMeetUrl} target="_blank">
            Book a call with me
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default BookCallSection;
