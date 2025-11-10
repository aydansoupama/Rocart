import HeroSection from "@/components/sections/home/hero";
import HowItWorksSection from "@/components/sections/home/how-it-works";
import TrendingNowSection from "@/components/sections/home/trending-now";
import TrustedSection from "@/components/sections/home/trusted";
import WhyChooseSection from "@/components/sections/home/why-choose";
import FAQSection from "@/components/sections/home/faq";

const Home = async () => {
  return (
    <>
      <HeroSection />
      <TrendingNowSection />
      <TrustedSection />
      <WhyChooseSection />
      <HowItWorksSection />
      <FAQSection />
    </>
  );
};

export default Home;
