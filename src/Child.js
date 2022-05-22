import React from 'react';
import './App.css';

function Child(props) {

// () => props.changeRoot(e.target.value)
    return (
        <div className="child">
        <h1>Child.js</h1>
        <br/><br/>
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
        <br/><br/>
        <button className="btn" onClick={() => props.changeRoot('should print: rootSelect.selectedIndex[].value')}>Send Selection</button>
        <br/><br/>
    </div>
    );
    
}

export default Child;
