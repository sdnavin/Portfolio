import React, { Component } from 'react'
import YouTube from 'react-youtube';

export default class gallery extends Component {
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };

    return (
      <div className="gallery">
      <h1>Gallery</h1>
      <hr border="0" width="80%" />
          <YouTube ideoId="wjsiq3EPoaw" opts={opts} />
      </div>
    )
  }
}

