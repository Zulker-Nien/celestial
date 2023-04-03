import CategoryItem from "../categoryItem/CategoryItem";
import "./Directory.styles.scss";
const Directory = ({ categories }: any) => {
  return (
    <div className="directoryContainer">
      {categories.map((category: any) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
