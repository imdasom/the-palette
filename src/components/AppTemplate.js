import React from 'react';
import './AppTemplate.css';
import 'components/palette/Palette.css';

const AppTemplate = ({palettes}) => {
  return (
    <div className="app-template">
      <div>
        <div className="colorPalettes">{palettes}</div>
      </div>
    </div>
  );
};

export default AppTemplate;