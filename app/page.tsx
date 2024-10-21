import { Toaster } from "react-hot-toast";
import ContactSection from "./_components/ContactSection";
import Hero from "./_components/Hero";
import Projects from "./_components/Projects";
import TechStack from "./_components/TechStack";


export default function Home() {
  return (
    <main className="bg-primary  w-full flex flex-col p-0 m-0 justify-center items-center ">
      <Hero/>
      <TechStack/>
      <Projects/>
      <ContactSection/>
      <Toaster position="top-right" reverseOrder={false} />
    </main>
  );
}
