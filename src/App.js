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
        <script type="text/javascript">
        </script>
        <Child 
        changeRoot={root => setRoot(root)}/>
    </div>
    </div>
  );
}

export default App;
