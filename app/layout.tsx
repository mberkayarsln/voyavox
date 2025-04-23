import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Voyavox",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="bg-[url('/background.png')] bg-cover bg-center h-screen"
      >
        <div className="max-w-[1024px] mx-auto py-3">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
