import Header from "@/components/layouts/Header";
import HeroSection from "@/components/sections/home/hero";
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
      </main>
    </>
  );
};

export default Home;
