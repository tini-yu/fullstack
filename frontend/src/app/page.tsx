import Footer from "@/components/Footer";
import HeaderMenu from "@/components/HeaderMenu";
import Carousel from "@/components/Carousel";
import MiniPromo from "@/components/MiniPromo";
import Advantages from "@/components/Advantages";
import TopCategory from "@/components/TopCategory";
import NewCategory from "@/components/NewCategory";
import SaleCategory from "@/components/SaleCategory";



export default function Home() {
  return (
    <div>
      <HeaderMenu />
      <Carousel />
      <TopCategory />
      <NewCategory />
      <MiniPromo />
      <SaleCategory />
      <Advantages />
      <Footer />
    </div>
  );
}
