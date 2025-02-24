import React from "react";
import { useSelector } from "react-redux";
import { Categories } from "../assets/mockData";
import HeroImage from "../assets/hero-page.png";
import InfoSection from "../components/InfoSection";
import CategorySection from "../components/CategorySection";
import ProductCard from "../components/ProductCard";
import Shop from "./Shop";

const Home = () => {
  const products = useSelector((state) => state.product.products); // ✅ Access products directly

  return (
    <div>
    <div className="bg-white mt-2 px-4 md:px-16 lg:px-24">
      <div className="container mx-auto py-4 flex md:flex-row space-x-2">
        <div className="w-full md:w-3/12">
          <div className="bg-red-600 text-white text-xs font-bold px-2 py-2.5">
            Shop by Category
          </div>
          <ul className="space-y-4 p-3 border bg-gray-100">
            {Categories.map((category, index) => (
              <li key={index} className="flex items-center text-sm font-medium">
                <div className="w-2 h-2 mr-2 border border-red-500 rounded-full"></div>
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-9/12 mt-8 md:mt-0 h-96 relative">
          <img src={HeroImage} alt="hero-image" className="h-full w-full" />
          <div className="absolute top-16 left-8">
            <p className="text-3xl font-bold uppercase py-2">Welcome to EShop</p>
            <p className="text-3xl font-medium uppercase py-2">
              Where the world comes to shop
            </p>
            <button className="hover:bg-red-700 transform transition-transform duration-300 hover:scale-105 text-white text-bold px-6 py-2  my-4 border border-white-600 bg-red-600 ">
              SHOP NOW!!
            </button>
          </div>
        </div>
      </div>
      <InfoSection />
      <CategorySection />
      <div className="container mx-auto py-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Top products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
          {products.slice(0, 5).map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
    <Shop/>
    </div>
  );
};

export default Home;
