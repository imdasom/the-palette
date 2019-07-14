import React, { Component } from 'react';

class LikeButton extends Component {
  render () {
    const { like } = this.props;
    return (
      <div className="like button">
        <img alt="Color Hunt Palettes Heart Icon" src={window.location.origin + `/img/color-hunt-palettes-icon-heart.png`} />
        <span>{like}</span>
      </div>
    );
  }
}

export default LikeButton;