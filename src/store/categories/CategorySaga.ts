import { takeLatest, all, call, put } from "redux-saga/effects";
import { getCategoriesAndDocuments } from "../../utils/firebase/Firebase";
import {
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} from "./CategoryAction";

import { CATEGORIES_ACTION_TYPES } from "./CategoryTypes";

// export const fetchCategoriesAsync = () => async (dispatch: any) => {
//   dispatch(fetchCategoriesStart());

// };

export function* fetchCategoriesAsync(): any {
  try {
    const categoriesArray = yield call(getCategoriesAndDocuments);
    yield put(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    yield put(fetchCategoriesFailed(error));
  }
}

export function* onFetchCategories() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}
