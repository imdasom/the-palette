import React, { Component } from 'react';
import CollectionUtils from 'components/CollectionUtils';

class Color extends Component {
  render() {
    const item = this.props.item;
    const className = item.className;
    const randomR = CollectionUtils.get(item, 'content.r');
    const randomG = CollectionUtils.get(item, 'content.g');
    const randomB = CollectionUtils.get(item, 'content.b');
    const hex = CollectionUtils.get(item, 'content.hex');
    return (
      <div className={'place '+className} style={{backgroundColor: 'rgb('+randomR+', '+randomG+', '+randomB+')'}}>
        <a href="/palette/151737"></a>
        <span onClick="copy(&quot;2b580c&quot;, this)">{hex}</span>
      </div>
    );
  }
}

export default Color;