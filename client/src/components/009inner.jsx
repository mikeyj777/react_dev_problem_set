import React, {useContext, useState} from 'react';
import { ThemeContext } from './009';

const Inner009 = () => {
  const themeDict = useContext(ThemeContext);

  return (
    <div>
      <button
          onClick={themeDict.changeTheme}>
          Change that Theme, bruv!
      </button>
      <div className={themeDict.theme}>Hello World!</div>
    </div>
  );

}

export default Inner009;