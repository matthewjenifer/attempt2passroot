import React, { useState } from 'react';
import './App.css';
import Child from './Child';

function App() {
  
  // let selection = document.getElementById('rootSelect');
  // let r = selection.selectedIndex;
  const [root, setRoot] = useState('placeholder');



  return (
    <div className="floor">
    <div className="parent">
        <h1>{root}</h1>
        <div id="rootMenu">
        <select id="rootSelect">
            <option value=" " selected="selected">- Select Root -</option>
            <option value="1">C</option>
            <option value="2">C#</option>
            <option value="3">D</option>
            <option value="4">Eb</option>
            <option value="5">E</option>
            <option value="6">F</option>
            <option value="7">F#</option>
            <option value="8">G</option>
            <option value="9">G#</option>
            <option value="10">A</option>
            <option value="11">Bb</option>
            <option value="12">B</option>
        </select>
        </div> 
        <script type="text/javascript">
        </script>
        <Child 
        changeRoot={root => setRoot(root)}/>
    </div>
    </div>
  );
}

export default App;
