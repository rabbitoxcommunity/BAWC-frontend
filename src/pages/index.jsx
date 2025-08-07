
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
import Marquee from "@/components/Marquee";
const metadata = {
  title: "Home || Leading IT Product Supplier in GCC and Africa | BAIT AL WAHDA",
  description: "BAWC || Leading IT Product Supplier in GCC and Africa | BAIT AL WAHDA",
};

export default function HomePage() {
  return (
    <>
      <div className="bg-surface-2 home-phonecase">

        <Hero />
         <Marquee />
        <Categories />
        <Products />
        <Collections />
        <Banner />
        <Features />
        {/* <Products2 /> */}
        {/* <Banner2 /> */}
        <Testimonials />
        <Features2 />

      </div>
    </>
  );
}
