import { useContext, useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import { CategoryContainer, CategoryTitle } from "./Category.styles";
import { CategoriesContext } from "../../contexts/CategoriesContext";
import ProductCard from "../../components/productCard/ProductCard";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(category && categoriesMap[category]);

  useEffect(() => {
    category && setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <>
      <CategoryTitle>{category?.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map((product: any) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </CategoryContainer>
    </>
  );
};

export default Category;
