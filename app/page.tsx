import Hero from "./_components/Hero";
import TechStack from "./_components/TechStack";


export default function Home() {
  return (
    <main className="bg-primary  w-full flex flex-col p-0 m-0 justify-center items-center ">
      <Hero/>
      <TechStack/>
    </main>
  );
}
