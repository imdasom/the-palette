import React, { Component } from 'react';
import CollectionUtils from 'components/CollectionUtils';

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
  shouldCOmponentUpdate(nextProps, nextState) {
    if(nextProps.item.content.r !== nextState.item.content.r) {
      return true;
    }
    if(nextProps.item.content.g !== nextState.item.content.g) {
      return true;
    }
    if(nextProps.item.content.b !== nextState.item.content.b) {
      return true;
    }
    return false;
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
    const r = CollectionUtils.get(item, 'content.r');
    const g = CollectionUtils.get(item, 'content.g');
    const b = CollectionUtils.get(item, 'content.b');
    return (
      <div onClick={this.handleClick}
           className={`place ` + className + ` ${active && 'active'}`}
           style={{backgroundColor: 'rgb('+r+', '+g+', '+b+')'}}>
        {childComponent}
      </div>
    );
  }
}

export default ClickableItem;