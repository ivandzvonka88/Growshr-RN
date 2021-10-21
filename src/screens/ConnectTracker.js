import React, { useState ,useEffect,useRef} from 'react';

import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    TouchableOpacity,
    StatusBar,
    Keyboard,
    Image,
    
} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import myThemeColors from '../utils/myThemeColors';
import myFontSize from '../utils/myFontSize';
import { Fitbit_Icon,Apple_Heart_Icon,Switch_On_Icon,Switch_Off_Icon } from '../utils/appconstants';

export default function ConnectTracker(props) {

    const [Health,SetHealth] = useState(false);
    const [Fitbit,SetFitbit] = useState(true);

    const toggleSwitchHealth = () => SetHealth(previousState => !previousState);
    const toggleSwitchFitbit = () => SetFitbit(previousState => !previousState);

    const OnConnectClick = () => {
      props.navigation.navigate('MainTabs')
    }

    return (
        <View style={[styles.main_container,{backgroundColor:myThemeColors.mainbg}]}>
        <StatusBar
           backgroundColor = {myThemeColors.mainbg}
           barStyle = {"dark-content"}
         />
      <View style={{height:hp('8%'),width:wp('100%'),justifyContent:"center",alignItems:"center",borderBottomWidth:hp('0.15%'),borderColor:myThemeColors.bordercolor_light}}>
            <Text style={{fontSize:myFontSize.h2.fontSize,lineHeight:myFontSize.h2.LineHeight,fontFamily:myFontSize.h2.fontFamily,color:myThemeColors.mainfontcolor,textAlignVertical:"center"}}>Connect a Tracker</Text>
      </View>

      <View style={{height:hp('8%'),width:wp('98%'),alignSelf:"center",justifyContent:"center",alignItems:"center",}}>
            <Text style={{fontSize:myFontSize.body.fontSize,lineHeight:18,fontFamily:myFontSize.body.fontFamily,color:myThemeColors.mainfontcolor}}>Connect your account with a fitness tracker or your Apple health app to start earning rewards for your tracker steps.</Text>
      </View>

      <View style={{height:hp('7%'),width:wp('100%'),marginTop:hp('1%'),borderBottomWidth:hp('0.15%'),borderColor:myThemeColors.bordercolor_light,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
        <View style={{height:hp('5%'),marginLeft:wp('5%'),width:hp('5%')}}>
        <Image source={Apple_Heart_Icon} style={{height:hp('5%'),width:hp('5%')}} resizeMode="contain" />
        </View>

        <View style={{height:hp('5%'),width:wp('60%'),justifyContent:"center"}}>
            <Text style={{fontSize:myFontSize.h3.fontSize,lineHeight:myFontSize.h3.LineHeight,fontFamily:myFontSize.h3.fontFamily,color:myThemeColors.mainfontcolor,textAlign:"left"}}>Health</Text>
        </View>

        <View style={{height:hp('5%'),marginRight:wp('5%'),width:wp('15%')}}>
          {
            Health == true?
              <TouchableOpacity onPress={toggleSwitchHealth} style={{height:hp('4%'),width:wp('16%'),marginTop:hp('0.5%'),justifyContent:"center",alignItems:"flex-end",borderRadius:hp('1.2%'),backgroundColor:"#DDF2EC"}}>
                    <Image source={Switch_On_Icon} style={{height:hp('5%'),width:hp('5%')}}  resizeMode="contain" />
              </TouchableOpacity>:
              <TouchableOpacity onPress={toggleSwitchHealth} style={{height:hp('4%'),width:wp('16%'),marginTop:hp('0.5%'),justifyContent:"center",alignItems:"flex-start",borderRadius:hp('1.2%'),backgroundColor:"#F1F4F7"}}>
                <Image source={Switch_Off_Icon} style={{height:hp('5%'),width:hp('5%')}}  resizeMode="contain" />
              </TouchableOpacity>
          }
        </View>
      </View>

      <View style={{height:hp('7%'),width:wp('100%'),borderBottomWidth:hp('0.15%'),borderColor:myThemeColors.bordercolor_light,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
        <View style={{height:hp('5%'),marginLeft:wp('5%'),width:hp('5%')}}>
        <Image source={Fitbit_Icon} style={{height:hp('5%'),width:hp('5%')}}  resizeMode="contain" />
        </View>

        <View style={{height:hp('5%'),width:wp('60%'),justifyContent:"center"}}>
            <Text style={{fontSize:myFontSize.h3.fontSize,lineHeight:myFontSize.h3.LineHeight,fontFamily:myFontSize.h3.fontFamily,color:myThemeColors.mainfontcolor,textAlign:"left"}}>Fitbit</Text>
        </View>

        <View style={{height:hp('5%'),marginRight:wp('5%'),width:wp('15%'),}}>
        {
            Fitbit == true?
              <TouchableOpacity onPress={toggleSwitchFitbit} style={{height:hp('4%'),marginTop:hp('0.5%'),width:wp('16%'),justifyContent:"center",alignItems:"flex-end",borderRadius:hp('1.2%'),backgroundColor:"#DDF2EC"}}>
                  <Image source={Switch_On_Icon} style={{height:hp('5%'),width:hp('5%')}}  resizeMode="contain" />
              </TouchableOpacity>
              :
              <TouchableOpacity onPress={toggleSwitchFitbit} style={{height:hp('4%'),marginTop:hp('0.5%'),width:wp('16%'),justifyContent:"center",alignItems:"flex-start",borderRadius:hp('1.2%'),backgroundColor:"#F1F4F7"}}>
              <Image source={Switch_Off_Icon} style={{height:hp('5%'),width:hp('5%')}}  resizeMode="contain" />
              </TouchableOpacity>
        }
        </View>
      </View>

      <TouchableOpacity onPress={OnConnectClick} style={{backgroundColor:myThemeColors.primary,paddingVertical:hp('2%'),paddingHorizontal:wp('6%'),marginTop:hp('3%'),alignSelf:"center",borderRadius:hp('1%'),justifyContent:"center",alignItems:"center"}}>
                    <Text style={{fontSize:myFontSize.h3.fontSize,lineHeight:myFontSize.h3.LineHeight,fontFamily:myFontSize.h3.fontFamily,color:myThemeColors.mainfontcolor,textAlign:"left",color:myThemeColors.white}}>Connect</Text>
      </TouchableOpacity>


      </View>

    )
}

const styles = StyleSheet.create({
    main_container: {
        height:hp('100%'),
        width:wp('100%'),
    },
});