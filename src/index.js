//  Import Area
import React from 'react';
import ReactDOM from 'react-dom/client';
import Comp2 from './components/Comp2';
import Comp3 from './components/Comp3';
import {Comp1} from './components/Comp1'; // this is names import
import Comp4 from './components/Comp4';


// Let's create our component

// Classical Function defination
function App(){
  return <div>
          <Comp1 />
          <Comp2 />
          <Comp3 />
          <Comp4 />
        </div>
}

const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

