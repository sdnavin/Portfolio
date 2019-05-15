import React, { Component } from 'react'
import YouTube from 'react-youtube';

export default class gallery extends Component {
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
<<<<<<< HEAD
        autoplay: 0
=======
        autoplay: 1
>>>>>>> 73f7475cd4c948be8ac718f6745ec5d78bfba046
      }
    };

    return (
<<<<<<< HEAD
      <div className="gallery">
      <h1>Gallery</h1>
      <hr border="0" width="80%" />
          <YouTube ideoId="wjsiq3EPoaw" opts={opts} />
      </div>
    )
  }
=======
      <div>
          <YouTube
        videoId="wjsiq3EPoaw"
        opts={opts}
        onReady={this._onReady}
      />
      </div>
    )
  }
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
>>>>>>> 73f7475cd4c948be8ac718f6745ec5d78bfba046
}

