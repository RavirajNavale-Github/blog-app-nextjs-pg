import Hero from "@/app/components/Hero";
import AboutUs from "@/app/aboutus/page";
import ContactUs from "@/app/contactus/page";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <ContactUs />
    </div>
  );
}
