import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import UserPage from './page/UserPage';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <UserPage />
  </React.StrictMode>,
);