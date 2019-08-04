import React, { Component } from 'react';

class ItemContainer extends Component {
  render () {
    const { items, classNames } = this.props;
    return (
      <div className={classNames}>
        {items}
      </div>
    );
  }
}

export default ItemContainer;
