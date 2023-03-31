import CategoryItem from "../category-item/CategoryItem";
import "./Directory.styles.scss";
const Directory = ({ categories }: any) => {
  return (
    <div className="directory-container">
      {categories.map((category: any) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
