import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="grid h-screen px-4 bg-white place-content-center">
      <div className="text-center">
        <h1 className="font-black text-gray-200 text-7xl sm:text-8xl lg:text-9xl">
          404
        </h1>

        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Uh-oh!
        </p>

        <p className="mt-4 text-gray-500">We can&apos;t find that page.</p>

        <Link
          to="/"
          className="inline-block mt-6 text-sm font-medium rounded focus:outline-none focus:ring"
        >
          <Button>Go to home page</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
