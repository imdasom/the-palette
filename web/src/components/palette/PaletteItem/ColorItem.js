import React, { Component } from 'react';

class ColorItem extends Component {
  handleClick = () => {
    const { id, handleClick } = this.props;
    if(handleClick) {
      handleClick(id);
    }
  };
  handleCopyClick = (event, colorHex) => {
    const input = document.createElement('input');
    input.value = colorHex;
    event.currentTarget.appendChild(input);
    input.select();
    document.execCommand('copy'); //TODO 테스트에서는 호출불가능함. 보완필요
    event.currentTarget.removeChild(input);
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
        <span onClick={(event)=>{this.handleCopyClick(event, colorHex)}}>#{colorHex}</span>
      </div>
    );
  };
}

export default ColorItem;