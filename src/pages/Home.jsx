import React from "react";
import { useSelector } from "react-redux";
import { Categories } from "../assets/mockData";
import HeroImage from "../assets/hero-page.jpg";
import InfoSection from "../components/InfoSection";
import CategorySection from "../components/CategorySection";
import ProductCard from "../components/ProductCard";
import Shop from "./Shop";

const Home = () => {
  const products = useSelector((state) => state.product.products); // ✅ Access products directly

  return (
    <div className="bg-white mt-2 px-4 sm:px-4 md:px-16 lg:px-24">
  <div className="container mx-auto py-4 flex flex-col md:flex-row md:space-x-2 space-y-4 md:space-y-0">
    {/* Categories Section */}
    <div className="w-full md:w-3/12">
      <div className="bg-red-600 text-white text-xs font-bold px-2 py-2.5 text-center">
        Shop by Category
      </div>
      <ul className="space-y-3 p-3 border bg-gray-100">
        {Categories.map((category, index) => (
          <li key={index} className="flex items-center text-sm font-medium">
            <div className="w-2 h-2 mr-2 border border-red-500 rounded-full"></div>
            <span>{category}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* Hero Section */}
    <div className="w-full md:w-9/12 mt-4 md:mt-0 h-[350px] md:h-96 relative">
      <img
        src={HeroImage}
        alt="hero-image"
        className="h-full w-full object-cover rounded-lg bg-cover bg-center brightness-50"
      />
      <div className="absolute top-12 sm:top-16 left-4 sm:left-8">
        <p className="text-xl sm:text-3xl font-bold uppercase py-1 sm:py-2 text-white">
          Welcome to EShop
        </p>
        <p className="text-lg sm:text-3xl font-medium uppercase py-1 sm:py-2 text-white">
          Where the world comes to shop
        </p>
        <button className="hover:bg-red-700 transform transition-transform duration-300 hover:scale-105 text-white font-bold px-4 sm:px-6 py-2 my-2 sm:my-4 border border-white-600 bg-red-600">
          SHOP NOW!!
        </button>
      </div>
    </div>
  </div>

  {/* Additional Sections */}
  <InfoSection />
  <CategorySection />

  {/* Top Products Section */}
  <div className="container mx-auto py-8 sm:py-12">
    <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">
      Top Products
    </h2>
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 cursor-pointer">
      {products.slice(0, 5).map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  </div>

  <Shop />
</div>

  );
};

export default Home;
