import React, { useEffect, useReducer, useState } from 'react';
import Grid from '@material-ui/core/Grid';

import ContainerGrid from '../../components/ContainerGrid';
import RadioGroup from '../../components/RadioGroup';
import MenuItems from '../../components/MenuItems';
import MenuHeader from '../../components/MenuHeader';
import Button from '../../components/Button';

import reducer from '../../reducer';
import { Menu, RulesType, ActionKindEnum } from '../../types';

type PropsType = {
  menus: Menu[];
  rules: RulesType;
};

function MenuContainer(props: PropsType) {
  const { menus, rules } = props;

  const [isSubmitDisabled, setIsSubmitDisabled] = useState<boolean>(true);
  const [state, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    const allSelectedItems = state.filter((stateItem) => stateItem.selectedItemId);

    if (allSelectedItems.length === menus.length) {
      return setIsSubmitDisabled(false);
    }

    return setIsSubmitDisabled(true);
  }, [menus.length, state]);

  const getAPIIncompatibleItems = (menuId: string) => {
    const numberIds: number[] = rules[+menuId] || []; // shorthand for converting e.g "100" - 100
    return numberIds.map((id: number) => String(id));
  };

  const getMenuState = (menuId: number) => {
    return state.find((item) => item.menuId === String(menuId));
  };

  const onSelectMenuItem = (menuId: string, selectedItemId: string) => {
    const incompatibleItems = getAPIIncompatibleItems(selectedItemId);
    const incompatibleMenus = state.filter((stateItem) => {
      return incompatibleItems.includes(stateItem.selectedItemId);
    });

    const incompatibleMenuIds = incompatibleMenus?.map((menu) => +menu.menuId);

    if (incompatibleMenuIds.length > 0) {
      const lowestId = Math.min(...incompatibleMenuIds);

      let menusToDisable: number[] = [];

      for (let i = lowestId; i <= menus.length; i += 1) {
        menusToDisable = [...menusToDisable, i];
      }

      menusToDisable.map((id) => {
        return dispatch({
          type: ActionKindEnum.Update,
          payload: { menuId: String(id), selectedItemId: '' },
        });
      });
    }

    dispatch({
      type: ActionKindEnum.Update,
      payload: { menuId, selectedItemId },
    });
  };

  const renderMenus = () => {
    return menus.map((menu) => {
      const id = menus.indexOf(menu);

      const currentMenuState = getMenuState(id);
      const parentMenuState = getMenuState(id - 1);

      const selectedItemId = currentMenuState?.selectedItemId;
      const isMenuDisabled = !parentMenuState?.selectedItemId && id !== 0;

      const disabledItems = state.map((stateMenu) => {
        return getAPIIncompatibleItems(stateMenu.selectedItemId);
      });

      return (
        <Grid item xs={12} md={4} key={id}>
          <MenuHeader>{`Menu ${id + 1}`}</MenuHeader>
          <RadioGroup>
            <MenuItems
              menuId={String(id)}
              menuItems={menu}
              selectedItemId={selectedItemId}
              isMenuDisabled={isMenuDisabled}
              disabledItems={disabledItems.flat()}
              onSelectMenuItem={onSelectMenuItem}
            />
          </RadioGroup>
        </Grid>
      );
    });
  };

  return (
    <div>
      <ContainerGrid container spacing={8}>
        {renderMenus()}
        <Button variant="outlined" color="secondary" size="large" disabled={isSubmitDisabled}>
          Submit
        </Button>
      </ContainerGrid>
    </div>
  );
}

export default MenuContainer;
