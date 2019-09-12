import React from 'react';
import './App.css';
import ColorBox from './components/colorBox/ColorBox';
import { ColorProvider } from './contexts/color';
import SelectColors from './components/selectColor/SelectColor';

function App() {
  return (
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
}

export default App;
