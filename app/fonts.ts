import { Playfair_Display, Quicksand } from "next/font/google";

export const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

export const quickSand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quick-sand",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
});
