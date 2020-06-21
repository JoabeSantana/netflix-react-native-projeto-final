import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Home from './screen/Home';
import Abas from './routes/Abas';
import { createStackNavigator, StackView } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Camera from './screen/Camera';
import ProfileToEdit from './screen/ProfileToEdit';
import ChooseIcon from './screen/ChooseIcon';
import { ProfileContext } from './screen/context/ProfileContext';
import { getLanguageByDevice, setLanguage } from './languages/utils';
const Stack = createStackNavigator();

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.changeProfile = this.changeProfile.bind(this);
    this.state = {
      user: null,
      changeProfile: this.changeProfile,
    };
    setLanguage();
  }

  changeProfile(item) {
    console.log('Profile name: ', item.name);
    this.setState({ user: item.name });
  }

  render() {
    return (
      <ProfileContext.Provider value={this.state} >
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name='Abas'
              component={Abas}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='Camera'
              component={Camera}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='ProfileToEdit'
              component={ProfileToEdit}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='ChooseIcon'
              component={ChooseIcon}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ProfileContext.Provider>
    );
  }
}