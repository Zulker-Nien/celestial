import { useDispatch } from "react-redux";
import { getCategoriesAndDocuments } from "../../utils/firebase/Firebase";
import { createAction } from "../../utils/reducer/Reducer";
import { CATEGORIES_ACTION_TYPES } from "./CategoryTypes";

export const fetchCategoriesStart = () => {
  return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, null);
};
export const fetchCategoriesSuccess = (categoriesArray: any) => {
  return createAction(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
    categoriesArray
  );
};
export const fetchCategoriesFailed = (error: any) => {
  return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);
};
