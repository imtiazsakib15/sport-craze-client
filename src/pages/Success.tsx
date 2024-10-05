import { Button } from "@/components/ui/button";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import successAnimation from "@/assets/lottieImage/success.json";
import Container from "@/components/Container";

const Success = () => {
  return (
    <Container>
      <div className="grid h-[90vh] px-4 bg-white place-content-center">
        <div className="text-center">
          <Lottie
            className="max-w-80 mx-auto"
            animationData={successAnimation}
            loop={false}
          />

          <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Success
          </p>

          <p className="mt-4 text-gray-700 sm:text-lg">
            Your order has been successfully placed.
          </p>

          <Link
            to="/"
            className="inline-block mt-6 text-sm font-medium rounded focus:outline-none focus:ring"
          >
            <Button>Go to home page</Button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Success;
