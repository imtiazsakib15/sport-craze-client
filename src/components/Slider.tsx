import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Container from "./Container";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import img1 from "./../assets/images/img1.jfif";
import img2 from "./../assets/images/img2.jpg";
import img3 from "./../assets/images/img3.jpg";

const Slider = () => {
  return (
    <Container>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="lg:h-[calc(100vh-72px)]"
      >
        <SwiperSlide>
          <div className="h-full flex flex-col md:flex-row items-center gap-6 lg:gap-14 py-8 sm:py-12">
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-semibold text-gray-700 lg:pb-1">
                Summer Sale!
              </h3>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl leading-tight font-bold pb-5 md:pb-8">
                Get up to <span className="text-red-600">30%</span> off on all
                sports shoes
              </h1>
              <Button>
                <Link to={"/all-products"}>Shop Now</Link>
              </Button>
            </div>
            <div className="flex-1 h-full">
              <img
                className="w-full h-full rounded-xl"
                src={img1}
                alt="Shoe Image"
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-full flex flex-col md:flex-row items-center gap-6 lg:gap-14 py-8 sm:py-12">
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-semibold text-gray-700 lg:pb-1">
                New Arrivals!
              </h3>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl leading-tight font-bold pb-5 md:pb-8">
                Check out the latest collection of cricket bats
              </h1>
              <Button>
                <Link to={"/all-products"}>Explore Now</Link>
              </Button>
            </div>
            <div className="flex-1 h-full">
              <img
                className="h-full mx-auto rounded-xl"
                src={img2}
                alt="Cricket Bat"
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-full flex flex-col md:flex-row items-center gap-6 lg:gap-14 py-8 sm:py-12">
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-semibold text-gray-700 lg:pb-1">
                Limited Time Offer!
              </h3>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl leading-tight font-bold pb-5 md:pb-8">
                Save <span className="text-red-600">40%</span> on selected gym
                equipment
              </h1>
              <Button>
                <Link to={"/all-products"}>Shop Now</Link>
              </Button>
            </div>
            <div className="flex-1 h-full">
              <img
                className="h-full mx-auto rounded-xl"
                src={img3}
                alt="GYM Equipment"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Slider;
