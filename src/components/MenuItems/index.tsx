import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Radio from '../Radio';
import { RenderMenuProps } from '../../../types';

function MenuItems(props: RenderMenuProps) {
  const { menu } = props;

  return (
    <>
      {menu.map((menuItem) => {
        const { id, value } = menuItem;
        return <FormControlLabel key={id} value={value} control={<Radio />} label={value} />;
      })}
    </>
  );
}

export default MenuItems;
