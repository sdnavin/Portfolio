import React, { Component } from 'react'
import PropTypes from 'prop-types';

import TweenMax from 'gsap';

export default class ProgressProvider extends Component {

    constructor(props){
        super(props);
    }

    state={
        value:this.props.valueStart
    };

    timeout=0;

    componentWillReceiveProps(){
        this.updateAnim(1000);
    }



    componentDidMount(){
        this.updateAnim(500);
    }
    componentWillUnmount(){
        window.clearTimeout(this.timeout);
    }

    updateAnim(timeval){
        this.setState({value:this.props.valueStart});

        this.timeout= setTimeout(() => {
            this.setState({
                value:this.props.valueEnd
            });
        }, timeval); 
    }

  render() {
    return this.props.children(this.state.value);
  }
}
 // PropTypes
 ProgressProvider.propTypes = {
    valueStart: PropTypes.number.isRequired,
    valueEnd: PropTypes.number.isRequired,
    children: PropTypes.node.isRequired
}
  