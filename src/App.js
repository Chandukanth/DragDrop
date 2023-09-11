import React from 'react';
import './App.css';

import FilterContainer from './FilterContainer';
import DragDropMenu from './DragDropContext';

function App() {
  return (
    <div>
      <FilterContainer />
      <div className="App">
        <DragDropMenu />
      </div>
    </div>
  );
}

export default App;
