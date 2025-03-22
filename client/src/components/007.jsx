import React, { useState } from "react";

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

Write a React component that fetches data from an API when it mounts and displays the results in a list. Handle the loading and error states appropriately.

*/

// const apiUrl = process.env.REACT_APP_API_URL;
const apiUrl = "http://localhost:5000";

const P007 = () => {
  // state managed display message
  const [factsArray, setFactsArray] = useState([]);


  // fetch data from api
  const handleSubmit = async () => {

    try {
      const response = await fetch(`${apiUrl}/api/fact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: '' }) // leaving the fuller "body" field here for future use in more advanced post calls
      });
      const data = await response.json();
      const status = data.status;
      if (status == 'success') {
        setFactsArray([...factsArray, data.result]);
      }
    }
    catch {
      console.log('could not get data from API.');
    }
  };


  return (
    <div>
      {/*message */}
      <div>
        {factsArray.map((fact, index) =>{
          return (<p key={index}>{fact}</p>)
        })}
      </div>

      {/*button to get updated message */}
      <button
        onClick={handleSubmit}>
        New Facts, no Waiting!
      </button>

    </div>
  )

}

export default P007;