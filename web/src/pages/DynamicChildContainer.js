import React, {Component, Fragment} from 'react';
import { DynamicChildComponent } from "components/dynamicchild";

class DynamicChildContainer extends Component {
  state = {
    itemList: []
    , itemPolicy: {
      maxItemLength: 5
    }
  };
  updateItemList = (event, newItemList) => {
    this.setState({itemList: newItemList});
  };
  render() {
    const { itemList, itemPolicy } = this.state;
    return (
      <Fragment>
        <h2>Dynamic Child UI Test Page</h2>
        <DynamicChildComponent
          itemList={itemList}
          eventHandlers={{
            updateItemList: this.updateItemList
          }}
          itemPolicy={itemPolicy}
        />
      </Fragment>
    );
  }
}

export default DynamicChildContainer;