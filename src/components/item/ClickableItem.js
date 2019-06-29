import React, { Component } from 'react';
import CollectionUtils from 'components/CollectionUtils';
import { Color } from 'components/item/Color';

class ClickableItem extends Component {
  constructor(props) {
    super(props);
    const { item, active } = this.props;
    this.state = {
      item: item
      ,active: active
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ ...nextProps });
  }
  shouldComponentUpdate(nextProps, nextState) {
    return !Color.equal(nextProps.item, this.props.item);
  }
  handleClick = (e) => {
    const { onClick } = this.props;
    const { item } = this.state;
    onClick(e, item.className);
  };
  render() {
    const { childComponent } = this.props;
    const { active, item } = this.state;
    const className = CollectionUtils.get(item, 'className');
    const hex = CollectionUtils.get(item, 'content.hex');
    return (
      <div onClick={this.handleClick}
           className={`place paletteItem ` + className + ` ${active && 'active'}`}
           style={{backgroundColor: '#'+hex}}>
        {childComponent}
      </div>
    );
  }
}

export default ClickableItem;