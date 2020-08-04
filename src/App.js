import React from 'react';
import images from './data.js';
import './App.css';
import ImageList from './ImageList.js';

function App() {
  return (
    <ImageList images={images} />
  );
}

export default App;
