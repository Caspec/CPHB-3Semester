import React, { Component } from 'react';
import styled from 'styled-components/native';
import { Button } from '../components';
import RenderItem from '../components/renderItem';
import { HamburgerIcon, SettingsIcon, BackIcon } from '../components/icons';
import { colors } from '../utils/constants';
import {View} from 'react-native';
import {
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Title,
  Left,
  Icon,
  Right
} from "native-base";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';

const TitleText = styled.Text`
  fontSize: 30;
  color: ${props => props.theme.WHITE};
`;

class AllPlacesScreen extends Component {
  componentWillMount()
  {
    console.log("will mount");
      this.props.getAllLocations();
  }
  componentWillReceiveProps(nextProps)
  {
    console.log("Places changed");
    console.log(nextProps.places);
  }
  render() {
    const {places} = this.props;
    return (
      <Container>
          <Header style={{ backgroundColor: colors.P_DARK }}>
            <Left>
              <HamburgerIcon onPress={() => this.props.navigation.navigate('DrawerOpen')}/>
            </Left>
            <Body>
              <Title>AllPlaces</Title>
            </Body>
            <Right />
          </Header>
          <Content>
            <TitleText>PLACES LIST</TitleText>
            {
                <View style={{flex:1}}>
                       {places.map((item,index)=>{
                           if(index % 2 ==0){
                            return <View key={index} style={{marginHorizontal:10,marginVertical:10,  flex:1, flexDirection:'row', paddingTop:3,justifyContent:'space-around', alignItems:'flex-start'}}>
                                <RenderItem data={places[index]} />
                                {
                                    places[index+1] &&
                                        <RenderItem data={places[index+1]} />
                                }
                            </View>
                           }
                        })}
                 </View>
            }
          </Content>
      </Container>
    );
  }
}
const mapStateToProps = ({locationManager}) => ({
    places: locationManager.places,
});
const mapDispatchToProps = (dispatch) => ({
    getAllLocations: () => dispatch(actions.getAllLocations()), 
    // actions: bindActionCreators(actions, dispatch)  
});
export default connect(
    mapStateToProps, mapDispatchToProps
)(AllPlacesScreen)

