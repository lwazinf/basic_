import BackPlate_ from "@/components/BackPlate_";
import FrontPlate_ from "@/components/FrontPlate_";
import Hero_ from "@/components/Hero_";
import Nav_ from "@/components/Nav_";
import Services_ from "@/components/Services_";
import Study_ from "@/components/Study_";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Hero_ />
      <div className={`w-full min-h-[100vh] bg-[#d9dadc] flex flex-col justify-start items-center`}>
      <Services_/>
      <Study_/>
      </div>
      <Nav_ />
    </main>
  );
}
