import { ActionKindEnum, ActionType, StateType } from './types';

export default function reducer(state: StateType, action: ActionType): StateType {
  const { type, payload } = action;

  switch (type) {
    case ActionKindEnum.Update:
      // eslint-disable-next-line no-case-declarations
      const replacedState = state.filter((item) => item.menuId !== payload.menuId);
      return [...replacedState, payload];

    default:
      return state;
  }
}
