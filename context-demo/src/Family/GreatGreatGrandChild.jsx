import React,{useContext} from "react";
import CountContext from "./CountContext";

function GreatGreatGrandChild() {
  const count = useContext(CountContext);
  return (
    <div style={{border: '4px solid yellowgreen', margin: '1rem'}}>
      <p>I'm a great-great-grandchild!</p>
      <p>I also consume count: {count}</p>
    </div>
  );
}

export default GreatGreatGrandChild;