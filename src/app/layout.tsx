import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Footer, Header } from "@/components";
import { IRootLayoutProps } from "@/interfaces/props";
import { ToastContainer } from "react-toastify";

const montserrat = Montserrat({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Ecommerce | Home",
  description: "NextJS 13 yordamida yaratilgan onlayn do'kon vebsayti",
  icons: "/favicon.svg",
  authors: { name: "Suhrobbek Soatov", url: "https://soatov.uz" },
  keywords: [
    "ecommerce",
    "onlayn do'kon",
    "do'kon",
    "Suhrobbek",
    "Soatov",
    "Shop",
    "Bozor",
    "e-commerce",
    "Suhrobbek Soatov",
  ],
  category: "online-shop",
};

const RootLayout = ({ children }: IRootLayoutProps) => {
  return (
    <html className="box-border h-full scroll-smooth" lang="en">
      <body className={`${montserrat.className} flex flex-col min-h-full`}>
        <ToastContainer />
        <Header />
        <div className="flex-grow-[1]">{children}</div>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
