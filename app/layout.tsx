import type { Metadata } from "next";

import Footer from "./components/UI/Footer";
import Header from "./components/UI/Header";
import { playfair, quickSand } from "./fonts";
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
    <html lang="en" className={`${playfair.variable} ${quickSand.variable}`}>
      <body className="font-quick-sand w-full">
        <Header />
        <main className="text-secondary pt-[var(--header-height)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
