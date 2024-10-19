import Header from "./components/Common/Header/Header";
import HeroSection from "./components/Home/HeroSection/HeroSection";
import "@/app/styles/home.css";

export default function Home() {
  return (
    <div>
       <Header></Header>
       <HeroSection />
    </div>
  );
}
