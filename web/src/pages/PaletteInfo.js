import React, { Component } from 'react';
import { ColorItem, Palette, PaletteActions } from 'components/palette';
import './Palettes.css';
import './PaletteInfo.css';

class PaletteInfo extends Component {
  state = {
    classNames: ['c4', 'c3', 'c2', 'c1']
    ,palette: {
      items: [
        { type: 'COLOR', content: {hex: 'AAAAAA'} }
        ,{ type: 'COLOR', content: {hex: 'BBBBBB'} }
        ,{ type: 'COLOR', content: {hex: 'CCCCCC'} }
        ,{ type: 'COLOR', content: {hex: 'DDDDDD'} }
      ]
      ,like: 0
    }
  };
  constructor(props) {
    super(props);
    PaletteActions.getPalette(
      props.match.params.id
      ,this.setPalette
      ,function fail(error) {
        alert(error);
      }
    );
  }
  setPalette = (response) => {
    this.setState({palette: response.data});
  };
  setPaletteLike = (response) => {
    const { palette } = this.state;
    this.setState({
      palette: { ... palette, like: response.data}
    });
  };
  getColorItems = () => {
    const { palette, classNames } = this.state;
    return palette.items.map(
      (item, index) => {return (
        <ColorItem
          key={index}
          id={index}
          className={classNames[index]}
          colorItem={item}
        />
      )}
    );
  };
  handleLikeClick = () => {
    const { palette } = this.state;
    PaletteActions.like(
      palette.id
      ,this.setPaletteLike
      ,function fail(error) {
        console.log(error);
        alert(error);
      }
    );
  };
  render() {
    const { palette } = this.state;
    const date = new Date(palette.created);
    const likeButtonProps = {
      like: palette.like
      ,handleClick: this.handleLikeClick
    };
    const items = this.getColorItems();
    return (
      <div id="container" className="wrap">
        <div id="feed">
          <Palette
            items={items}
            likeButtonProps={likeButtonProps}
            date={date}
            focused={true}
            itemContainerClassNames={'palette'}
          />
        </div>
      </div>
    );
  }
}

export default PaletteInfo;