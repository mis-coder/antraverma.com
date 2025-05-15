import type { Metadata } from "next";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { playfair, workSans } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Antra Verma",
  description: "Personal Website of Antra Verma.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${workSans.variable}`}>
      <body className={"font-workSans w-full"}>
        <Header />
        <main className="pt-[84px] text-primary">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
