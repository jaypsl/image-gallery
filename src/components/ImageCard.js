import React from 'react';
// import { Component } from '@angular/core';

class ImageCard extends React.Component{
     
    constructor(props){
        super(props)
        this.imageRef = React.createRef();
        this.state = {span : 0};
    }

    componentDidMount(){
        this.imageRef.current.addEventListener('load', this.setSpans)
    }

    setSpans = () => {
    //   console.log(this.imageRef.current.clientHeight);
      const height = this.imageRef.current.clientHeight;
      const span = Math.ceil(height/10);
      this.setState({span});
    }
 
    render(){
        const {urls, description} = this.props.image;
        return(
            <div style={{gridRowEnd : `span ${this.state.span}`}}>
            <img ref = {this.imageRef} src= {urls.regular} alt = {description} />
            </div>
        )
    }

}

export default ImageCard;