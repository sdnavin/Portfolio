import React,{Component} from 'react';
import dp from '../../images/rich.jpg';

import mail from '../../images/contact/mail.png';
import fb from '../../images/contact/fb.png';
import git from '../../images/contact/git.png';
import linkedin from '../../images/contact/linkedin.png';

import '../../styles/contact.css';

export default class contact extends Component {
  
  webData={
    fb:"https://www.facebook.com/Richardnavin",
    mail:"mailto:richardnavin@outlook.com",
    linkedin:"https://www.linkedin.com/in/sd-richardnavin/",
    git:"https://github.com/sdnavin"
  };
  
  openWebPage=(pageURL)=>{
    window.open(pageURL, "_blank") //to open new page
  }
  
  render() {
    return (
      <div>
      <div className="contactMain"> 
      <img src={dp} className="portfolio-dp"  />
      <h1 className="titlecontact">  Richard Navin </h1>
      </div>
      
      <div className="contact">
      <img src={mail} className="icons mail" onClick={this.openWebPage.bind(this,this.webData.mail)}/>
      <img src={fb} className="icons fb" onClick={this.openWebPage.bind(this,this.webData.fb)}  />
      <img src={git} className="icons git" onClick={this.openWebPage.bind(this,this.webData.git)}  />
      <img src={linkedin} className="icons linkedin" onClick={this.openWebPage.bind(this,this.webData.linkedin)}  />
      </div>
      </div>
      )
    }
  }
  