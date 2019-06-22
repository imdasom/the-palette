import React, { Component } from 'react';
import Color from 'components/item/Color';
import CollectionUtils from 'components/CollectionUtils';

const ItemType = {
  COLOR: 'COLOR'
  , IMAGE: 'IMAGE'
  , INLINE_DATA: 'INLINE_DATA'
};

class Palette extends Component {
  render() {
    const { palette } = this.props;
    const id = CollectionUtils.get(palette, 'id');
    const items = CollectionUtils.get(palette, 'items');
    const itemComponents = items.map(
      item => {
        switch(item.type) {
          case ItemType.COLOR:
            return (
              <Color className={item.className} item={item}/>
            );
          default:
            throw new Error('unknwon item type : ', item);
        }
      }
    );
    return (
      <div className="item block shadow" data-id={id} style={{animationDelay: '0ms'}}>
        <div className="palette">
          {itemComponents}
        </div>
        <div className="like button" onClick={'like('+id+')'}>
          <img alt="Color Hunt Palettes Heart Icon" src="/img/color-hunt-palettes-icon-heart.png" />
            <span>11</span>
        </div>
        <span className="date">Today</span>
      </div>
    );
  }
}

export default Palette;
