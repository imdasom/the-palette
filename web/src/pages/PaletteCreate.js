import React, { Component } from 'react';
import { SketchPicker } from 'react-color'; // https://casesandberg.github.io/react-color/
import { ColorItem, ItemContainer, PaletteActions } from 'components/palette';
import { history } from 'helper/history';
import 'pages/Palettes.css';
import 'pages/PaletteCreate.css';

class PaletteCreate extends Component {
  state = {
    active: 3
    ,activeColor: {hex: 'FFFFFF'}
    ,classNames: ['c4', 'c3', 'c2', 'c1']
    ,palette: {
      items: [
        { type: 'COLOR', content: {hex: 'DDDDDD'} }
        ,{ type: 'COLOR', content: {hex: 'CCCCCC'} }
        ,{ type: 'COLOR', content: {hex: 'BBBBBB'} }
        ,{ type: 'COLOR', content: {hex: 'AAAAAA'} }
      ]
    }
  };
  getColorItems() {
    const { palette, classNames } = this.state;
    return palette.items.map(
      (item, index) => {return (
        <ColorItem
          key={index}
          id={index}
          className={classNames[index]}
          colorItem={item}
          handleClick={this.handleItemClick}
        />
      )}
    );
  }
  handleItemClick = (key) => {
    let activeItem = this.state.palette.items.filter((item, index) => index === key);
        activeItem = activeItem.length > 0 ? activeItem[0].content : {hex: 'FFFFFF'};
    this.setState({
      active: key
      ,activeColor: activeItem
    });
  };
  handleColorPickerChange = (color) => {
    const { active, palette } = this.state;
    const colorHex = color.hex.replace('#', '');
    this.setState({
      activeColor: colorHex
      ,palette: {
        items: palette.items.map((item, index) => {
          return active === index ? { ...item, content: { hex: colorHex } } : item
        })
      }
    });
  }
  submitPalette = () => {
    const success = (response) => {
      console.log(response);
      history.push(`/palette/${response.data}`);
    };
    const fail = (error) => {
      console.log(error);
    };
    PaletteActions.create(this.state.palette, success, fail);
  };
  render () {
    const items = this.getColorItems();
    const { activeColor } = this.state;
    return (
      <center>
        <h1>Create Palette</h1>
        <form>
          <div className="item">
            <ItemContainer items={items} classNames={'canvas'}/>
          </div>
          <div>
            <button
              type="button"
              className="button suggest-button"
              onClick={this.submitPalette}>
              Done
            </button>
          </div>
        </form>
        <SketchPicker
          className="sp-container"
          disableAlpha={true}
          color={activeColor}
          onChange={this.handleColorPickerChange}
        />
      </center>
    );
  }
}

export default PaletteCreate;
