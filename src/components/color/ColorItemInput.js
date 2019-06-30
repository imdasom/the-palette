import React, { Component } from 'react';
import CollectionUtils from 'components/CollectionUtils';
import ColorItem from 'components/color/ColorItem';
import { Color } from 'components/color/Color';

class ColorItemInput extends Component {
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
    const { active, item } = this.state;
    const className = CollectionUtils.get(item, 'className');
    const hex = CollectionUtils.get(item, 'content.hex');
    return (
      <div>
        <div onClick={this.handleClick}
             className={`${active && 'active'}`}>
          <ColorItem className={className} colorHex={hex}/>
        </div>
      </div>
    );
  }
}

export default ColorItemInput;