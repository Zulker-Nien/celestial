import { useContext } from "react";
import { CategoriesContext } from "../../contexts/CategoriesContext";
import CategoryPreview from "../../components/categoryPreview/CategoryPreview";
const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} products={products} title={title} />
        );
      })}
    </>
  );
};

export default CategoriesPreview;
