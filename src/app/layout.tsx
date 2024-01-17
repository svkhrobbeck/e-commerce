import "./globals.css";
import "@/service/axios";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Footer, Header } from "@/components";
import { IRootLayoutProps } from "@/interfaces/props";

const montserrat = Montserrat({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Ecommerce",
  description: "NextJS 13 Ecommerce Website",
};

const RootLayout = ({ children }: IRootLayoutProps) => {
  return (
    <html className="box-border h-full scroll-smooth" lang="en">
      <body
        className={`${montserrat.className} flex flex-col h-full min-h-full`}
      >
        <Header />
        <main className="flex-grow-[1]">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
