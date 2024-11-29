import React from "react";
import Hero from "../components/front/Hero";
import CategorySelection from "../components/front/CategorySelection";
import FeaturedProducts from "../components/front/FeaturedProducts";
import Subscribe from "../components/front/Subscribe";

export default function page() {
  return (
    <>
      <Hero />
      <div className="flex w-full flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CategorySelection />
        <FeaturedProducts />
        <Subscribe/>
      </div>
    </>
  );
}
