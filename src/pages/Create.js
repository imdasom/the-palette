import React, { Component } from 'react';
import './Create.css';
import { SketchPicker } from 'react-color';

class Create extends Component {
  componentDidMount() {
  }
  render() {
    return (
      <div id="feed">
        <h2>Create Palette</h2>
        <center>
          <div className="item">
            <div className="canvas">
              <div className="place c4"></div>
              <div className="place c3"></div>
              <div className="place c2"></div>
              <div className="place c1"></div>
            </div>
          </div>
          <div>
            <SketchPicker />
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