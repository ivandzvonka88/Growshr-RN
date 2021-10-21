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
import { App_Logo,Auth_FB_Icon,Auth_Google_Icon,Auth_Twitter_Icon,Eye_Icon,Eye_Off_Icon } from '../utils/appconstants';


export default function Login(props) {

    const [fullname,Setfullname] = useState("");
    const [email,Setemail] = useState("");
    const [password,Setpassword] = useState("");
    const [passwordVisibility,SetpasswordVisibility] = useState(true);

    const TogglePasswordVisibility = () =>{
        SetpasswordVisibility(!passwordVisibility);
    }

    const fullnameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const focusEmail = useCallback(() => {
        emailRef.current.focus();
      }, []);

    const focusPassword = useCallback(() => {
      passwordRef.current.focus();
    }, []);


    const OnLoginClick =()=>{
        Setfullname("");
        Setemail("");
        Setpassword("");
        props.navigation.navigate('Login');
    }

    const OnRegisterClick =()=>{
        Setfullname("");
        Setemail("");
        Setpassword("");
        props.navigation.navigate('ConnectTracker');
    }

    const OnFacebookClick =()=>{
    }

    const OnGoogleClick =()=>{
    }

    const onTwitterClick =()=>{
    }
    
    return (
        <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>

        <View style={[styles.main_container,{backgroundColor:myThemeColors.mainbg}]}>
        <StatusBar
           backgroundColor = {myThemeColors.mainbg}
           barStyle = {"dark-content"}
         />
        <KeyboardAwareScrollView style={{height:hp('100%')+StatusBar.currentHeight,width:wp('100%'),}} enableOnAndroid extraHeight={hp('5%')} contentContainerStyle={{}}>
        <View style={{height:hp('17%'),width:wp('100%'),justifyContent:"center",alignItems:"center",}}>
        <Image source={App_Logo} style={{height:hp('15%'),width:wp('50%'),bottom:hp('1.5%')}} resizeMode="contain" />
        </View>

        <View style={{height:hp('48%'),width:wp('100%')}}>
            <View style={{height:hp('4.5%'),width:wp('100%'),justifyContent:"center",alignItems:"center"}}>
                    <Text style={{fontSize:myFontSize.h1.fontSize,lineHeight:myFontSize.h1.LineHeight,fontFamily:myFontSize.h1.fontFamily,color:myThemeColors.mainfontcolor}}>Register</Text>
            </View>

            <View style={{height:hp('7%'),marginTop:hp('2%'),width:wp('90%'),alignSelf:"center",borderWidth:hp('0.1%'),borderRadius:hp('1%'),borderColor:myThemeColors.bordercolor_gray}}>        
            <TextInput style = {{flex:1,paddingHorizontal:wp('4%'),color:myThemeColors.mainfontcolor,fontSize:myFontSize.body.fontSize,fontFamily:myFontSize.body.fontFamily,lineHeight:myFontSize.body.lineHeight}}
                ref={fullnameRef}
                returnKeyType="next"
                onSubmitEditing={focusEmail}
                blurOnSubmit={false}
                underlineColorAndroid = "transparent"
                placeholder = "Full Name"
                placeholderTextColor ={myThemeColors.secondfontcolor}
                value={fullname}
                onChangeText={(e) => Setfullname(e)}  
                />
            </View>

            <View style={{height:hp('7%'),marginTop:hp('2%'),width:wp('90%'),alignSelf:"center",borderWidth:hp('0.1%'),borderRadius:hp('1%'),borderColor:myThemeColors.bordercolor_gray}}>        
            <TextInput style = {{flex:1,paddingHorizontal:wp('4%'),color:myThemeColors.mainfontcolor,fontSize:myFontSize.body.fontSize,fontFamily:myFontSize.body.fontFamily,lineHeight:myFontSize.body.lineHeight}}
                ref={emailRef}
                returnKeyType="next"
                onSubmitEditing={focusPassword}
                blurOnSubmit={false}
                underlineColorAndroid = "transparent"
                placeholder = "Email"
                placeholderTextColor ={myThemeColors.secondfontcolor}
                keyboardType="email-address"
                value={email}
                onChangeText={(e) => Setemail(e)}  
                />
            </View>

            <View style={{height:hp('7%'),marginTop:hp('2%'),width:wp('90%'),alignSelf:"center",flexDirection:"row",borderWidth:hp('0.1%'),borderRadius:hp('1%'),borderColor:myThemeColors.bordercolor_gray}}>        
            <TextInput style = {{flex:1,paddingLeft:wp('4%'),paddingRight:wp('2%'),color:myThemeColors.mainfontcolor,fontSize:myFontSize.body.fontSize,fontFamily:myFontSize.body.fontFamily,lineHeight:myFontSize.body.lineHeight}}
                ref={passwordRef}
                returnKeyType="done"
                onSubmitEditing={()=>{Keyboard.dismiss()}}
                blurOnSubmit={false}
                underlineColorAndroid = "transparent"
                placeholder = "Create Password"
                secureTextEntry={passwordVisibility}
                placeholderTextColor ={myThemeColors.secondfontcolor}
                value={password}
                onChangeText={(e) => Setpassword(e)}  
                />
            <TouchableOpacity onPress={TogglePasswordVisibility} activeOpacity={0.8} style={{zIndex:100,width:wp('12%'),justifyContent:"center",alignItems:"center"}}>
                {
                    passwordVisibility?<Image source={Eye_Icon}  style={{height:hp('3%'),width:hp('3%')}} resizeMode="contain" />:<Image source={Eye_Off_Icon}  style={{height:hp('3%'),width:hp('3%')}} resizeMode="contain" />
                }
            </TouchableOpacity>
            </View>

            <View style={{height:hp('3%'),marginTop:hp('0.3%'),width:wp('90%'),alignSelf:"center",justifyContent:"center"}}>
                    <Text style={{fontSize:myFontSize.small.fontSize,fontFamily:myFontSize.small.fontFamily,lineHeight:myFontSize.small.lineHeight,color:myThemeColors.secondfontcolor}}>Your password should contain atleast 8 characters.</Text>
            </View>

            <TouchableOpacity onPress={OnRegisterClick} style={{backgroundColor:myThemeColors.primary,paddingVertical:hp('2%'),paddingHorizontal:wp('6%'),marginTop:hp('2%'),alignSelf:"center",borderRadius:hp('1%'),justifyContent:"center",alignItems:"center"}}>
                    <Text style={{fontSize:myFontSize.h3.fontSize,fontFamily:myFontSize.h3.fontFamily,lineHeight:myFontSize.h3.lineHeight,color:myThemeColors.white}}>Register</Text>
            </TouchableOpacity>

            <View style={{height:hp('4%'),marginTop:hp('1%'),width:wp('100%'),justifyContent:"center",alignItems:"center",flexDirection:"row"}}>
                    <Text style={{fontSize:myFontSize.body.fontSize,fontFamily:myFontSize.body.fontFamily,lineHeight:myFontSize.body.lineHeight,color:myThemeColors.mainfontcolor}}>Already have an account ?</Text>
                    <TouchableOpacity onPress={OnLoginClick}>
                    <Text style={{fontSize:myFontSize.body.fontSize,fontFamily:myFontSize.body.fontFamily,lineHeight:myFontSize.body.lineHeight,color:myThemeColors.primary,marginLeft:wp('1%')}}>Login</Text>
                    </TouchableOpacity>

            </View>
            
        </View>



        <View style={{height:hp('30%'),marginTop:hp('3%'),width:wp('100%'),justifyContent:"space-between",alignItems:"center",paddingBottom:hp('3%')}}>
            <View style={{height:hp('3%'),width:wp('80%'),alignSelf:"center",justifyContent:"center",alignItems:"center"}}>
                    <Text style={{fontSize:myFontSize.small.fontSize,fontFamily:myFontSize.small.fontFamily,lineHeight:myFontSize.small.lineHeight,color:myThemeColors.secondfontcolor}}>or connect with</Text>
            </View>

            <TouchableOpacity onPress={OnFacebookClick} style={{backgroundColor:"#E1E7F3",height:hp('7%'),borderRadius:hp('1%'),width:wp('90%'),alignSelf:"center",justifyContent:"center",alignItems:"center",flexDirection:"row"}}>
            <View style={{left:wp('3%'),height:hp('5%'),width:hp('4%'),justifyContent:"center",alignItems:"center"}}>
                <Image source={Auth_FB_Icon} style={{height:hp('3%'),width:hp('3%')}} resizeMode="contain" />
            </View>
                    <View style={{left:wp('3%'),height:hp('5%'),width:hp('14%'),justifyContent:"center"}}>
                    <Text style={{marginLeft:wp('2%'),fontSize:myFontSize.h3.fontSize,fontFamily:myFontSize.h3.fontFamily,lineHeight:myFontSize.h3.lineHeight,color:"#4267B2",textAlign:"left"}}>Facebook</Text>
                    </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={OnGoogleClick} style={{backgroundColor:'#F9E1DF',height:hp('7%'),borderRadius:hp('1%'),width:wp('90%'),alignSelf:"center",justifyContent:"center",alignItems:"center",flexDirection:"row"}}>
            <View style={{left:wp('3%'),height:hp('5%'),width:hp('4%'),justifyContent:"center",alignItems:"center"}}>
            <Image source={Auth_Google_Icon} style={{height:hp('3%'),width:hp('3%')}} resizeMode="contain" />
            </View>
                    <View style={{left:wp('3%'),height:hp('5%'),width:hp('14%'),justifyContent:"center"}}>
                    <Text style={{marginLeft:wp('2%'),fontSize:myFontSize.h3.fontSize,fontFamily:myFontSize.h3.fontFamily,lineHeight:myFontSize.h3.lineHeight,color:'#DB4437',textAlign:"left"}}>Google</Text>
                    </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={onTwitterClick} style={{backgroundColor:'#DBF0FD',height:hp('7%'),borderRadius:hp('1%'),width:wp('90%'),alignSelf:"center",justifyContent:"center",alignItems:"center",flexDirection:"row"}}>
            <View style={{left:wp('3%'),height:hp('5%'),width:hp('4%'),justifyContent:"center",alignItems:"center"}}>
            <Image source={Auth_Twitter_Icon} style={{height:hp('3%'),width:hp('3%')}} resizeMode="contain" />     
            </View>
                    <View style={{left:wp('3%'),height:hp('5%'),width:hp('14%'),justifyContent:"center"}}>
                    <Text style={{marginLeft:wp('2%'),fontSize:myFontSize.h3.fontSize,fontFamily:myFontSize.h3.fontFamily,lineHeight:myFontSize.h3.lineHeight,color:'#1DA1F2',textAlign:"left"}}>Twitter</Text>
                    </View>
            </TouchableOpacity>
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