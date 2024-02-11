import { HeroSection } from "@/components/section/Hero-section";
import { Product } from "@/components/section/Product";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 ">
      <HeroSection />
      <Product />
    </div>
  );
};

export default Home;
