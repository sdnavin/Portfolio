import React, { Component } from 'react'
import galleryData from '../../data/galleryData.json';
import '../../styles/gallery.css'
import GalleryView from './GalleryView'

export default class gallery extends Component {
  
  canRender=false;

  constructor(){
    super();
    this.state = {
      galleryState:[]
    };
  }

  
  componentDidMount(){
    this.setState({galleryState:galleryData});
    this.canRender=true;
  }
  
  render() {
    
    if(this.canRender){
      return (
        <div className="gallery">
        <GalleryView galleryItems={this.state.galleryState}/>
        </div>
        )
      }else{
        return (<div></div>)
      }
    }
  }
  
  