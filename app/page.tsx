import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Team from "@/components/Team";
import Portfolio from "@/components/Portfolio";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <Services />
        <WhyChooseUs />
        <Team />
        <Portfolio />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
