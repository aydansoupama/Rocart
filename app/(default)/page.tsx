import Header from "@/components/layouts/Header";
import HeroSection from "@/components/sections/home/hero";
import TrendingNowSection from "@/components/sections/home/trending-now";
import TrustedSection from "@/components/sections/home/trusted";

const Home = async () => {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <TrendingNowSection />
        <TrustedSection />
      </main>
    </>
  );
};

export default Home;
