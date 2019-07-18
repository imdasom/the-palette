import React, { Component } from 'react';
import { LikeButton, ItemContainer } from 'components/palette';

class Palette extends Component {
  render () {
    const { items, like, date, focused, itemContainerClassNames } = this.props;
    const prettyDate = date.getFullYear() + '/' + date.getMonth() + '/' + date.getDate();
    return (
      <div className={`item block shadow ${focused ? "focus":""}`}>
        <ItemContainer items={items} classNames={itemContainerClassNames}/>
        <LikeButton like={like}/>
        <span className="date">{prettyDate}</span>
      </div>
    );
  }
};

export default Palette;
