export type MenuItem = {
  id: string;
  value: string;
};

export type Menu = MenuItem[];

export type ParentMenu = Menu | null;

export type RenderMenuProps = {
  menu: Menu;
  parent?: ParentMenu;
};
