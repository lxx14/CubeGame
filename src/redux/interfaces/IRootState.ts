import { ILoginState } from '@screens/Login/redux/interfaces';
import { IUsersState } from '@screens/TabScreens/GameDashboard/redux/interfaces';
import { IAvatar } from '@screens/TabScreens/Statistic/UserShortInfo/EditAvatarComponent/redux/interfaces';

export default interface IRootState {
  login: ILoginState;
  avatar: IAvatar;
  oneUpUsers: IUsersState;
}
