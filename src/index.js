import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import AppState from './context/AppState';

import App from './App';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <StrictMode>
    <AppState>
      <App />
    </AppState>
  </StrictMode>,
  rootElement,
);
