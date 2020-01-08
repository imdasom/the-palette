import React, {Component, Fragment} from 'react';

class DynamicChildComponent extends Component {
  onClickAddItem = (event) => {
    const { itemList, itemPolicy, eventHandlers } = this.props;
    if(itemList.length >= itemPolicy.maxItemLength) {
      alert(`max item count: ${itemPolicy.maxItemLength}`);
    } else {
      const newItemList = itemList.concat({uiItemId: new Date().getTime(), itemName: '', itemPrice: ''});
      eventHandlers.updateItemList(event, newItemList);
    }
  }
  render() {
    const { itemList } = this.props;
    const itemListComponent = itemList.map((item) =>
      <li data-testid="itemComponent" key={item.uiItemId}>
        <select>
          <option value="">팔레트 종류를 선택하세요</option>
          <option value="COLOR">색상</option>
          <option value="PATTERN">패턴</option>
          <option value="IMAGE">이미지</option>
        </select>
        <input type="text" placeholder="name" value={item.itemName}/>
      </li>
    );
    return (
      <Fragment>
        <h4>Create New Palette</h4>
        <div>
          <input type="text" placeholder="palette name"/>
        </div>
        <div>
          <button type="button" onClick={this.onClickAddItem}>+ Add Item</button>
        </div>
        <div>
          <ul>
            { itemListComponent }
          </ul>
        </div>
      </Fragment>
    );
  }
}

export default DynamicChildComponent;