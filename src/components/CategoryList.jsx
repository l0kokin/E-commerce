import { useContext, useEffect } from "react";
import { ProductContext } from "../context/context";
import { ButtonYellow, Categories, CategoryItem } from "./CategoryListStyles";
import women from "../images/categoryWomen.webp";
import men from "../images/categoryMen.jpeg";
import jewlery from "../images/categoryJewlery.avif";
import electronics from "../images/categoryElectronics.jpg";
import { Link } from "react-router-dom";

function CategoryList() {
  return (
    <Categories>
      <Category />
    </Categories>
  );
}

function Category() {
  const { categories, products, fetchCategories } = useContext(ProductContext);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const getCategoryImage = (category) => {
    let image = "";

    switch (category) {
      case "women's clothing":
        image = women;
        break;
      case "men's clothing":
        image = men;
        break;
      case "jewelery":
        image = jewlery;
        break;
      case "electronics":
        image = electronics;
        break;
      default:
        image = women;
    }

    return image;
  };

  useEffect(() => {
    console.log("Categories in CategoryList:", categories);
  }, [categories]);

  return (
    <>
      {categories.map((category, index) => (
        <CategoryItem key={index}>
          <h3>{category}</h3>
          <img src={getCategoryImage(category)} alt={category} />
          <Link to={`/products?category=${encodeURIComponent(category)}`}>
            <ButtonYellow>See More</ButtonYellow>
          </Link>
        </CategoryItem>
      ))}
    </>
  );
}

export default CategoryList;
