import React, { Component } from 'react';
import Palette from "components/palette/Palette";
import 'pages/Palettes.css';

class Palettes extends Component {
  render() {
    return (
      <div id="feed">
        <div>
          <h2 className='inlineBlock'>Palettes</h2>
          <a data-button="create" className="button floatR" href="/create">Create</a>
        </div>
        <Palette palette={getPalette()}/>
        <Palette palette={getPalette()}/>
        <Palette palette={getPalette()}/>
        <Palette palette={getPalette()}/>
        <Palette palette={getPalette()}/>
      </div>
    );
  }
}

export default Palettes;

const getPalette = function() {
  return {
    id: new Date().getTime()
    , items: getItems()
  };
}

/* temporary data */
const getItems = function() {
  return [
    {
      type: 'COLOR'
      , like: 23
      , author: 'daim'
      , name: 'name'
      , content: {
        r: Math.floor(Math.random() * (+255 - +0)) + +0
        , g: Math.floor(Math.random() * (+255 - +0)) + +0
        , b: Math.floor(Math.random() * (+255 - +0)) + +0
        , hex: '#' + (Math.floor(Math.random() * (+999999 - +111111)) + +111111)
      }
      , className: 'c4'
    }
    ,{
      type: 'COLOR'
      , like: 23
      , author: 'daim'
      , name: 'name'
      , content: {
        r: Math.floor(Math.random() * (+255 - +0)) + +0
        , g: Math.floor(Math.random() * (+255 - +0)) + +0
        , b: Math.floor(Math.random() * (+255 - +0)) + +0
        , hex: '#' + (Math.floor(Math.random() * (+999999 - +111111)) + +111111)
      }
      , className: 'c3'
    }
    ,{
      type: 'COLOR'
      , like: 23
      , author: 'daim'
      , name: 'name'
      , content: {
        r: Math.floor(Math.random() * (+255 - +0)) + +0
        , g: Math.floor(Math.random() * (+255 - +0)) + +0
        , b: Math.floor(Math.random() * (+255 - +0)) + +0
        , hex: '#' + (Math.floor(Math.random() * (+999999 - +111111)) + +111111)
      }
      , className: 'c2'
    }
    ,{
      type: 'COLOR'
      , like: 23
      , author: 'daim'
      , name: 'name'
      , content: {
        r: Math.floor(Math.random() * (+255 - +0)) + +0
        , g: Math.floor(Math.random() * (+255 - +0)) + +0
        , b: Math.floor(Math.random() * (+255 - +0)) + +0
        , hex: '#' + (Math.floor(Math.random() * (+999999 - +111111)) + +111111)
      }
      , className: 'c1'
    }
  ];
}