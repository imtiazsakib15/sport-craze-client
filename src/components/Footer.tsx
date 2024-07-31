import { Link } from "react-router-dom";
import Container from "./Container";
import Facebook from "@/assets/icons/Facebook";
import Instagram from "@/assets/icons/Instagram";
import Twitter from "@/assets/icons/Twitter";

const Footer = () => {
  return (
    <footer className="bg-gray-800 pt-10 sm:pt-14 lg:pt-20 border-t">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 pb-5 sm:pb-8 gap-10">
          <div className="col-span-2">
            <Link to="/" className="flex items-center space-x-2">
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-100">
                Sport<span className="text-blue-900">Craze</span>
              </h3>
            </Link>
            <p className="mt-4 text-gray-300">
              Your go-to destination for high-quality sporting goods, offering
              the latest gear and equipment for every sport. Experience top
              brands and unbeatable prices with our easy-to-navigate online
              store.
            </p>
          </div>

          <div className="col-span-1">
            <h4 className="font-semibold text-gray-100">Important Links</h4>

            <div className="mt-3 grid space-y-3">
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-300 hover:text-gray-200"
                  to="/"
                >
                  Home
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-300 hover:text-gray-200"
                  to="/about-us"
                >
                  About Us
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-300 hover:text-gray-200"
                  to="/all-products"
                >
                  All Products
                </Link>
              </p>
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="font-semibold text-gray-100">Follow Us On</h4>

            <div className="mt-4 space-x-2">
              <Link
                className="inline-flex justify-center items-center gap-x-3.5 w-10 h-10 text-center text-gray-200 hover:bg-white/[.1] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-900 transition"
                to="/"
              >
                <Facebook />
              </Link>
              <Link
                className="inline-flex justify-center items-center gap-x-3.5 w-10 h-10 text-center text-gray-200 hover:bg-white/[.1] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-900 transition"
                to="/"
              >
                <Instagram />
              </Link>
              <Link
                className="inline-flex justify-center items-center gap-x-3.5 w-10 h-10 text-center text-gray-200 hover:bg-white/[.1] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-900 transition"
                to="/"
              >
                <Twitter />
              </Link>
            </div>
          </div>
        </div>
        <hr />
        <div className="py-5 sm:py-8 text-center">
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()}{" "}
            <Link className="underline" to="/">
              SportCraze
            </Link>
            . All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
