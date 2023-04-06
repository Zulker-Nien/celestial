import { Link } from "react-router-dom";
import ProductCard from "../productCard/ProductCard";
import {
  Preview,
  CategoryPreviewContainer,
  CategoryTitle,
} from "./CategoryPreview.styles";

const CategoryPreview = ({ title, products }: any) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        {title && (
          <CategoryTitle to={title}>{title.toUpperCase()}</CategoryTitle>
        )}
      </h2>
      <Preview>
        {products
          .filter((_: any, idx: any) => idx < 4)
          .map((product: any) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
