import Animations from "@/components/animations/Animations";
import Footer from "@/components/footer/Footer";
import NavbarContainer from "@/components/navbar/NavbarContainer";
import BannerOne from "@/pages/home-one/BannerOne";
// import HomeThreeBanner from "@/pages/home-three/HomeThreeBanner";
import HomeOneFaq from "@/pages/home-one/HomeOneFaq";
import HomeOneFinancialPlanning from "@/pages/home-one/HomeOneFinancialPlanning";
import HomeOneInfo from "@/pages/home-one/HomeOneInfo";
import HomeOneMission from "@/pages/home-one/HomeOneMission";
import HomeOneOurTeam from "@/pages/home-one/HomeOneOurTeam";
import HomeOnePricingPlan from "@/pages/home-one/HomeOnePricingPlan";
import HomeOneRecentBlog from "@/pages/home-one/HomeOneRecentBlog";
import HomeOneService from "@/pages/home-one/HomeOneService";
import HomeOneTestimonials from "@/pages/home-one/HomeOneTestimonials";
import HomeThreeBanner from "@/pages/home-three/HomeThreeBanner";
import NavbarContainerTwo from "@/components/navbar/NavbarContainerTwo";
import { Metadata } from "next";
import HomeThreeService from "@/pages/home-three/HomeThreeService";
import HomeThreeAbout from "@/pages/home-three/HomeThreeAbout";
import OurWorks from "@/pages/home-three/OurWorks"

export const metadata: Metadata = {
  title: "Home One - Banking Solutions for Businesses NextJs Template",
  description: "Banking Solutions for Businesses NextJs Template",
};

export default function Home() {
  return (
    <div>
       <NavbarContainerTwo />
      {/* <BannerOne /> */}
      <HomeThreeBanner />
      <HomeThreeAbout/>
      <HomeThreeService/>
      <OurWorks/>
      {/* <HomeOneService /> */}
      <HomeOneFinancialPlanning />
      {/* <HomeOnePricingPlan /> */}
      <HomeOneTestimonials />
      {/* <HomeOneOurTeam /> */}
      {/* <HomeOneFaq /> */}
      <HomeOneInfo />
      <HomeOneRecentBlog />
      <Footer />
      <Animations />
    </div>
  );
}
