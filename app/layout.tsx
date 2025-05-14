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
      <body
        className={
          "max-w-screen-xl mx-auto px-6 md:px-20 bg-secondary text-primary"
        }
      >
        <Header />
        <main className="flex min-h-screen flex-col items-center justify-between">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
