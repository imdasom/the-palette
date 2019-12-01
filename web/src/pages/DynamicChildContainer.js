import React, {Component, Fragment} from 'react';
import { DynamicChildComponent } from "components/dynamicchild";

class DynamicChildContainer extends Component {
  state = {
    optionList: []
    , optionPolicy: {
      maxOptionLength: 5
    }
  };
  updateOptionList = (event, newOptionList) => {
    this.setState({optionList: newOptionList});
  }
  render() {
    const { optionList, optionPolicy } = this.state;
    return (
      <Fragment>
        <h2>Menu Page</h2>
        <DynamicChildComponent
          optionList={optionList}
          eventHandlers={{
            updateOptionList: this.updateOptionList
          }}
          optionPolicy={optionPolicy}
        />
      </Fragment>
    );
  }
}

export default DynamicChildContainer;