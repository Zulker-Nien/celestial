import { useSelector } from "react-redux";
import CategoryPreview from "../../components/categoryPreview/CategoryPreview";
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../store/categories/CategorySelector";
import Spinner from "../../components/spinner/Spinner";
const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} products={products} title={title} />
          );
        })
      )}
    </>
  );
};

export default CategoriesPreview;
