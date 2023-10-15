import { useState } from "react";
import "./ColorPicker.css";

function ColorPicker({colors, changeBgColor}){

    const [isClosed, setIsClosed] = useState(false);

    const onClickColor = (color) =>{
        setIsClosed(true);
        changeBgColor(color);
    } 

    return(
        <div className="colorPicker">
            {isClosed ? null : 
            <ul className="colorsList">
                {colors.map((color) =>{
                    return(
                        <li 
                        onClick={()=>{onClickColor(color)}}
                        style={{backgroundColor:color}}
                        className="colorsListElement"
                        />
                    )
                })}
            </ul>
            }   

            <button 
            className="button"
            onClick={() => {setIsClosed(!isClosed)}}
            >Pick a color
            </button>
        </div>
    )

}

export default ColorPicker;