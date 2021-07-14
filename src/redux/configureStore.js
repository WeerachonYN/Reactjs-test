import{createStore,applyMiddleware} from 'redux';
import{composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import rootReducer from '../Reducer/rootReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist:['cart','auth']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const middlewares = [thunk]
export default () => {
  let store = createStore(persistedReducer,composeWithDevTools(applyMiddleware(...middlewares)))
  let persistor = persistStore(store)
  return { store, persistor }
}