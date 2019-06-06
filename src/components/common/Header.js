import React from "react";

let style = {height:"50px",backgroundColor:"#ffffff", border:"1px solid", borderColor:"black"};

const HeaderPage = () => {
    return (
        <div style={style}>
            <h2 style={{textAlign:"center", margin:"5px 5px"}}>Header</h2>
        </div>
    );
}

export default HeaderPage;