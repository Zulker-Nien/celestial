import {
  compose,
  applyMiddleware,
  Middleware,
  legacy_createStore as createStore,
} from "redux";
import { persistStore, persistReducer, PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { RootReducer } from "./RootReducer";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import { rootSaga } from "./RootSaga";

export type RootState = ReturnType<typeof RootReducer>;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

type ExtendedPersistConfig = PersistConfig<RootState> & {
  whitelist: (keyof RootState)[];
};
const persistConfig: ExtendedPersistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, RootReducer);

const sagaMiddleware = createSagaMiddleware();

const middleWare = [logger, sagaMiddleware].filter(Boolean);
// const middleWare = [process.env.NODE_ENV !== "production" && logger].filter(
//   (middleware): middleware is Middleware => Boolean(middleWare)
// );
const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const composeEnhancers = composeEnhancer(applyMiddleware(...middleWare));
export const store = createStore(persistedReducer, undefined, composeEnhancers);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
