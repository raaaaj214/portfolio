import type { Metadata } from "next";
import localFont from "next/font/local"
import Header from "./_components/Header"
import "./globals.css";

export const metadata: Metadata = {

  title: "Raj Deshmukh",
  description: "This is Raj Deshmukh's Portfolio",
};

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-fourth`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
