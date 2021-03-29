import React from 'react';

import Grid from '../../components/Grid';
import RadioGroup from '../../components/RadioGroup';
import MenuItems from '../../components/MenuItems';

import { Menu } from '../../../types';

type PropsType = {
  menus: Menu[];
};

function MenuContainer(props: PropsType) {
  const { menus } = props;

  const mainMenu = menus[0];
  const secondMenu = menus[1];
  const finalMenu = menus[2];

  return (
    <div>
      <Grid container>
        <Grid sm={12} md={3}>
          <RadioGroup>
            <MenuItems menu={mainMenu} />
          </RadioGroup>
        </Grid>
        <Grid sm={12} md={3}>
          <RadioGroup>
            <MenuItems menu={secondMenu} parent={mainMenu} />
          </RadioGroup>
        </Grid>
        <Grid sm={12} md={3}>
          <RadioGroup>
            <MenuItems menu={finalMenu} parent={secondMenu} />
          </RadioGroup>
        </Grid>
      </Grid>
    </div>
  );
}

export default MenuContainer;
