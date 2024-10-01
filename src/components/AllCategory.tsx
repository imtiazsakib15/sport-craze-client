import { Link } from "react-router-dom";
import Container from "./Container";
import { categories } from "@/constants/category.constant";
import { TCategory } from "@/types/category.type";

const AllCategory = () => {
  return (
    <div>
      <Container>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center leading-tight font-bold">
          All Category
        </h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-6">
          {categories?.map((category: TCategory) => (
            <Link
              to={`/products?category=${category.name.toLowerCase()}`}
              key={category.name}
              className="group border border-blue-700 rounded-full aspect-square flex flex-col justify-center items-center p-5 overflow-hidden"
            >
              <img
                className="group-hover:scale-105"
                src={category.image}
                alt={category.name}
              />
              <h3 className="text-xl font-semibold py-4">{category.name}</h3>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AllCategory;
