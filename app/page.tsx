import { HeroSection } from "@/components/section/Hero-section";
import { HowItWorks } from "@/components/section/How-it-works-section";
import { Product } from "@/components/section/Product";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 ">
      <HeroSection />
      <Product />
      <HowItWorks />
    </div>
  );
};

export default Home;
