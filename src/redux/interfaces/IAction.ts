import { Action } from 'redux';

export default interface IAction<T, P = any> extends Action<T> {
  payload: P;
}
