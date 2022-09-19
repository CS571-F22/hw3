import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import BadgerBookstore from './components/BadgerBookstore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BadgerBookstore />
  </React.StrictMode>
);
