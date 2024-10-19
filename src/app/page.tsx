import Header from "./components/Common/Header/Header";
import CategorySection from "./components/Home/CategorySection";
import HeroSection from "./components/Home/HeroSection/HeroSection";

export default function Home() {
  return (
    <div>
       <Header></Header>
       <HeroSection></HeroSection>
       <CategorySection></CategorySection>
    </div>
  );
}
