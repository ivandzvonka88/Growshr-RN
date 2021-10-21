import React  from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,
     TouchableWithoutFeedback,
    Text,
    TextInput,
    useColorScheme,
    Button,
    Image,
    View,
    Animated,
    Keyboard,
} from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {Back_Icon,Calendar_Icon,Clock_Icon} from '../utils/appconstants';
import myThemeColors from '../utils/myThemeColors';
import myFontSize from '../utils/myFontSize';

const Challengeaddone = (props) =>{

    const OnNextClick =()=>{
        props.navigation.navigate('CreateWalk2');
    }
    
    return(
        <TouchableWithoutFeedback onPress={() =>{
                Keyboard.dismiss();
                console.log('dismissed keyboard');
        }}>
        <View style={[styles.main_container,{backgroundColor:myThemeColors.mainbg}]}>
        <StatusBar
                translucent={true}
                backgroundColor = {'transparent'}
                barStyle = {"dark-content"}
            />
            <View style={{height:hp('8%'),width:wp('100%'),backgroundColor:myThemeColors.mainbg,flexDirection:"row",borderBottomWidth:hp('0.15%'),borderColor:myThemeColors.bordercolor_light,justifyContent:"space-between",alignItems:"center"}}>
            <TouchableOpacity onPress={() => { props.navigation.goBack() }} style={{height:hp('8%'),width:wp('15%'),justifyContent:"center",alignItems:"center"}}>
               <Image source={Back_Icon} style={{height:hp('3%'),width:hp('3%'),top:hp('0.2%')}}  />
            </TouchableOpacity>
            <View style={{height:hp('8%'),width:wp('60%'),justifyContent:"center",alignItems:"center"}}>
                <Text style={{top:hp('0.5%'),color:myThemeColors.mainfontcolor,fontSize:myFontSize.h2.fontSize,fontFamily:myFontSize.h2.fontFamily,lineHeight:myFontSize.h2.lineHeight}}>Create a Walk</Text>
            </View>
            <View style={{height:hp('8%'),width:wp('20%'),justifyContent:"center",alignItems:"center"}}>    
            <Text style={{fontSize:myFontSize.body.fontSize,fontFamily:myFontSize.body.fontFamily,lineHeight:myFontSize.body.lineHeight,color:myThemeColors.secondfontcolor}}>Step 1/6</Text>
            </View>
            </View>

            <View style={{height:hp('8%'),width:wp('100%'),justifyContent:"center",}}>
                <Text
                  style={{marginLeft:hp('2%'),fontSize:myFontSize.small.fontSize,fontFamily:myFontSize.small.fontFamily,lineHeight:myFontSize.small.lineHeight,color:myThemeColors.secondfontcolor}}
                 >
                    Walk Name
                </Text>   
            </View>

            <View style={{height:hp('35%'),width:wp('100%'),alignItems:"center"}}>

                <View style={{height:hp('20%'),width:wp('90%'),}}>
                    <TextInput
                        style={{fontSize:myFontSize.h1.fontSize,fontFamily:myFontSize.h1.fontFamily,lineHeight:myFontSize.h1.lineHeight,color:myThemeColors.thirdfontcolor,}}
                        autoFocus={true}
                        placeholderTextColor="#919FB4"
                        placeholder="eg. Evening walk "
                        color="black"
                    />
                </View>

            </View>

            <View style={{position:"absolute",bottom:hp('2%'),alignSelf:"center",justifyContent:"center",alignItems:"center",}}>
            <TouchableOpacity
                        onPress={OnNextClick}
                        style={{ backgroundColor: myThemeColors.primary, paddingVertical: hp('2%'), paddingHorizontal: wp('6%'), marginBottom: hp('5%'), alignSelf: "center", borderRadius: hp('1%'), justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ fontSize: myFontSize.h3.fontSize, fontFamily: myFontSize.h3.fontFamily, lineHeight: myFontSize.h3.lineHeight, color: myThemeColors.white }}>Next</Text>
                    </TouchableOpacity>
            </View>
  
        </View>

    </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    main_container: {
        width: wp('100%'),
        height: hp('100%')+ StatusBar.currentHeight,
        paddingTop: StatusBar.currentHeight,
        backgroundColor:myThemeColors.mainbg
    },
});


export default Challengeaddone;