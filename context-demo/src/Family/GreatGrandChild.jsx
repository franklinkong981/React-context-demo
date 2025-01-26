import React,{useContext} from "react";
import GreatGreatGrandChild from "./GreatGreatGrandChild";
import CountContext from "./CountContext";

function GreatGrandChild() {
  const count = useContext(CountContext);
  return (
    <div style={{border: '4px solid #7FDBFF', margin: '1rem'}}>
      <p>I'm a great-grandchild!</p>
      <p>Count is: {count}</p>
      <GreatGreatGrandChild/>
    </div>
  );
}

export default GreatGrandChild;