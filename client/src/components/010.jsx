import React, { useState } from 'react';
import Button from './ui/Button';

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
3.  Any minimal styling, or lack thereof, is intentional.  Unless specified in the problem statement, do not critique styling.

Problem:

Implement a reusable Button component that accepts different styling props (size, color, variant) and an onClick handler. Demonstrate how to use it in a parent component.

*/

const sizes = ["small", "large"];
const colors = ["redColor", "blueColor"];
const variants = ["rounded", "square"];

const P010 = () => {

  const [size, setSize] = useState(sizes[0]);
  const [color, setColor] = useState(colors[0]);
  const [variant, setVariant] = useState(variants[1]);

  const handleClick = () => {
    setSize(sizes[Math.floor(Math.random() * sizes.length)]);
    setColor(colors[Math.floor(Math.random() * colors.length)]);
    setVariant(variants[Math.floor(Math.random() * variants.length)]);
  }

  return (
    <div>

      <Button 
        size={size}
        color={color}
        variant={variant}
        onClick={handleClick}
        text={"From P010"}>
      </Button>
    </div>
  );

}

export default P010;