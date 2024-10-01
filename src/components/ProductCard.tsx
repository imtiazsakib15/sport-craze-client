import { TProduct } from "@/types/product.type";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import ReactStars from "react-stars";
import { ArrowRight } from "lucide-react";

const ProductCard = (product: TProduct) => {
  const { _id, name, category, price, image, quantity, rating } = product;

  return (
    <div className="border p-3 rounded-md">
      <div className="relative">
        <img
          className="w-full aspect-video rounded-md"
          src={image}
          alt={name}
        />
        <Badge className="absolute text-sm top-3 right-3 px-2 py-1">
          ${price}
        </Badge>
      </div>
      <div className="pt-3 space-y-1">
        <div className="flex justify-between items-center">
          <p className="text-xs bg-green-600 text-white font-medium px-2 py-1 rounded-md">
            {category}
          </p>
          <ReactStars
            className="w-max"
            count={5}
            value={rating}
            edit={false}
            size={20}
            color2={"#ffbb00"}
          />
        </div>
        <h4 className="text-xl md:text-2xl font-medium line-clamp-1">{name}</h4>

        <p className="text-sm font-medium pt-1">Qty: {quantity}</p>
        <div className="flex justify-between items-center">
          <Link
            to={`/products/${_id}`}
            className="underline font-medium flex items-center gap-1"
          >
            View Details <ArrowRight className="size-5" />
          </Link>
          <Button className="bg-green-700 hover:bg-green-600">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
