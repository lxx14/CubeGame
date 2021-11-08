import { combineReducers, Reducer } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginReducer from '@screens/Login/redux/reducer';

const identityConfig = {
  key: 'identity',
  storage: AsyncStorage,
  blacklist: ['isLoading'],
};

const allReducers = combineReducers({
  login: persistReducer(identityConfig, LoginReducer),
});

const rootReducer: Reducer = (state, action) => {
  return allReducers(state, action);
};

export { rootReducer };
