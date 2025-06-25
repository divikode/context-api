import React, { useContext } from "react";
import nodeContext from "../context/nodes/nodeContext";

const Subchild= ()=>{
    const a= useContext(nodeContext);
    return(
        <>
        {a.name}
        Subchild
        </>
    )
}

export default Subchild;