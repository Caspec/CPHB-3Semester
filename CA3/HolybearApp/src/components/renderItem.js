import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Image,
  Text,
  View,
  Dimensions
} from 'react-native';
import StarRating from 'react-native-star-rating';
const HORIZONTAL_PADDING = 25;
const { width, height } = Dimensions.get('window');
class RenderItem extends React.Component {
    render(){
       return (
          <TouchableOpacity>
            <Image source = {this.props.data.imageUrl} style={styles.itemImageStyle} >
               <View style={{position:'absolute', width:'100%', height:'100%', backgroundColor:'rgba(0,0,0,0.3)' }}/>
               <Text style={styles.placeholderItemNameStyle}> {this.props.data.name} </Text>
               <View style={{alignItems: 'center'}}>
                  <StarRating
                    disabled
                    maxStars={5}
                    rating={this.props.data.rating}
                    starSize={15}
                    starColor="#FFA838"
                    starStyle={{paddingHorizontal:2}}
                  />
                  <Text style={{ color:'#b5b5b5'}}>({this.props.data.rating})</Text>
              </View>
            </Image>
        </TouchableOpacity>
       );
    }
}

export default RenderItem;

const styles = StyleSheet.create({
  itemImageStyle: {
  	flexDirection: 'column',
  	justifyContent: 'center',
  	alignItems: 'center',
  	width: (width / 2) - HORIZONTAL_PADDING,
  	flex:0.5,
    height:150,
    resizeMode:'contain'
  },
  placeholderItemNameStyle: {
  	textAlign: 'center',
  	fontSize: 18,
  	color: '#fff',
  	fontWeight: 'bold',
    backgroundColor:'transparent'
  },
});
