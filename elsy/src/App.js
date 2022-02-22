import React from "react";
import './App.css';
import Steps from "./components/Box";
import './styles/global.css';

const tempMin = -20,
tempMax = 40,
heartMin = 80,
heartMax = 180,
stepsMin = 0,
stepsMax = 50000;

function App() {
    return (
      <div className="container-fluid">
        <h1 className="text-primary">Hello !</h1>
        <div className="row">
          <p>Heart : {heartMin}</p>
          <p>Temperature : {tempMin}</p>
          <p>Steps : {stepsMin}</p>
          <Steps icon='local_drink' color='#3A85FF' value='1.5' unit='L'/>
          <Steps icon='directions_walk' color='black' value='3000' unit='steps'/>
          <Steps icon='favorite' color='red' value='120' unit='bpm'/>
          <Steps icon='wb_sunny' color='yellow' value='-10' unit='°C'/> 
        </div>
      </div>
    );
}

 
export default App;
