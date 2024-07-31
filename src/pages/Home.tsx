import AllCategory from "@/components/AllCategory";
import ContactUs from "@/components/ContactUs";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";
import Slider from "@/components/Slider";

const Home = () => {
  return (
    <>
      <Slider />
      <FeaturedProducts />
      <AllCategory />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;
