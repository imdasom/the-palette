import React, { Component } from 'react';
import { LikeButton, ItemContainer } from 'components/palette';

class Palette extends Component {
  render () {
    const { items, likeButtonProps, date, focused, liked, itemContainerClassNames } = this.props;
    const prettyDate = date.getFullYear() + '/' + date.getMonth() + '/' + date.getDate();
    return (
      <div className={`item block shadow ${focused ? "focus":""} ${liked ? "liked":""}`}>
        <ItemContainer items={items} classNames={itemContainerClassNames}/>
        <LikeButton {...likeButtonProps}/>
        <span className="date">{prettyDate}</span>
      </div>
    );
  }
};

export default Palette;
