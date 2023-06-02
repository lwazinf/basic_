import BackPlate_ from "@/components/BackPlate_";
import FrontPlate_ from "@/components/FrontPlate_";
import Hero_ from "@/components/Hero_";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Hero_/>
      <div className={`w-full min-h-screen bg-[#d9dadc]`} />
    </main>
  );
}
