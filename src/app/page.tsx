import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedCategories from "../components/FeaturedCategories";
import PopularCompanies from "../components/PopularCompanies";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedCategories />
      <PopularCompanies />
    </>
  );
}