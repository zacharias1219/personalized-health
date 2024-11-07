import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";

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
      <section className="bg-gradient-to-t from-[#120633] to-[#8652D9] flex md:flex-row flex-col gap-4 p-12 items-center align-middle text-start">
          <div className="bg-white p-6 rounded-xl flex flex-col w-[320px] h-[360px]">
            <div className="flex flex-row gap-4">
              <Image src="/images/1.png" width={50} height={50} alt="image1" className="pt-2"/>
              <div>
                <div className="text-xl font-bold">AI-Powered Personalization</div>
                <div className="text-sm">Get personalized health solutions</div>
              </div>
            </div>
            <div className="pt-4">
            Thank you for building such an empowering tool, especially for designers! The site went from Figma to Framer in less than a week!
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl flex flex-col w-[320px] h-[360px]">
            <div className="flex flex-row gap-4">
              <Image src="/images/1.png" width={50} height={50} alt="image1" className="pt-2"/>
              <div>
                <div className="text-xl font-bold">AI-Powered Personalization</div>
                <div className="text-sm">Get personalized health solutions</div>
              </div>
            </div>
            <div className="pt-4">
            Thank you for building such an empowering tool, especially for designers! The site went from Figma to Framer in less than a week!
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl flex flex-col w-[320px] h-[360px]">
            <div className="flex flex-row gap-4">
              <Image src="/images/1.png" width={50} height={50} alt="image1" className="pt-2"/>
              <div>
                <div className="text-xl font-bold">AI-Powered Personalization</div>
                <div className="text-sm">Get personalized health solutions</div>
              </div>
            </div>
            <div className="pt-4">
            Thank you for building such an empowering tool, especially for designers! The site went from Figma to Framer in less than a week!
            </div>
          </div>
      </section>
      <section className="bg-[#120633] flex md:flex-row flex-col gap-4 p-12 items-center align-middle text-start">
      <div className="bg-white p-6 rounded-xl flex flex-col w-[320px] h-[360px]">
            <div className="flex flex-row gap-4">
              <Image src="/images/1.png" width={50} height={50} alt="image1" className="pt-2"/>
              <div>
                <div className="text-xl font-bold">AI-Powered Personalization</div>
                <div className="text-sm">Get personalized health solutions</div>
              </div>
            </div>
            <div className="pt-4">
            Thank you for building such an empowering tool, especially for designers! The site went from Figma to Framer in less than a week!
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl flex flex-col w-[320px] h-[360px]">
            <div className="flex flex-row gap-4">
              <Image src="/images/1.png" width={50} height={50} alt="image1" className="pt-2"/>
              <div>
                <div className="text-xl font-bold">AI-Powered Personalization</div>
                <div className="text-sm">Get personalized health solutions</div>
              </div>
            </div>
            <div className="pt-4">
            Thank you for building such an empowering tool, especially for designers! The site went from Figma to Framer in less than a week!
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl flex flex-col w-[320px] h-[360px]">
            <div className="flex flex-row gap-4">
              <Image src="/images/1.png" width={50} height={50} alt="image1" className="pt-2"/>
              <div>
                <div className="text-xl font-bold">AI-Powered Personalization</div>
                <div className="text-sm">Get personalized health solutions</div>
              </div>
            </div>
            <div className="pt-4">
            Thank you for building such an empowering tool, especially for designers! The site went from Figma to Framer in less than a week!
            </div>
          </div>
      </section>
      <section>
        <div className="py-20 bg-black">
          <div className="flex flex-col items-center gap-6 justify-center">
            <div className="text-white text-4xl font-bold pb-10">FAQ</div>
            <div className="text-black text-xl font-bold">
            <Accordion type="single" collapsible className="px-6 py-4 md:w-[1000px] w-[300px] bg-white rounded-3xl border">
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is it styled?</AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that matches the other
                  components&apos; aesthetic.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                  Yes. It's animated by default, but you can disable it if you prefer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="text-black py-20">
          <div className="flex flex-col items-center gap-6 justify-center">
            <div className="text-4xl font-bold pb-4">Sign up today</div>
            <Button className="bg-black text-white hover:bg-slate-300">Get Started</Button>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}
