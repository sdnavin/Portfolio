import React from 'react';  
import '../../styles/popup.css';  
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';

class Popup extends React.Component {  
  render() {  
    const item= this.props.popitem;
    const opts = {
      height: '360',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 0
      }
    };
    return (  
      <div className='popup'>  
      <div className='popupinner'>  
      <div className='popupText'>
      <h1><span>{item.name}</span></h1>
      <p>{item.about}</p>
      <br/>
      <YouTube ideoId={item.youtubeUrl} opts={opts}/>
      
      <p className="close" onClick={this.props.closePopup}>Close</p>  
      </div>
      </div>  
      </div>  
      );  
    }  
  }  
  
  export default Popup;
  
  // PropTypes
  Popup.propTypes = {
    popitem: PropTypes.object.isRequired
  }