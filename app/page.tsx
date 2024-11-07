import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <Header/>
      <section className="text-white p-40 bg-[conic-gradient(from_0deg_at_50%_0%,var(--tw-gradient-stops))] from-[#B28AF2] to-[#3B1FA5] flex flex-col items-center text-center gap-6">
        <div className="text-6xl font-bold">SureFit</div>
        <div className="gap-2 text-slate-50 text-2xl">
          <div>Your partner in achieving optimal health</div>
          <div>with AI based Personalization</div>
        </div>
        <div className="flex flex-row gap-4 pt-4 pb-18">
          <Button className="font-semibold shadow-md shadow-black/30 hover:bg-black/45">Get Started</Button>
          <Button className="text-black bg-white font-semibold shadow-md shadow-black/30 hover:bg-slate-300">Learn More</Button>
        </div>
      </section>
      <section>
        
      </section>
      <Footer/>
    </div>
  );
}
