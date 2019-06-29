import React, { Component } from 'react';

class ColorItem extends Component {
  render() {
    const { colorHex, className } = this.props;
    return (
      <div
        className={`active place paletteItem `+className}
        style={{backgroundColor: '#'+colorHex}}
        data-item-type="COLOR"
        data-color-hex={colorHex}>
      </div>
    );
  };
}

export default ColorItem;