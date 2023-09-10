import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { App } from './App';
import { store } from './store';

const root = createRoot(document.getElementById('app'));

root.render(
  <Provider store={store}>
    <StrictMode>
      <App name="StackBlitz" />
    </StrictMode>
  </Provider>
);
