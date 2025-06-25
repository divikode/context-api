import React from "react";
import nodeContext from "./nodeContext";

const NodeState = (props) => {
  const node = { name: "Divyansh", number: 987654324567 };
  return (
    <nodeContext.Provider value={node}>
      {props.children}
    </nodeContext.Provider>
  );
};
export default NodeState;