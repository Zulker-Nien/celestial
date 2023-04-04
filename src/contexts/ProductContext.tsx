import { createContext, useState } from "react";
import PRODUCTS from "../shopData.json";

interface IProductContext {
  products: any;
}

export const ProductsContext = createContext<IProductContext>({
  products: [],
});

export const ProductProvider = ({ children }: any) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
