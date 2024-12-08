import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "RuPay",
  description: "Your payment partner, your trusted friend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        cz-shortcut-listen="true"
        className={`${sora.variable} font-sora flex flex-col relative bg-gray-900
         text-gray-50 text-opacity-90 antialiased`}
      >
        {/* Gredient background color */}
        <div
          className="bg-[#b62441] absolute top-[-6rem] flex-1 -z-10 right-[11rem] h-[31.25rem] w-[31.25rem]
        rounded-full blur-[10rem] sm:w-[68.75rem]"
        ></div>
        <div
          className="bg-[#20509e] absolute top-[-1rem] -z-10 flex-1 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full
        blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"
        ></div>
        {children}
      </body>
    </html>
  );
}
