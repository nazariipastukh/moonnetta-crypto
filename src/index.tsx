import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {MainComponent} from "./components/MainComponent/MainComponent";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
  <MainComponent/>
  </>
);