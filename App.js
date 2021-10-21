/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator,TransitionPresets } from '@react-navigation/stack';
import Splash from './src/screens/Splash';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import ForgotPassword from './src/screens/ForgotPassword';
import ResetPassword from './src/screens/ResetPassword';
import ConnectTracker from './src/screens/ConnectTracker';
import Home from './src/screens/Home';
import MainTabs from './src/navigation/tabs';
import ChallengeDetails from './src/screens/ChallengeDetails';
import CreateChallenge1 from './src/screens/CreateChallenge1';
import CreateChallenge2 from './src/screens/CreateChallenge2';
import CreateChallenge3 from './src/screens/CreateChallenge3';
import CreateChallenge4 from './src/screens/CreateChallenge4';
import CreateChallenge5 from './src/screens/CreateChallenge5';
import CreateChallenge6 from './src/screens/CreateChallenge6';
import CreateWalk1 from './src/screens/CreateWalk1';
import CreateWalk2 from './src/screens/CreateWalk2';
import CreateWalk3 from './src/screens/CreateWalk3';
import CreateWalk4 from './src/screens/CreateWalk4';
import CreateWalk5 from './src/screens/CreateWalk5';
import CreateWalk6 from './src/screens/CreateWalk6';
import ShoppingList from './src/screens/ShoppingList';
import StoreCart from './src/screens/StoreCart';
import ActivitiesFilter from './src/screens/ActivitiesFilter';
import StoreList from './src/screens/StoreList';
import InviteFriends from './src/screens/InviteFriends';
import Rewards from './src/screens/Rewards';


const Stack = createStackNavigator();

export default function MyStack() {
  return ( 
    <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown:false,
        ...TransitionPresets.SlideFromRightIOS   
      }}
      mode={"modal"}
      initialRouteName="Splash">
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="ConnectTracker" component={ConnectTracker} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="MainTabs" component={MainTabs} />
      <Stack.Screen name="ChallengeDetails" component={ChallengeDetails} />
      <Stack.Screen name="CreateChallenge1" component={CreateChallenge1} />
      <Stack.Screen name="CreateChallenge2" component={CreateChallenge2} />
      <Stack.Screen name="CreateChallenge3" component={CreateChallenge3} />
      <Stack.Screen name="CreateChallenge4" component={CreateChallenge4} />
      <Stack.Screen name="CreateChallenge5" component={CreateChallenge5} />
      <Stack.Screen name="CreateChallenge6" component={CreateChallenge6} />
      <Stack.Screen name="CreateWalk1" component={CreateWalk1} />
      <Stack.Screen name="CreateWalk2" component={CreateWalk2} />
      <Stack.Screen name="CreateWalk3" component={CreateWalk3} />
      <Stack.Screen name="CreateWalk4" component={CreateWalk4} />
      <Stack.Screen name="CreateWalk5" component={CreateWalk5} />
      <Stack.Screen name="CreateWalk6" component={CreateWalk6} />
      <Stack.Screen name="ShoppingList" component={ShoppingList} />
      <Stack.Screen name="StoreCart" component={StoreCart} />
      <Stack.Screen name="ActivitiesFilter" component={ActivitiesFilter} />
      <Stack.Screen name="StoreList" component={StoreList} />
      <Stack.Screen name="InviteFriends" component={InviteFriends} />


    </Stack.Navigator>
    </NavigationContainer>
  );
}
