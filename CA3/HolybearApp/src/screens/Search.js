import React, { Component } from 'react';
import styled from 'styled-components/native';
import { HamburgerIcon, SettingsIcon, BackIcon } from '../components/icons';
import { colors } from '../utils/constants';
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

const TitleText = styled.Text`
  fontSize: 30;
  color: ${props => props.theme.WHITE};
`;

class SearchScreen extends Component {
  render() {
    return (
      <Container>
         <Header style={{ backgroundColor: colors.P_DARK }}>
            <Left>
              <HamburgerIcon onPress={() => this.props.navigation.navigate('DrawerOpen')}/>
            </Left>
            <Body>
              <Title>HomeScreen</Title>
            </Body>
            <Right />
          </Header>
        <Content>
           <TitleText>SearchScreen</TitleText>
        </Content>
      </Container>
    );
  }
}

export default SearchScreen;
