import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Dimensions,
    TouchableOpacity,
    Platform,
    Modal,
    WebView
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Button,Form, Item, Icon, Container, Content , Header, StyleProvider, Input} from 'native-base';

import { Ionicons } from '@expo/vector-icons';
import IconBadge from 'react-native-icon-badge';
import { ImagePicker } from 'expo';
import styled from 'styled-components/native';
import { colors } from '../utils/constants';


const ContainerView = styled.View`
  flex: 1;
  justifyContent: center;
  alignItems: center;
`;
class RegisterPlaceScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      name:'' ,
      description: '',
      location: '',
      address:'',
      loading: false,
      profileUrl: null,
      avatarSource: null,
    }
  }

  componentWillReceiveProps(nextProps) {
     console.log("asdf");
  }

  _openCameraRoll = async () => {
      let image = await ImagePicker.launchImageLibraryAsync();
      if (!image.cancelled) {
          this.setState({ profileUrl: image.uri });
      }
  }

  takePhoto = async () => {
      let image = await ImagePicker.launchCameraAsync();
      if (!image.cancelled) {
          this.setState({ profileUrl: image.uri });
      }
  }

  register = () => {
    let data = {
      Name: this.state.name,
      Description: this.state.description,
      GPSLocation: this.state.location,
      Address: this.state.address,
      photo: this.state.profileUrl
    }
    //this.props.requestRegister(data);
  }

  render() {
    return (
        <Container  style={styles.container_st}>
          <Content  >
              <Form>
                       <View style={{ flex:1, alignItems: 'center'}}>
                            <IconBadge
                                MainElement={
                                    <TouchableOpacity onPress={this._openCameraRoll}>
                                        <Image source={this.state.profileUrl ? { uri: this.state.profileUrl } : require('../../assets/Images/upload.png')} style={styles.profileImage} />
                                    </TouchableOpacity>
                                }
                                BadgeElement={
                                    <TouchableOpacity onPress={this.takePhoto}>
                                        <Icon name='md-camera' style={{ color: '#fff', fontSize: 30 }} />
                                    </TouchableOpacity>
                                }
                                IconBadgeStyle={
                                    {
                                        width: 45,
                                        height: 45,
                                        left: 147,
                                        top: 105,
                                        color:colors.WHITE
                                    }
                                }
                            />
                         </View>
                <Item >
                   <Input style={styles.input_st}
                    value={this.state.name} 
                    onChangeText={(text) => this.setState({name: text})} 
                    placeholder="Name"
                    placeholderTextColor = {colors.WHITE}
                     />
                </Item>  
                <Item>
                     <Input style={styles.input_st}
                    value={this.state.description} 
                    onChangeText={(text) => this.setState({description: text})} 
                    placeholder="description"
                    placeholderTextColor = {colors.WHITE}
                     />
                </Item>  
                <Item>
                    <Input style={styles.input_st}
                    value={this.state.address} 
                    onChangeText={(text) => this.setState({address: text})} 
                    placeholder="Address" 
                    placeholderTextColor = {colors.WHITE}
                    />
                </Item> 
                <Item>
                   <Input style={styles.input_st}
                    value={this.state.location} 
                    onChangeText={(text) => this.setState({location: text})} 
                    placeholder="GPS location" 
                    placeholderTextColor = {colors.WHITE}
                    />
                </Item>  
                  <Button style={styles.bt_st} block>
                        <Text style={{color:colors.WHITE}}>Register</Text>
                  </Button>
               </Form>
          </Content>
        </Container>
    );
  }
}
const styles = StyleSheet.create({
  container_st: {
      flex: 1,
      marginVertical:40,
      justifyContent:'center',
      alignItems:'center'
  },
  bt_st :{
    width:300,
    backgroundColor:colors.BTN_COL,
    color:colors.WHITE,
    borderColor: '#fff',
    borderWidth: 1,
    marginHorizontal:30,
    marginVertical:30,
    borderRadius:25,
  },
  input_st:
  {
    color:colors.WHITE,
  },
  profileImage: {
      height:150,
      width: 200,
  }
});
const mapStateToProps = ({locationManager}) => ({
    msg: locationManager.viewMsg,
});
const mapDispatchToProps = (dispatch) => ({
    requestRegister: (data) => dispatch(actions.requestRegister(data)), 
    // actions: bindActionCreators(actions, dispatch)  
});
export default connect(
    mapStateToProps, mapDispatchToProps
)(RegisterPlaceScreen)
