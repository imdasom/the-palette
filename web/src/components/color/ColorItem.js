import React, { Component } from 'react';

class ColorItem extends Component {
  render() {
    const { colorHex, className } = this.props;
    return (
      <div
        className={`place paletteItem `+className}
        style={{backgroundColor: '#'+colorHex}}>
      </div>
    );
  };
}

export default ColorItem;