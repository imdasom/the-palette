import React, { Component } from 'react';

class ColorItem extends Component {
  handleClick = () => {
    const { id, handleClick } = this.props;
    handleClick(id);
  };
  render() {
    const { key, id, colorItem, className } = this.props;
    const colorHex = colorItem.content.hex;
    return (
      <div
        key={key}
        data-testid={`ColorItem`+id}
        id={id}
        className={`place paletteItem `+className}
        style={{backgroundColor: '#'+colorHex}}
        onClick={this.handleClick}>
        <span onClick={`copy(&quot;`+colorHex+`&quot;, this)`}>#{colorHex}</span>
      </div>
    );
  };
}

export default ColorItem;