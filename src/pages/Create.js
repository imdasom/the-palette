import React, { Component } from 'react';
import { SketchPicker } from 'react-color'; // https://casesandberg.github.io/react-color/
import ColorItemInput from 'components/color/ColorItemInput';
import * as paletteApi from 'pages/PalettesApi';
import 'pages/Palettes.css';
import 'pages/Create.css';

class Create extends Component {
  state = {
    selected: 'c1'
    ,colorPicked: {hex: 'FFFFFF'}
    ,items: [
      {
        id: 'c4'
        ,className: 'c4'
        ,content: {hex: 'AAAAAA'}
      }
      ,{
        id: 'c3'
        ,className: 'c3'
        ,content: {hex: 'BBBBBB'}
      }
      ,{
        id: 'c2'
        ,className: 'c2'
        ,content: {hex: 'CCCCCC'}
      }
      ,{
        id: 'c1'
        ,className: 'c1'
        ,content: {hex: 'DDDDDD'}
      }
    ]
  };
  handleChange = (color, event) => {
    const { selected, items } = this.state;
    const colorHex = color.hex.replace('#', '');
    const content = {
      hex: colorHex
    };
    this.setState({
      colorPicked: colorHex
      ,items: items.map(
        item => selected === item.id
          ? { ...item, content: content }
          : item
      )
    });
  };
  submitPalette = (e) => {
    const palette = {
      author: 'daim'
      ,name: 'spring color'
      ,items: [
        {
          type: 'COLOR'
          ,content: {
            hex: 'FEC1CA'
          }
        }
        ,{
          type: 'COLOR'
          ,content: {
            hex: 'F9CD9C'
          }
        }
        ,{
          type: 'COLOR'
          ,content: {
            hex: 'CCF79B'
          }
        }
        ,{
          type: 'COLOR'
          ,content: {
            hex: '82B6EE'
          }
        }
      ]
    };
    paletteApi.create(palette);
  };
  handleClick = (e, itemId) => {
    // 여기서 this는 누구?
    const { items } = this.state;
    let colorPicked = items.filter(item => itemId === item.id);
        colorPicked = colorPicked.length === 1 ? colorPicked[0].content : {hex:'000000'};
    this.setState({selected: itemId, colorPicked: colorPicked});
  };
  getItemComponentList() {
    const { selected } = this.state;
    return this.state.items.map(
      (item) => (
        <ColorItemInput
          active={selected === item.id}
          onClick={this.handleClick}
          item={item}
          key={item.id}>
        </ColorItemInput>
      )
    );
  }
  render() {
    const { colorPicked } = this.state;
    const items = this.getItemComponentList();
    return (
      <div id="feed">
        <h2>Create Palette</h2>
        <form>
          <div className="item">
            <div className="canvas">
              {items}
            </div>
          </div>
          <div className="center">
            <input type="text" placeholder="name your palette"/>
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
          disableAlpha={true}
          color={colorPicked}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Create;