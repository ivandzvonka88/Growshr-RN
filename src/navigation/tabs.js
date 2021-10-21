import React from 'react';
import { Text, View, StyleSheet, ImageBackground, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../src/screens/Home';
import Rewards from '../../src/screens/Rewards';
import Activities from '../../src/screens/Activities';
import Profile from '../../src/screens/Profile';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import myThemeColors from '../utils/myThemeColors';
import myFontSize from '../utils/myFontSize';
import { Home_Icon,Home_Color_Icon,Reward_Icon,Reward_Color_Icon,Activities_Icon,Activities_Color_Icon,Profile_Icon,Profile_Color_Icon} from '../utils/appconstants';


const Tab = createBottomTabNavigator();

const Tabs = () =>{
    return(
    <Tab.Navigator
        tabBarOptions={{
            showLabel:false,
            style:{
                position:'absolute',
                bottom:0,
                elevation:0,
                left:0,
                right:0,
                height:hp('8.5%'),
                width:wp('100%'),
                backgroundColor:myThemeColors.mainbg,
                borderTopWidth:hp('0.15%'),
                borderTopColor:'#F1F4F7', 
                justifyContent:"center"
            }
        }}
        initialRouteName="Home"
    >
        <Tab.Screen 
            name="Home" 
            component={Home} 
            options={{
                tabBarIcon:({focused}) =>(
                focused == true ? 
                <View style={{alignItems:"center",paddingBottom:hp('1%'),justifyContent:"center",width:wp('25'),height:hp('8.5%')}}>
                    <Image 
                        source={Home_Color_Icon}
                        style={{height:hp('3.5%'),width:hp('3.5%')}}
                        resizeMode="contain"
                    />
                    <Text style={{marginTop:hp('0.5%'),color:myThemeColors.mainfontcolor,fontSize:myFontSize.body.fontSize,fontFamily:myFontSize.body.fontFamily}}>Home</Text>
                </View>
               :               
               <View style={{alignItems:"center",justifyContent:"center",paddingBottom:hp('1%'),width:wp('25%'),height:hp('8.5%')}}>
                    <Image 
                        source={Home_Icon}
                        style={{height:hp('3.5%'),width:hp('3.5%')}}
                        resizeMode="contain"
                    />
               <Text style={{marginTop:hp('0.5%'),color:myThemeColors.secondfontcolor,fontSize:myFontSize.body.fontSize,fontFamily:myFontSize.body.fontFamily}}>Home</Text>
               </View> 
                ),
            }}
        />

        <Tab.Screen 
            name="Rewards" 
            component={Rewards} 
            options={{
                tabBarIcon:({focused}) =>(
                    focused == true ? 
                    <View style={{alignItems:"center",justifyContent:"center",paddingBottom:hp('1%'),width:wp('25%'),height:hp('8.5%')}}>
                    <Image 
                        source={Reward_Color_Icon}
                        style={{height:hp('3.5%'),width:hp('3.5%')}}
                        resizeMode="contain"
                    />
                    <Text style={{marginTop:hp('0.5%'),color:myThemeColors.mainfontcolor,fontSize:myFontSize.body.fontSize,fontFamily:myFontSize.body.fontFamily}}>Rewards</Text>
                </View>
                :               
                <View style={{alignItems:"center",justifyContent:"center",width:wp('25%'),paddingBottom:hp('1%'),height:hp('8.5%')}}>
                    <Image 
                        source={Reward_Icon}
                        style={{height:hp('3.5%'),width:hp('3.5%')}}
                        resizeMode="contain"
                    />
                <Text style={{marginTop:hp('0.5%'),color:myThemeColors.secondfontcolor,fontSize:myFontSize.body.fontSize,fontFamily:myFontSize.body.fontFamily}}>Rewards</Text>
                </View> 
                ),
            }}
        />

        <Tab.Screen 
            name="Activities" 
            component={Activities} 
            options={{
                tabBarIcon:({focused}) =>(
                    focused == true ? 
                    <View style={{alignItems:"center",justifyContent:"center",width:wp('25%'),paddingBottom:hp('1%'),height:hp('8.5%')}}>
                    <Image 
                        source={Activities_Color_Icon}
                        style={{height:hp('3.5%'),width:hp('3.5%')}}
                        resizeMode="contain"
                    />
                    <Text style={{marginTop:hp('0.5%'),color:myThemeColors.mainfontcolor,fontSize:myFontSize.body.fontSize,fontFamily:myFontSize.body.fontFamily}}>Activities</Text>
                    </View>
                :               
                <View style={{alignItems:"center",justifyContent:"center",width:wp('25%'),paddingBottom:hp('1%'),height:hp('8.5%')}}>
                    <Image 
                        source={Activities_Icon}
                        style={{height:hp('3.5%'),width:hp('3.5%')}}
                        resizeMode="contain"
                    />
                <Text style={{marginTop:hp('0.5%'),color:myThemeColors.secondfontcolor,fontSize:myFontSize.body.fontSize,fontFamily:myFontSize.body.fontFamily}}>Activities</Text>
                </View>
                ),
            }}
        />

        <Tab.Screen 
            name="Profile" 
            component={Profile} 
            options={{
                tabBarIcon:({focused}) =>(
                    focused == true ? 
                    
                    <View style={{alignItems:"center",justifyContent:"center",width:wp('25%'),paddingBottom:hp('1%'),height:hp('8.5%')}}>
                    <Image 
                        source={Profile_Color_Icon}
                        style={{height:hp('3.5%'),width:hp('3.5%')}}
                        resizeMode="contain"
                    />
                    <Text style={{marginTop:hp('0.5%'),color:myThemeColors.mainfontcolor,fontSize:myFontSize.body.fontSize,fontFamily:myFontSize.body.fontFamily}}>Profile</Text>
                    </View>
                :               
                <View style={{alignItems:"center",justifyContent:"center",width:wp('25%'),paddingBottom:hp('1%'),height:hp('8.5%')}}>
                    <Image 
                        source={Profile_Icon}
                        style={{height:hp('3.5%'),width:hp('3.5%')}}
                        resizeMode="contain"
                    />
                <Text style={{marginTop:hp('0.5%'),color:myThemeColors.secondfontcolor,fontSize:myFontSize.body.fontSize,fontFamily:myFontSize.body.fontFamily}}>Profile</Text>
                </View> 
                ),
            }}
        />
    </Tab.Navigator>
    );
}

export default Tabs;
