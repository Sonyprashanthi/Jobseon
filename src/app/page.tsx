import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import FeaturedCategories from "../components/FeaturedCategories";
import PopularCompanies from "../components/PopularCompanies";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h1 className="text-5xl font-bold text-blue-600">
          Find Your Dream Job
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Search jobs from LinkedIn, Indeed, Glassdoor and more
        </p>

        <SearchBar />
        <FeaturedCategories />  
        <PopularCompanies />
      </main>
    </>
  );
}