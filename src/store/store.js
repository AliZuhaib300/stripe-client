// import { createStore } from "redux";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

// import { reducers } from "../reducer";

// const persistConfig = {
//   key: "root",
//   storage,
// };

// // const persistedReducer = persistReducer(persistConfig, reducers);

// const reducers = persistCombineReducers(config, {reducer});
// // export default () => {
// //   let store = createStore(persistedReducer);
// //   let persistor = persistStore(store);
// //   return { store, persistor };
// // };
// export const configureStore = () => {
//     const store = createStore(reducers, middleware);
//     const persistor = persistStore(store);
//     return { persistor, store };
//   };
import { applyMiddleware, createStore } from "redux";
import { persistStore, persistCombineReducers } from "redux-persist";
import storage from "redux-persist/es/storage"; // default: localStorage if web, AsyncStorage if react-native
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";
import { reducers } from "../reducer";

// const middleware = applyMiddleware(thunk);

const config = {
  key: "root",
  storage,
};

const reducer = persistCombineReducers(config, { reducers });

export const configureStore = () => {
  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
  );
  const persistor = persistStore(store);
  return { persistor, store };
};
