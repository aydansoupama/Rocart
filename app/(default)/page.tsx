import Header from "@/components/layouts/Header";
import HeroSection from "@/components/sections/home/hero";
import TrendingNowSection from "@/components/sections/home/trending-now";

const Home = async () => {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <TrendingNowSection />
      </main>
    </>
  );
};

export default Home;
