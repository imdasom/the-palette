import React, {Component, Fragment} from 'react';

class DynamicChildComponent extends Component {
  onClickAddOption = (event) => {
    const { optionList, optionPolicy, eventHandlers } = this.props;
    if(optionList.length >= optionPolicy.maxOptionLength) {
      alert(`max option count: ${optionPolicy.maxOptionLength}`);
    } else {
      const newOptionList = optionList.concat({uiOptionId: new Date().getTime(), optionName: '', optionPrice: ''});
      eventHandlers.updateOptionList(event, newOptionList);
    }
  }
  render() {
    const { optionList } = this.props;
    const optionListComponent = optionList.map((option) =>
      <li data-testid="optionComponent" key={option.uiOptionId}>
        <input type="text" placeholder="option name" value={option.optionName}/>
        <input type="text" placeholder="option price" value={option.optionPrice}/>
      </li>
    );
    return (
      <Fragment>
        <h4>Option Group</h4>
        <input type="text" placeholder="option group name"/>
        <button type="button" onClick={this.onClickAddOption}>+ Add Option</button>
        <div>
          <ul>
            { optionListComponent }
          </ul>
        </div>
      </Fragment>
    );
  }
}

export default DynamicChildComponent;