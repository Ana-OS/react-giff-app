import React, { Component } from 'react';


class Gif extends Component{
    handleClick = () => {
        if(this.props.selectGif){
            return this.props.selectGif(this.props.id)
        }
      
    }
    render() {
        if(!this.props.id){
            return null
        }
        const src = `https://media0.giphy.com/media/${this.props.id}/200w.gif`
        return (  
            <img className="gif" src={src} alt="" onClick={this.handleClick}/>
        );
    }
}

export default Gif;