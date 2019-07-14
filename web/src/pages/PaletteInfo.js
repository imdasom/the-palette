import React, { Component } from 'react';
import { ColorItem, Palette } from 'components';
import './Palettes.css';
import './PaletteInfo.css';

class PaletteInfo extends Component {
  state = {
    classNames: ['c4', 'c3', 'c2', 'c1']
    ,palette: {
      items: [
        { type: 'COLOR', content: {hex: 'AAAAAA'} }
        ,{ type: 'COLOR', content: {hex: 'BBBBBB'} }
        ,{ type: 'COLOR', content: {hex: 'CCCCCC'} }
        ,{ type: 'COLOR', content: {hex: 'DDDDDD'} }
      ]
    }
  };
  getColorItems = () => {
    const { palette, classNames } = this.state;
    return palette.items.map(
      (item, index) => {return (
        <ColorItem
          key={index}
          id={index}
          className={classNames[index]}
          colorItem={item}
        />
      )}
    );
  }
  render() {
    const items = this.getColorItems();
    const like = 20;
    const date = new Date();
    return (
      <div id="container" className="wrap">
        <div id="feed">
          <Palette
            items={items}
            like={like}
            date={date}
            itemContainerClassNames={'palette'}
          />
        </div>
      </div>
    );
  }
}

export default PaletteInfo;