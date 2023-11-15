import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Start from "@/components/Start";
import Testimonials3 from "@/components/Testimonials3";
import IntakeForm from "@/components/IntakeForm";
import Pricing from "@/components/Pricing";

export default function Page() {
  return (
    <>
      <Header/>
      <Start/>
      <CTA/>
      <Hero/>
      <Testimonials3/>
      <Pricing/>
      <FAQ/>
      <Footer/>
    </>
  );
}
