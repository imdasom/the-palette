import React, { Component } from 'react';
import { ColorItem, Palette, PaletteActions } from 'components/palette';
import { LocalStorageUtil } from 'helper/LocalStorageUtil';
import './Palettes.css';
import './PaletteInfo.css';

class PaletteInfo extends Component {
  state = {
    classNames: ['c4', 'c3', 'c2', 'c1']
    ,palette: {
      id: -1
      ,items: [
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
    const palette = response.data;
    this.setState({ palette: palette });
  };
  setLikeState = (like) => {
    const { palette } = this.state;
    this.setState({
      palette: { ... palette, like: like}
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
    const key = this.itemsToString(palette.items);
    const value = palette.id;
    const haveIt = LocalStorageUtil.haveItLocalStorage(key, value);
    const likeOrUnlikeAction = haveIt ? PaletteActions.unlike : PaletteActions.like;
    likeOrUnlikeAction(
      palette.id
      , (response) => {
        const likeCount = response.data;
        LocalStorageUtil.toggleLikeLocalStorage(haveIt, key, value);
        this.setLikeState(likeCount);
      }
      , (error) => {
        console.log(error);
        alert(error);
      }
    );
  };
  itemsToString = (items) => {
    return 'thepalette-' + items.map(item => item.content.hex).join('');
  };

  render() {
    const { palette } = this.state;
    const key = this.itemsToString(palette.items);
    const value = palette.id;
    const liked = LocalStorageUtil.haveItLocalStorage(key, value);
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
            liked={liked}
            itemContainerClassNames={'palette'}
          />
        </div>
      </div>
    );
  }
}

export default PaletteInfo;