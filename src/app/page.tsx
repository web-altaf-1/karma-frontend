import Header from "./components/Common/Header/Header";
import CategorySection from "./components/Home/CategorySection";
import HeroSection from "./components/Home/HeroSection/HeroSection";
import "@/app/styles/home.css";
import SearchByIndustry from "./components/Home/SearchByIndustry";
import FunctionalArea from "./components/Home/FunctionalArea/FunctionalArea";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <CategorySection />
      <SearchByIndustry />

      <FunctionalArea />
    </div>
  );
}
