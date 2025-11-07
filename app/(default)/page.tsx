import Header from "@/components/layouts/Header";
import HeroSection from "@/components/sections/home/hero";
import HowItWorksSection from "@/components/sections/home/how-it-works";
import TrendingNowSection from "@/components/sections/home/trending-now";
import TrustedSection from "@/components/sections/home/trusted";
import WhyChooseSection from "@/components/sections/home/why-choose";

const Home = async () => {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <TrendingNowSection />
        <TrustedSection />
        <WhyChooseSection />
        <HowItWorksSection />
      </main>
    </>
  );
};

export default Home;
