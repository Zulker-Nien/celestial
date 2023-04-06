import { useNavigate } from "react-router-dom";
import {
  DirectoryItemContainer,
  DirectoryBodyContainer,
  BackgroundImage,
} from "./DirectoryItem.styles";

type Category = {
  imageUrl: any;
  title: string;
  route: string;
};

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);
  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <DirectoryBodyContainer>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </DirectoryBodyContainer>
    </DirectoryItemContainer>
  );
};

export default CategoryItem;
