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
        className={`bg-[url('/background.png')] bg-cover bg-center min-h-screen ${quicksand.className}`}
      >
        <div className="max-w-[1024px] mx-auto">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
