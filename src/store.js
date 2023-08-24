import { createStore } from "redux";
import { rootReducer } from "./Redux/rootReducer";
export const store = createStore(
    rootReducer /* preloadedState, */,
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
  );