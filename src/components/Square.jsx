import { useState } from "react";

function Square() {
    const [value, setvalue] = useState(null);

    function handleCLick () {
        // console.log("clicked!")
        setvalue("X");
    }
    
    return (
    <button className="square" onClick={handleCLick}>{value}</button>
    )
};
export default Square;