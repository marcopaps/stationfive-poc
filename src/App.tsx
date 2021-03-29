import React from 'react';
import Menu from './containers/Menu';
import api from './api';

function App() {
  return (
    <div>
      <Menu menus={api.menus} />
    </div>
  );
}

export default App;
