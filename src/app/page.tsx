import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedCategories from "../components/FeaturedCategories";
import PopularCompanies from "../components/PopularCompanies";
import LatestJobs from "@/components/LatestJobs";
import WhyChoose from "@/components/WhyChoose";
import Testimonials from "@/components/Testimonials";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedCategories />
      <PopularCompanies />
      <LatestJobs />
      <WhyChoose />
      <Testimonials />
      <Footer />
    </>
  );
}