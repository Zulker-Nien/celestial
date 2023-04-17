import { all, call } from "typed-redux-saga/macro";
import { categoriesSaga } from "./categories/CategorySaga";
import { userSagas } from "./user/UserSaga";
export function* rootSaga() {
  yield* all([call(categoriesSaga), call(userSagas)]);
}
