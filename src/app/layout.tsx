import type { Metadata } from "next";
// import { DM_Sans } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

import { FooterNeura } from "@/components/layout/FooterNeura";
import HeaderNeura from "@/components/layout/HeaderNeura";
import Header from "@/components/layout/Header";


// const dmSans = DM_Sans({ subsets: ["latin"] });

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Neura Sprint",
  description: "Landing Page Neura Sprint",
};
// #EAEEFE

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // return (
  //   <html lang="es" className="relative">

  //     <body className={`${poppins.className } flex-grow antialiased bg-[#FFFFFF]`}>
  //       {children}
  //     </body>

  //   </html>
  // );

  return (
    <html lang="es" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          poppins.className
        )}
      >
        <div className="relative flex min-h-screen flex-col">
          {/* <HeaderNeura /> */}
          <Header/>
          <main className="flex-grow">{children}</main>
          <FooterNeura />
        </div>
      </body>
    </html>
  );
}
