import React from 'react';
import { useState,useEffect,useCallback, useRef, } from "react";

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
    TouchableWithoutFeedback
} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import myThemeColors from '../utils/myThemeColors';
import myFontSize from '../utils/myFontSize';
import { App_Logo } from '../utils/appconstants';


export default function Login(props) {

    const [email,Setemail] = useState("");
    
    const emailRef = useRef();

    const OnSendClick =()=>{
        Setemail("");
        props.navigation.navigate('ResetPassword');
    }
    return (
        <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>

        <View style={[styles.main_container,{backgroundColor:myThemeColors.mainbg}]}>
        <StatusBar
           backgroundColor = {myThemeColors.mainbg}
           barStyle = {"dark-content"}
         />
        <KeyboardAwareScrollView style={{height:hp('100%')+StatusBar.currentHeight,width:wp('100%'),}} enableOnAndroid extraHeight={hp('5%')} contentContainerStyle={{}}>
        <View style={{height:hp('20%'),width:wp('100%'),justifyContent:"center",alignItems:"center",}}>
        <Image source={App_Logo} style={{height:hp('15%'),width:wp('50%')}} resizeMode="contain" />
        </View>

        <View style={{height:hp('80%'),width:wp('100%')}}>
            <View style={{height:hp('5%'),width:wp('100%'),marginTop:hp('4%'),justifyContent:"center",alignItems:"center"}}>
                    <Text style={{fontSize:myFontSize.h1.fontSize,lineHeight:myFontSize.h1.LineHeight,fontFamily:myFontSize.h1.fontFamily,color:myThemeColors.mainfontcolor}}>Forgot Password?</Text>
            </View>

            <View style={{marginTop:hp('1%'),width:wp('90%'),alignSelf:"center",paddingHorizontal:wp('0.1%'),justifyContent:"center",alignItems:"center"}}>
                    <Text style={{fontSize:myFontSize.body.fontSize,lineHeight:myFontSize.body.LineHeight,fontFamily:myFontSize.body.fontFamily,color:myThemeColors.mainfontcolor}}>Don't worry. Resetting your password is easy, just tell us the email address you registered with Growshr.</Text>
            </View>

            <View style={{height:hp('6%'),marginTop:hp('3.3%'),width:wp('90%'),alignSelf:"center",borderWidth:hp('0.1%'),borderRadius:hp('1%'),borderColor:myThemeColors.bordercolor_gray}}>        
            <TextInput style = {{flex:1,paddingHorizontal:wp('4%'),color:myThemeColors.mainfontcolor,fontSize:myFontSize.body.fontSize,lineHeight:myFontSize.body.LineHeight,fontFamily:myFontSize.body.fontFamily}}
                ref={emailRef}
                returnKeyType="done"
                onSubmitEditing={()=>{Keyboard.dismiss()}}
                blurOnSubmit={false}
                underlineColorAndroid = "transparent"
                placeholder = "Email"
                placeholderTextColor ={myThemeColors.secondfontcolor}
                keyboardType="email-address"
                value={email}
                onChangeText={(e) => Setemail(e)}  
                />
            </View>
            <TouchableOpacity onPress={OnSendClick} style={{backgroundColor:myThemeColors.primary,paddingVertical:hp('2%'),paddingHorizontal:wp('6%'),marginTop:hp('3.3%'),alignSelf:"center",borderRadius:hp('1%'),justifyContent:"center",alignItems:"center"}}>
                    <Text style={{fontSize:myFontSize.h3.fontSize,fontFamily:myFontSize.h3.fontFamily,lineHeight:myFontSize.h3.lineHeight,color:myThemeColors.white}}>Send</Text>
            </TouchableOpacity>
            
        </View>

            <View style={{position:"absolute",width:wp('100%'),bottom:hp('5%'),flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                    <Text style={{color:myThemeColors.mainfontcolor,fontSize:myFontSize.body.fontSize,lineHeight:myFontSize.body.LineHeight,fontFamily:myFontSize.body.fontFamily}}>Go back to </Text>
                    <Text onPress={()=>{props.navigation.replace('Login')}} style={{color:myThemeColors.primary,fontSize:myFontSize.body.fontSize,lineHeight:myFontSize.body.LineHeight,fontFamily:myFontSize.body.fontFamily}}>Login</Text>
            </View>
        </KeyboardAwareScrollView>
      </View>
    </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    main_container: {
        height:hp('100%'),
        width:wp('100%'),
    },
});