import api from '../api';

export type MenuItem = {
  id: string;
  value: string;
};

export type Menu = MenuItem[];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type RulesType = typeof api.rules | any;

export enum ActionKindEnum {
  Update = 'UPDATE',
}

export type MenuStateType = {
  menuId: string;
  selectedItemId: string;
};

export type StateType = MenuStateType[];

export type ActionType = {
  type: ActionKindEnum;
  payload: MenuStateType;
};
