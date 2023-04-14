import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
// import { reducers } from "./reducer";
import App from "./App";
import "./index.css";
// import { composeWithDevTools } from "redux-devtools-extension";
// import authReducer from "./reducer/auth";

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, reducers);

// export default () => {
//   let store = createStore(persistedReducer);
//   let persistor = persistStore(store);
//   return { store, persistor };
// };

// const store = createStore(
//   reducers,
//   composeWithDevTools(applyMiddleware(thunk))
// );

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );
import { PersistGate } from "redux-persist/integration/react";
//  import App from "./App";
// import ReactDOM from "react-dom";
import { configureStore } from "./store/store";
const { persistor, store } = configureStore();
// ... normal setup, create store and persistor, import components etc.

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
