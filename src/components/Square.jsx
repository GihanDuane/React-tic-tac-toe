// import { useState } from "react";

function Square({value, onsquareClick}) {
    // const [value, setvalue] = useState(null);

    // function handleCLick () {
    //     // console.log("clicked!")
    //     setvalue("X");
    // }

    return (
    <button className="square" onClick={onsquareClick}>{value}</button>
    )
};
export default Square;