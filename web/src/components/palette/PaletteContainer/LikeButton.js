import React, { Component } from 'react';

class LikeButton extends Component {
  render () {
    const { like, handleClick } = this.props;
    return (
      <div className="like button" onClick={handleClick}>
        <img alt="Color Hunt Palettes Heart Icon" src={window.location.origin + `/img/color-hunt-palettes-icon-heart.png`} />
        <span>{like}</span>
      </div>
    );
  }
}

export default LikeButton;