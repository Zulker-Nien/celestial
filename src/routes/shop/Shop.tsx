import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../categoriesPreview/CategoriesPreview";
import Category from "../category/Category";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCategoriesStart } from "../../store/categories/CategoryAction";
const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch<any>(fetchCategoriesStart());
  }, []);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
