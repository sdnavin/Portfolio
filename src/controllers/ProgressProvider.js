import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class ProgressProvider extends Component {

    constructor(props){
        super(props);
    }

    state={
        value:this.props.valueStart
    };

    timeout=0;

    componentDidMount(){
        this.timeout= setTimeout(() => {
            this.setState({
                value:this.props.valueEnd
            });
        }, 600); 
    }
    componentWillUnmount(){
        window.clearTimeout(this.timeout);
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
  