import {
  compose,
  applyMiddleware,
  legacy_createStore as createStore,
} from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { RootReducer } from "./RootReducer";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import { rootSaga } from "./RootSaga";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, RootReducer);

const sagaMiddleware = createSagaMiddleware();

const middleWare = [logger, sagaMiddleware].filter(Boolean);
// const middleWare = [process.env.NODE_ENV !== "production" && logger].filter(Boolean);
// const composeEnhancer =
//   (process.env.NODE_ENV !== "production" &&
//     window &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;
const composeEnhancers = compose(applyMiddleware(...middleWare));
export const store = createStore(persistedReducer, undefined, composeEnhancers);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
