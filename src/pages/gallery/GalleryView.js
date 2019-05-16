import React, { Component } from 'react'
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';
import '../../styles/gallery.css'
import Popup from './popup'

export default class GalleryView extends Component {
    
    currentFilterType="All";
    galleryTypes=["All",];
    
    constructor(props){  
        super(props);  
        this.state = { 
            itemData: null,
            showPopup: false };  
    }  
    
    getGalleryTypes(){
        const galleries=this.props.galleryItems;
        galleries.map((galleryItem)=>{
            if(!this.galleryTypes.includes(galleryItem.type)){
                this.galleryTypes.push(galleryItem.type);
            }
            return this.galleryTypes;
        })
    }
    
    getGallery(){
        const items = [];
        this.getGalleryTypes();
        if(this.galleryTypes!=null){
            let t=0;
            for(t=0;t<this.galleryTypes.length;t++){
                items.push(<p className={
                    (this.currentFilterType===this.galleryTypes[t])?"filterstyle active":"filterstyle"
                } onClick={this.filterit.bind(this,this.galleryTypes[t])} key={t}>{ this.galleryTypes[t]}</p>);
            }
        }
        return items;
    }
    
    filterit=(filterType)=>{
        this.currentFilterType=filterType;
        this.forceUpdate();
    }
    
    filterView(){
        
        const galleries=this.props.galleryItems;
        var noFilter=false;
        
        if(this.currentFilterType==="All"){
            noFilter=true;
        }
        const filterItems=[];
        
        {galleries.map((galleryItem)=>{
            if(noFilter||galleryItem.type===this.currentFilterType){
                //show filtered content
                filterItems.push(<div className="filteritem" key={galleryItem.id} >{this.getGalleryItem(galleryItem)}</div>)
            }
        })}
        return filterItems;
    }
    
    getGalleryItem(item){
        const opts = {
            height: '228',//152
            width: '384',//256
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 0
            }
        };
        return(
            <div>
            <div className="filterboxitem">
            <div className="filterText">
            <h1><span>{item.name}</span></h1>
            <p>{item.about.slice(0,100)}{item.about.length>100?"...":""}</p>
            {
            (item.youtubeUrl.length>0)?
            <YouTube ideoId={item.youtubeUrl} opts={opts}/>:""
            }
            <p className="hypertext" onClick={this.togglePopup.bind(this,item)}>More details</p>
            </div>
            </div>
            </div>
            )
        }
        togglePopup(popitem) {  
            this.setState({  
                itemData: popitem,
                showPopup: !this.state.showPopup  
            });  
        }  
        
        render() {
            return (
                <div className="filterpage">
                <div className="filters">
                {this.getGallery()}
                </div>
                <hr border="0" />
                <div className="filterbox" >
                {this.filterView()}
                {
                    this.state.showPopup ?  
                    <Popup popitem={this.state.itemData} closePopup={this.togglePopup.bind(this,null)}  />  : null  
                }  
                </div>
                </div>
                )
            }
            
        }
        // PropTypes
        GalleryView.propTypes = {
            galleryItems: PropTypes.array.isRequired
        }