import type { Metadata } from "next";
import Header from "./_components/Header"
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {

  title: "Raj Deshmukh",
  description: "This is Raj Deshmukh's Portfolio",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-fourth`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
