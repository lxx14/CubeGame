import { combineReducers, Reducer } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginReducer from '@screens/Login/redux/reducer';
import AvatarReducer from '@screens/TabScreens/Statistic/UserShortInfo/EditAvatarComponent/redux/reducer';

const identityConfig = {
  key: 'identity',
  storage: AsyncStorage,
  blacklist: ['isLoading'],
};

const allReducers = combineReducers({
  login: persistReducer(identityConfig, LoginReducer),
  avatar: persistReducer(identityConfig, AvatarReducer),
});

const rootReducer: Reducer = (state, action) => {
  return allReducers(state, action);
};

export { rootReducer };
