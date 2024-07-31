import AllCategory from "@/components/AllCategory";
import ContactUs from "@/components/ContactUs";
import FeaturedProducts from "@/components/FeaturedProducts";
import Slider from "@/components/Slider";

const Home = () => {
  return (
    <>
      <Slider />
      <FeaturedProducts />
      <AllCategory />
      <ContactUs />
    </>
  );
};

export default Home;
