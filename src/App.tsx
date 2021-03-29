import React from 'react';
import Container from '@material-ui/core/Container';
import MenuContainer from './containers/Menu';

import api from './api';

function App() {
  return (
    <Container maxWidth="md">
      <MenuContainer menus={api.menus} rules={api.rules} />
    </Container>
  );
}

export default App;
