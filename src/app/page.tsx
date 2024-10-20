import "@/app/styles/home.css";
import Header from "./components/Common/Header";
import HeroSection from "./components/Home/HeroSection";
import CategorySection from "./components/Home/CategorySection";
import SearchByIndustry from "./components/Home/SearchByIndustry";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <CategorySection />
      <SearchByIndustry />

      {/* <FunctionalArea /> */}
    </div>
  );
}
