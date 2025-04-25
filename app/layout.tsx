import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { Quicksand } from "next/font/google"

export const metadata: Metadata = {
  title: "Voyavox",
  description: "",
};

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`relative bg-[url('/background.png')] bg-cover bg-center min-h-screen flex justify-center ${quicksand.className} transition-colors duration-300`}
      >
        <div className="absolute top-36 -z-50">
          <img src="/voiceline.svg" alt="voiceline" className="object-cover" />
        </div>
        <div className="max-w-[1024px] mx-auto">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
