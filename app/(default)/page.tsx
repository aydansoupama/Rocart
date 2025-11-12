import HeroSection from "@/components/sections/home/hero";
import HowItWorksSection from "@/components/sections/home/how-it-works";
import TrendingNowSection from "@/components/sections/home/trending-now";
import TrustedSection from "@/components/sections/home/trusted";
import WhyChooseSection from "@/components/sections/home/why-choose";
import FAQSection from "@/components/sections/home/faq";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const Home = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <>
      <Header user={session?.user} />
      <main className="scroll-smooth">
        <HeroSection />
        <TrendingNowSection />
        <TrustedSection />
        <WhyChooseSection />
        <HowItWorksSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
};

export default Home;
