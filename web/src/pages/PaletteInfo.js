import React, { Component } from 'react';
import Header from "./layout/Header";
import { ColorItem, Palette, PaletteActions } from 'components/palette';
import { LocalStorageUtil } from 'helper/LocalStorageUtil';
import 'pages/Palettes.css';
import 'pages/PaletteInfo.scss';

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
    ,palettes: []
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
    PaletteActions.getPalettes(
      {page:1, pageSize:16}
      ,this.setPalettes
      ,function fail(error) {
        alert(error);
      }
    )
  }
  setPalette = (response) => {
    const palette = response.data;
    this.setState({ palette: palette });
  };
  setPalettes = (response) => {
    const palettes = response.data;
    this.setState({ palettes: palettes });
  };
  setLikeState = (like) => {
    const { palette } = this.state;
    this.setState({
      palette: { ...palette, like: like }
    });
  };
  setLikeStateAtList = (id, like) => {
    const { palettes } = this.state;
    this.setState({
      palettes: palettes.map((item, index) => {
        return item.id === id ? { ...item, like: like } : item;
      })
    });
  };
  handleLikeClick = (palette) => {
    const key = this.itemsToString(palette.items);
    const value = palette.id;
    const haveIt = LocalStorageUtil.haveItLocalStorage(key, value);
    const likeOrUnlikeAction = haveIt ? PaletteActions.unlike : PaletteActions.like;
    likeOrUnlikeAction(
      value
      , (response) => {
        const likeCount = response.data;
        LocalStorageUtil.toggleLikeLocalStorage(haveIt, key, value);
        this.setLikeState(likeCount);
        this.setLikeStateAtList(value, likeCount);
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
  getColorItems = (palette, classNames) => {
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
  getPalette = (palette, classNames, focused) => {
    const key = this.itemsToString(palette.items);
    const value = palette.id;
    const liked = LocalStorageUtil.haveItLocalStorage(key, value);
    const date = new Date(palette.created);
    const likeButtonProps = {
      like: palette.like
      ,handleClick: () => { this.handleLikeClick(palette); }
    };
    const items = this.getColorItems(palette, classNames);
    return (
      <Palette
        items={items}
        likeButtonProps={likeButtonProps}
        date={date}
        focused={focused}
        liked={liked}
        itemContainerClassNames={'palette'}
      />
    );
  };

  render() {
    const { palette, palettes, classNames } = this.state;
    const focusedPalette = this.getPalette(palette, classNames, true);
    const paletteList = palettes.map(
      (palette) => {
        return this.getPalette(palette, classNames, false);
      }
    );
    return (
      <div>
        <Header palette={palette} />
        <div id="container" className="wrap wrapper-palette-info">
          <div id="feed">
            {focusedPalette}
            {paletteList}
          </div>
          <div id="side">
            <div id="credit" className="section">
              Made with by <a target="_blank" rel="noreferrer" href="https://github.com/imdasom/the-palette">imdasom</a>
              <br/>Version <img alt="Color Hunt Palettes Heart Icon" src="/img/color-hunt-palettes-icon-heart-blue.png" /> 0.1.1
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PaletteInfo;