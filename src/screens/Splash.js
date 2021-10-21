import React,{useState,useEffect} from 'react';
import { Text, View, StyleSheet, ImageBackground, Image ,StatusBar} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import myThemeColors from '../utils/myThemeColors';
import myFontSize from '../utils/myFontSize';
import { App_Logo } from '../utils/appconstants';

export default function Login(props) {

    useEffect(() => {
      setTimeout(() => {
        props.navigation.replace('Login');
      },2000);
    },[]);

    return (
      <View style={[styles.main_container,{backgroundColor:myThemeColors.mainbg}]}>
        <StatusBar
           backgroundColor = {myThemeColors.mainbg}
           barStyle = {"dark-content"}
         />
         <Image 
          source={App_Logo}
          style={{height:hp('35%'),width:wp('60%')}}
          resizeMode="contain"
        />
      </View>

    )
  
}

const styles = StyleSheet.create({
  main_container:{
    height:hp('100%'),
    width:wp('100%'),
    justifyContent:'center', 
    alignItems:'center'
  },
  img_bg:{
    height:hp('100%'),
    width:wp('100%'),
    resizeMode: 'contain',
    justifyContent:'center', 
    alignItems:'center'
  },
  logo:{
    width: hp('25%'), 
    height: hp('25%')
  },
  app_name:{ 
    marginTop:hp('2%'),
    fontSize:myFontSize.xlarge, 
  }
});
