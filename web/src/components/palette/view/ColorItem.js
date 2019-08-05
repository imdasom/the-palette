import React, { Component } from 'react';
import { CopiedTip } from 'components/palette';

class ColorItem extends Component {
  state = {
    copiedTipVisible: false
  };
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
    this.setState({copiedTipVisible: true});
    setTimeout(()=>{
      this.setState({copiedTipVisible: false});
    }, 3000);
  };
  render() {
    const { copiedTipVisible } = this.state;
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
        {
          copiedTipVisible ? <CopiedTip/> : ''
        }
      </div>
    );
  };
}

export default ColorItem;