import Header from "./components/Common/Header/Header";
import CategorySection from "./components/Home/CategorySection";
import HeroSection from "./components/Home/HeroSection/HeroSection";
import "@/app/styles/home.css";
import SearchByIndustry from "./components/Home/SearchByIndustry";

export default function Home() {
  return (
    <div>
       <Header></Header>
       <HeroSection />
       <CategorySection></CategorySection>
       <SearchByIndustry></SearchByIndustry>
    </div>
  );
}
