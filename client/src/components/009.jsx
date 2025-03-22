import React, { createContext, useState, useEffect } from 'react';
import Inner009 from './009inner';

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

  Create a React component that uses the Context API to provide and consume a theme (light/dark) for styling components.

Notes:

  -The "change theme" scheme is updated following feedback from AI.  Originally, the button to change the theme was in the parent
  however, the handler and any controls should be able to be used from a child.  this required setting the handler 
  inside of the dictionary.

*/

export const ThemeContext = createContext({
  theme: 'light',
  changeTheme: () => {}
});

const P009 = () => {
  
  const [themeDict, setThemeDict] = useState({
    theme: 'light',
    changeTheme: () => {}
  });
  
  useEffect(() => {
  
    setThemeDict(prevDict => ({
      ...prevDict,
      changeTheme: () => {
        setThemeDict(current => ({
          ...current,
          theme: current.theme === 'light' ? 'dark' : 'light'
        }));
      }
    }));
  
  }, []);
  return (
    <div>
      <ThemeContext.Provider value={themeDict}>
        <Inner009 />
      </ThemeContext.Provider>
    </div>
  );

}

export default P009;