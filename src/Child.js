import React from 'react';
import './App.css';

function Child({setRoot}) {

    return (
        <div className="child">
        <h1>Child.js</h1>
        <br/><br/>
        <select id="rootSelect" onChange={e=> setRoot(e.target.value)}>
            <option value=" " selected="selected">- Select Root -</option>
            <option value="C">C</option>
            <option value="C#">C#</option>
            <option value="D">D</option>
            <option value="Eb">Eb</option>
            <option value="E">E</option>
            <option value="F">F</option>
            <option value="F#">F#</option>
            <option value="G">G</option>
            <option value="G#">G#</option>
            <option value="A">A</option>
            <option value="Bb">Bb</option>
            <option value="B">B</option>
        </select>
    </div>
    );

    
}

export default Child;
