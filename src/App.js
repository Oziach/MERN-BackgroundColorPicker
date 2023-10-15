
import './App.css';
import ColorPicker from './components/ColorPicker';
import { useState } from 'react';


function App() {

  const [currentColor, setCurrentColor] = useState("#FFFFFF") 

  const colors = ["#FF00FF", "#FFFF00", "#00FFFF", "#FFFFFF", 
      "#8888FF", "#448844", "#894352", "#098424", "#AA88BB", "#2387BA", "#ABCDEF"]

  const changeBgColor = (color) =>{
    setCurrentColor(color);
  }


  return (
    <div className='reactApp'>
      <h1>Color Picker</h1>
      <div className='innerContainer' style={{backgroundColor:currentColor}}>

        <ColorPicker colors={colors} changeBgColor={changeBgColor} />
      </div>
    </div>
  );
}

export default App;
