
import Categories from "./home/Categories";
import Products from "./home/Products";
import Products2 from "./home/Products2";
import Collections from "./home/Collections";
import Banner from "./home/Banner";
import Features from "./home/Features";
import Banner2 from "./home/Banner2";
import Testimonials from "./home/Testimonials";
import Features2 from "./home/Features2";
import Hero from "./home/Hero";
import MarqueeLogo from "@/components/Marquee";
const metadata = {
  title: "Home || Leading IT Product Supplier in GCC and Africa | BAIT AL WAHDA",
  description: "BAWC || Leading IT Product Supplier in GCC and Africa | BAIT AL WAHDA",
};

export default function HomePage() {
  return (
    <>
      <div className="bg-surface-2 home-phonecase">

        <Hero />
        <MarqueeLogo />
        <Categories />
        <Products />
        <Collections />
        <Banner />
        <Features />
        <Testimonials />
        <Features2 />

      </div>
    </>
  );
}
