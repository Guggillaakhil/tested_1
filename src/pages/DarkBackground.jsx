import React,{ useState } from 'react';

const DarkBackground = () => {
    const [color, setColor] = useState();

   

    return (
        <div style={{ backgroundColor: color, height: "50vh", display: "flex", justifyContent: "center", alignItems: "center",margin:"100px" }}>
            <button className='btn btn-outline-red' onClick={()=>{setColor("blue")}}>
              Blue
            </button>
            <button className='btn btn-outline-red' onClick={()=>{setColor("Green")}}>
              Green
            </button>
            <button className='btn btn-outline-red' onClick={()=>{setColor("yellow")}}>
              yellow
            </button>
            <button className='btn btn-outline-red' onClick={()=>{setColor("violet")}}>
              violet
            </button>
        </div>
    );
}

export default DarkBackground;
