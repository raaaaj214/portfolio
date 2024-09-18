import type { Metadata } from "next";
import localFont from "next/font/local"
import Header from "./_components/Header"
import "./globals.css";

const CeraCy = localFont({
  src : [
    {
      path :  "../public/fonts/a1ab9bebae84d82fbcfe930c4643de7a.woff2",
      weight : "400"
    },
    {
      path : "../public/fonts/6a28a1fb5b77054a12626d0c23c92aa2.woff2",
      weight : "700"
    }
  ],
  variable : "--font-creacy"
})

export const metadata: Metadata = {
  title: "Raj Deshmukh",
  description: "This is Raj Deshmukh's Portfolio",
};

export default function RootLayout({children} : {
  children : React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${CeraCy.variable} font-ceracy bg-fourth`}>
        <Header/>
        {children}
        </body>
    </html>
  );
}
