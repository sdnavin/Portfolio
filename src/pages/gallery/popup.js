import React from 'react';  
import '../../styles/popup.css';  
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';

class Popup extends React.Component {  
  render() {  
    const item= this.props.popitem;
    const opts = {

      height: 360*((window.innerWidth>=1000)?1:0.4),//152
      width: 640*((window.innerWidth>=1000)?1:0.4),//256
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };
    return (  
      <div className='popup'>  
      <div className='popupinner'>  
      <div className='popupText'>
      <h1 onClick={this.openWebPage.bind(this,item.websiteUrl)}><span>{item.name}</span></h1>
      <p>{item.about}</p>
      <br/>
      {
        (item.youtubeUrl.length>0)?
        <YouTube videoId={item.youtubeUrl} opts={opts}/>:""
      }
      <p>Deployed Platform{item.platforms.includes(',')?"s":""}: {item.platforms}</p>  
      <p className="close" onClick={this.props.closePopup}>Close</p>  
      </div>
      </div>  
      </div>  
      );  
    }  

    openWebPage=(pageURL)=>{
      if(pageURL.length>0)
        window.open(pageURL, "_blank") //to open new page
    }
  }  



  export default Popup;
  
  // PropTypes
  Popup.propTypes = {
    popitem: PropTypes.object.isRequired
  }