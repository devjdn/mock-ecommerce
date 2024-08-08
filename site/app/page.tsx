import Image from "next/image";
import HomeListings from "@/components/home-listings";
import ProductSearch from "@/components/product-search";
import CategoryNav from "@/components/category-nav";

export default function Home() {
  return (
    <main className="flex gap-6">
      <CategoryNav/>
      <div className="flex flex-col gap-6">
        <ProductSearch/>
        <HomeListings/>
      </div>
    </main>
  );
}
