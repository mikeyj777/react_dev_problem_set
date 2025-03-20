import {React} from 'react';
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
Write the code to create a simple functional React component named Welcome that renders a heading with the text "Hello, World!".

*/

const Welcome = ({ name = "World" }) => {

  return (
    <div>
      <h1>Hello, {name}!</h1>
    </div>
  );
}

Welcome.propTypes = {
  name: PropTypes.string
};

// Welcome.defaultProps = {
//   name: "AI Overlords!"
// };


export default Welcome;