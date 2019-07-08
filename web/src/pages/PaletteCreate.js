import React, { Component } from 'react';
import { SketchPicker } from 'react-color'; // https://casesandberg.github.io/react-color/
import './Palettes.css';
import './PaletteCreate.css';
import { ColorItem } from '../components/color';

class PaletteCreate extends Component {
  render () {
    const colorHex = ['AAAAAA', 'BBBBBB', 'CCCCCC', 'DDDDDD'];
    const className = ['c4', 'c3', 'c2', 'c1'];
    const items = colorHex.map((item, index) => <ColorItem className={className[index]} colorHex={item} />);
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
          color='FFFFFF'
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
export default PaletteCreate;