import { createContext, useEffect, useState } from "react";
import PRODUCTS from "../shopData";

// DO NOT DELETE
import { getCategoriesAndDocuments } from "../utils/firebase/Firebase";
// import SHOP_DATA from "../shopData";

interface ICategoriesContext {
  categoriesMap: any;
}

export const CategoriesContext = createContext<ICategoriesContext>({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }: any) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  //
  // DO NOT DELETE, Upload to database
  //
  // useEffect(() => {
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  // }, []);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);
  const value = { categoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
