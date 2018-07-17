import React, { Component } from 'react';
import { 
    Image,
    Dimensions
 } from 'react-native';

 class ScaledImage extends Component {
     state = {
         h:0
       }
componentDidMount(){
    console.log('componentDidMount')
    Image.getSize(this.props.link,(realWidth,realHeight)=>this.setState({
        h: realHeight/(realWidth/Dimensions.get('window').width)
    }))
}

     render() {
         return (
             <Image 
             source = {{uri: this.props.link}}
             style = {{height:this.state.h,width:Dimensions.get('window').width}}
            />
         );
     }
 }
 
 export default ScaledImage;