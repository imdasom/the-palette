import React, { Component } from 'react';
import { LikeButton, ItemContainer } from 'components';

class Palette extends Component {
  render () {
    const { items, like, date, itemContainerClassNames } = this.props;
    const prettyDate = date.getFullYear() + '/' + date.getMonth() + '/' + date.getDate();
    return (
      <div className="item block shadow focus">
        <ItemContainer items={items} classNames={itemContainerClassNames}/>
        <LikeButton like={like}/>
        <span className="date">{prettyDate}</span>
      </div>
    );
  }
};

export default Palette;
