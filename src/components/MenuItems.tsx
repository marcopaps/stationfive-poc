import React from 'react';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { MenuItem } from '../types';

type PropsType = {
  menuId: string;
  menuItems: MenuItem[];
  // eslint-disable-next-line react/require-default-props
  selectedItemId?: string;
  isMenuDisabled: boolean;
  disabledItems: string[];
  onSelectMenuItem: (menuId: string, selectedItemId: string) => void;
};

export default function MenuItems(props: PropsType) {
  const { menuId, menuItems, selectedItemId, isMenuDisabled, disabledItems, onSelectMenuItem } = props;

  const onChange = (selectedId: string) => {
    onSelectMenuItem(menuId, selectedId);
  };

  return (
    <>
      {menuItems.map((item) => {
        const { id, value } = item;

        const isItemDisabled = isMenuDisabled || disabledItems.includes(id);
        const isItemChecked = selectedItemId === id && !isItemDisabled;

        return (
          <FormControlLabel
            key={id}
            value={value}
            control={<Radio checked={isItemChecked} onChange={() => onChange(id)} disabled={isItemDisabled} />}
            label={value}
          />
        );
      })}
    </>
  );
}
