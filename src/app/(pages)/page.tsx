import "@/app/styles/home.css";
import Header from "../components/common/Header";
import HeroSection from "../components/home/HeroSection";
import CategorySection from "../components/home/CategorySection";
import SearchByIndustry from "../components/home/SearchByIndustry";
import FunctionalArea from "../components/home/FunctionalArea";

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
