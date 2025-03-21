import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

/*

Notes for Claude - thank you for your help in reviewing this submitted component.  this is a submission for a problem
in a Problem Set for React Development.

Please review the component and provide feedback using the sandwich technique.  

In your feedback, ensure that you confirm that the approach provided addresses the stated problem as well as your other
analysis.

The following assumptions apply unless otherwise noted:
1.  Assume for all problems that there is an App.js which imports the component and uses appropriate routing for this component.
2.  The styling classes referenced in this component are imported directly to App.js thru a global css file, so there are 
    no references in this component to css files.

Problem:
Create a functional component called `Counter` that displays a number and two buttons: one to increment the counter and one to decrement it. Use React hooks to manage the state.
*/

const P006 = ({ num = 10 }) => {
  const [currNum, setCurrNum] = useState(num);

  const handlePlus = () => {
    setCurrNum(currNum + 1);
  } 

  const handleMinus = () => {
    setCurrNum(currNum - 1);
  }


  return (
    <div className="counter-container">
      <button
        className="decrement"
        onClick={handleMinus}>
        -
      </button>
      <h1>{currNum}</h1>
      <button
        className="increment"
        onClick={handlePlus}>
        +
      </button>
    </div>
  );

} 

export default P006;