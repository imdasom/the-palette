import React, { Component } from 'react';
import CollectionUtils from 'components/CollectionUtils';

class Item extends Component {
  render() {
    const item = this.props.item;
    const className = item.className;
    const randomR = CollectionUtils.get(item, 'content.r');
    const randomG = CollectionUtils.get(item, 'content.g');
    const randomB = CollectionUtils.get(item, 'content.b');
    const hex = CollectionUtils.get(item, 'content.hex');
    return (
      <div className={'place '+className} style={{backgroundColor: 'rgb('+randomR+', '+randomG+', '+randomB+')'}}>
      </div>
    );
  }
}

export default Item;