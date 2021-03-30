import { ActionKindEnum, ActionType, StateType } from './types';

export default function reducer(state: StateType, action: ActionType): StateType {
  const { type, payload } = action;

  switch (type) {
    case ActionKindEnum.Update: {
      const updatedState = state.filter((item) => item.menuId !== payload.menuId);
      return [...updatedState, payload];
    }

    default:
      return state;
  }
}
