import React, { Component } from 'react';
import { SketchPicker } from 'react-color'; // https://casesandberg.github.io/react-color/
import './Create.css';
import ClickableItem from 'components/item/ClickableItem';

class Create extends Component {
  state = {
    selected: 'c1'
    ,colorPicked: {r: 0, g: 0, b: 0}
    ,items: [
      {
        id: 'c4'
        ,className: 'c4'
        ,content: {r: 170, g: 170, b: 170}
      }
      ,{
        id: 'c3'
        ,className: 'c3'
        ,content: {r: 187, g: 187, b: 187}
      }
      ,{
        id: 'c2'
        ,className: 'c2'
        ,content: {r: 204,g: 204,b: 204}
      }
      ,{
        id: 'c1'
        ,className: 'c1'
        ,content: {r: 221, g: 221, b: 221}
      }
    ]
  };
  handleChange = (color, event) => {
    const { selected, items } = this.state;
    this.setState({
      colorPicked: color.rgb
      ,items: items.map(
        item => selected === item.id
          ? { ...item, content: color.rgb }
          : item
      )
    });
  };
  handleClick = (e, itemId) => {
    const { items } = this.state;
    let colorPicked = items.filter(item => itemId === item.id);
        colorPicked = colorPicked.length === 1 ? colorPicked[0].content : {r:0,g:0,b:0};
    this.setState({selected: itemId, colorPicked: colorPicked});
  };
  getItemComponentList() {
    const { selected } = this.state;
    return this.state.items.map(
      (item) => (
        <ClickableItem
          active={selected === item.id}
          onClick={this.handleClick}
          item={item}
          key={item.id}>
        </ClickableItem>
      )
    );
  }
  render() {
    const { colorPicked } = this.state;
    const items = this.getItemComponentList();
    return (
      <div id="feed">
        <h2>Create Palette</h2>
        <center>
          <div className="item">
            <div className="canvas">
              {items}
            </div>
          </div>
          <div>
            <SketchPicker
              color={colorPicked}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <a className="button suggest-button">Done</a>
          </div>
        </center>
      </div>
    );
  }
}

export default Create;