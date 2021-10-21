import React  from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,
    Text,
    TextInput,
    useColorScheme,
    Button,
    Image,
   
    View,
    Animated,
} from 'react-native';
import {Back_Icon,Hiking_Icon,Run_Icon,Walk_Icon,Bike_Icon} from '../utils/appconstants';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import myThemeColors from '../utils/myThemeColors';
import myFontSize from '../utils/myFontSize';

const Challenge = (props) =>{
    const [press,setpress] = React.useState(0);
    const OnNextClick =()=>{
        props.navigation.navigate('CreateChallenge3');
    }
    return(
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
                <Text style={{top:hp('0.5%'),color:myThemeColors.mainfontcolor,fontSize:myFontSize.h2.fontSize,fontFamily:myFontSize.h2.fontFamily,lineHeight:myFontSize.h2.lineHeight}}>Challenge Type</Text>
            </View>
            <View style={{height:hp('8%'),width:wp('20%'),justifyContent:"center",alignItems:"center"}}>    
            <Text style={{fontSize:myFontSize.body.fontSize,fontFamily:myFontSize.body.fontFamily,lineHeight:myFontSize.body.lineHeight,color:myThemeColors.secondfontcolor}}>Step 2/5</Text>
            </View>
            </View>

            <View style={{height:hp('8%'),width:wp('100%'),justifyContent:"center",}}>
                <Text
                 style={{marginLeft:hp('2%'),fontSize:myFontSize.small.fontSize,fontFamily:myFontSize.small.fontFamily,lineHeight:myFontSize.small.lineHeight,color:myThemeColors.secondfontcolor}}

       
                >
                    Choose Challenge Type
                </Text>   
            </View>

            <View style={{height:hp('25%'),width:wp('100%'),flexDirection:"row"}}>

                <TouchableOpacity
                    onPress={() =>{setpress(1)}} style={press==1?styles.Touch:styles.Nontouch}
                >
                   
                    
                        <View style={{alignItems:"center",height:hp('4%'),width:wp('4%'),justifyContent:"center"}}>

                            <Image style={{height:hp('3%'),width:wp('7%')}}
                            source={Walk_Icon} resizeMode="contain"   
                            
                            tintColor={press==1?"#57C09E":"black"}
                            />
                        </View> 

                        <View style={{height:hp('7%'),justifyContent:"center"}}>
                            <Text 
                            style={{fontSize:myFontSize.labels.fontSize,fontFamily:myFontSize.labels.fontFamily,lineHeight:myFontSize.labels.lineHeight,color:myThemeColors.mainfontcolor}}
                            >
                                Walking
                            </Text>
                        </View>

                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() =>{setpress(2)}} style={press==2?styles.Touch:styles.Nontouch}
                >
                  
                    
                        <View style={{alignItems:"center",height:hp('4%'),width:wp('4%'),justifyContent:"center"}}>
                            <Image style={{height:hp('3%'),width:wp('7%')}}
                            source={Run_Icon}    resizeMode="contain" 
                          
                            tintColor={press==2?"#57C09E":"black"}
                            />
                        </View> 

                        <View style={{height:hp('7%'),justifyContent:"center"}}>
                            <Text 
                            style={{fontSize:myFontSize.labels.fontSize,fontFamily:myFontSize.labels.fontFamily,lineHeight:myFontSize.labels.lineHeight,color:myThemeColors.mainfontcolor}}
                            >
                                Running / Jogging
                            </Text>
                        </View>

                   
                </TouchableOpacity>
                
            </View>

            <View style={{height:hp('25%'),width:wp('100%'),flexDirection:"row"}}>
                
                <TouchableOpacity
                    onPress={() =>{setpress(3)}} style={press==3?styles.Touch:styles.Nontouch}
                >
                  
                    
                        <View style={{alignItems:"center",height:hp('4%'),width:wp('4%'),justifyContent:"center"}}>
                            <Image style={{height:hp('3%'),width:wp('7%')}}
                            source={Bike_Icon}  resizeMode="contain"  
                         
                            tintColor={press==3?"#57C09E":"black"}
                            />
                        </View> 

                        <View style={{height:hp('7%'),justifyContent:"center"}}>
                        <Text
                            style={{fontSize:myFontSize.labels.fontSize,fontFamily:myFontSize.labels.fontFamily,lineHeight:myFontSize.labels.lineHeight,color:myThemeColors.mainfontcolor}}
                        >
                            Cycling
                        </Text>
                        </View>
                    
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() =>{setpress(4)}} style={press==4?styles.Touch:styles.Nontouch}
                >
                    
                    
                        <View style={{alignItems:"center",height:hp('4%'),width:wp('4%'),justifyContent:"center"}}>
                            <Image  style={{height:hp('3%'),width:wp('7%')}}
                            source={Hiking_Icon}    resizeMode="contain" 
                           
                            tintColor={press==4?"#57C09E":"black"}
                            />
                        </View> 

                        <View style={{height:hp('7%'),justifyContent:"center"}}>
                            <Text 
                            style={{fontSize:myFontSize.labels.fontSize,fontFamily:myFontSize.labels.fontFamily,lineHeight:myFontSize.labels.lineHeight,color:myThemeColors.mainfontcolor}}
                            >
                                Hiking
                            </Text>
                        </View>

                  
                </TouchableOpacity>
                
            </View>

       
            <View style={{position:"absolute",bottom:hp('6%'),alignSelf:"center",justifyContent:"center",alignItems:"center",}}>
            <TouchableOpacity
                        onPress={OnNextClick}
                        
                        style={{ backgroundColor: myThemeColors.primary, paddingVertical: hp('2%'), paddingHorizontal: wp('6%'), marginBottom: hp('5%'), alignSelf: "center", borderRadius: hp('1%'), justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ fontSize: myFontSize.h3.fontSize, fontFamily: myFontSize.h3.fontFamily, lineHeight: myFontSize.h3.lineHeight, color: myThemeColors.white }}>Next</Text>
                    </TouchableOpacity>
            </View>

        </View>
   
    );
}

const styles = StyleSheet.create(
    {
        Touch:{
            height:hp('22%'),
            width:wp('44%'),
            marginLeft:hp('2%'),
            marginTop:hp('0.5%'),
            borderColor:"#57C09E",
            borderWidth:hp('0.2%'),
            borderRadius:hp('4%'),
            justifyContent:"center",
            alignItems:"center",
            backgroundColor:"#EEF9F5"
        },
        main_container: {
            width: wp('100%'),
            height: hp('100%')+ StatusBar.currentHeight,
            paddingTop: StatusBar.currentHeight,
            backgroundColor:myThemeColors.mainbg
        },

        Nontouch:{
            height:hp('22%'),
        width:wp('44%'),
        marginLeft:hp('2%'),
        marginTop:hp('0.5%'),
        borderColor:"#E1EAF7",
        borderWidth:hp('0.2%'),
        borderRadius:hp('4%'),
        justifyContent:"center",
        alignItems:"center"
        }
    }
);

export default Challenge;