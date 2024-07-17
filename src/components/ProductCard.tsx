import { TProduct } from "@/types/product.type";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const ProductCard = ({
  _id,
  name,
  category,
  brand,
  price,
  image,
  quantity,
  rating,
}: TProduct) => {
  return (
    <div className="border p-3 rounded-md">
      <div>
        <img
          className="w-full aspect-video rounded-md"
          src={image}
          alt={name}
        />
      </div>
      <div className="pt-3 space-y-1">
        <div className="flex justify-between">
          <p className="text-xs bg-green-600 text-white font-medium px-2.5 py-1 rounded-md">
            {category}
          </p>
          <p>{rating}</p>
        </div>
        <h4 className="text-xl md:text-2xl font-medium">{name}</h4>

        <div className="flex justify-between">
          <p className="">Brand: {brand}</p>
          <p className="font-medium">${price}</p>
        </div>
        <p className="text-sm">Quantity: {quantity}</p>
        <div className="flex justify-between">
          <Button>
            <Link to={`/products/${_id}`}>View Details</Link>
          </Button>
          <Button className="bg-green-700 hover:bg-green-600">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
