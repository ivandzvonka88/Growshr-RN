import React  from 'react';
import { useState,useEffect,useCallback, useRef, } from "react";
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
    Platform
} from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {Back_Icon,Calendar_Icon,Clock_Icon} from '../utils/appconstants';
import myThemeColors from '../utils/myThemeColors';
import myFontSize from '../utils/myFontSize';
import DateTimePicker from '@react-native-community/datetimepicker';
import Moment from 'moment';

const Challengedate = (props) =>{
    const [start_date,Setstart_date] = useState(null);
    const [start_time,Setstart_time] = useState(null);
    const [end_date,Setend_date] = useState(null);
    const [end_time,Setend_time] = useState(null);

    const [start_dateVisibility,Setstart_dateVisibility] = useState(false);
    const [start_timeVisibility,Setstart_timeVisibility] = useState(false);

    const start_dateRef = useRef();
    const start_timeRef = useRef();

    const Onstart_dateFocus = () => {
      Keyboard.dismiss();
      Setstart_dateVisibility(true);
    };

    const Onstart_timeFocus = () => {
        Keyboard.dismiss();
        Setstart_timeVisibility(true);
    };

    const setStartDateMethod = (event, date) => {
        let day = Moment(date,'DD-MM-YYYY');
        let finaldate = Moment(day).format('DD-MM-YYYY');
        Setstart_date(finaldate);
        console.log('end_date =',start_date)
        Setstart_dateVisibility(false);
    };

    const setStartTimeMethod = (event, date) => {
        let day = Moment(date,'HH:mm A');
        let finaldate = Moment(day).format('HH:mm A');
        Setstart_time(finaldate);
        console.log('start_time =',start_time)
        Setstart_timeVisibility(false);
    };
    

    const OnNextClick =()=>{
        props.navigation.navigate('CreateWalk5');
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
                <Text style={{top:hp('0.5%'),color:myThemeColors.mainfontcolor,fontSize:myFontSize.h2.fontSize,fontFamily:myFontSize.h2.fontFamily,lineHeight:myFontSize.h2.lineHeight}}>Date & Time</Text>
            </View>
            <View style={{height:hp('8%'),width:wp('20%'),justifyContent:"center",alignItems:"center"}}>    
            <Text style={{fontSize:myFontSize.body.fontSize,fontFamily:myFontSize.body.fontFamily,lineHeight:myFontSize.body.lineHeight,color:myThemeColors.secondfontcolor}}>Step 4/5</Text>
            </View>
            </View>
        

            <View style={{height:hp('8%'),width:wp('100%'),justifyContent:"center",}}>
                <Text
                  style={{marginLeft:hp('2%'),fontSize:myFontSize.small.fontSize,fontFamily:myFontSize.small.fontFamily,lineHeight:myFontSize.small.lineHeight,color:myThemeColors.secondfontcolor}}
                 >
                    Choose Walk Start Date and Time
                </Text>   
            </View>

        <View style={{height:hp('35%'),width:wp('100%'),}}>

            <View style={{height:hp('10%'),width:wp('100%'),flexDirection:"row"}}>

                    <View style={{height:hp('8%'),width:wp('44%'),marginLeft:hp('2%'),marginTop:hp('0.5%'),borderColor:"#E1EAF7",borderWidth:hp('0.2%'),borderRadius:hp('1%'),justifyContent:"center",}}>
                    
                        <View style={{flexDirection:"row",justifyContent:"center"}}>

                            <View style={{alignItems:"flex-start",justifyContent:"center",width:wp('29%'),height:hp('5%')}}>

                                <TextInput 
                                     style={{fontSize:myFontSize.body.fontSize,fontFamily:myFontSize.body.fontFamily,lineHeight:myFontSize.body.lineHeight,color:myThemeColors.mainfontcolor,width:wp('29%'),height:hp('5%')}}
                                    ref={start_dateRef}
                                    placeholderTextColor={myThemeColors.secondfontcolor}
                                    placeholder="Start Date"
                                    onFocus={Onstart_dateFocus}
                                    value={start_date}
                                />
                                { start_dateVisibility == true ?
                                    <DateTimePicker value={new Date()} mode={'date'}  display="calendar"
                                                onChange={setStartDateMethod}/>
                                    :null
                                }

                            </View>
                        <View style={{justifyContent:"center",alignItems:"center",}}>
                            <Image  style={{height:hp('3%'),width:wp('7%')}}
                            source={Calendar_Icon}     resizeMode="contain"
                           
                            />
                            </View>
                        </View> 

                    </View>

                    <View style={{height:hp('8%'),width:wp('44%'),marginLeft:hp('2%'),marginTop:hp('0.5%'),borderColor:"#E1EAF7",borderWidth:hp('0.2%'),borderRadius:hp('1%'),justifyContent:"center",}}>
                    
                        <View style={{flexDirection:"row",justifyContent:"center",}}>

                        <View style={{alignItems:"flex-start",justifyContent:"center",width:wp('29%'),height:hp('5%')}}>

                        <TextInput 
                            style={{fontSize:myFontSize.body.fontSize,fontFamily:myFontSize.body.fontFamily,lineHeight:myFontSize.body.lineHeight,color:myThemeColors.mainfontcolor,width:wp('29%'),height:hp('5%')}}
                            ref={start_timeRef}
                            placeholderTextColor={myThemeColors.secondfontcolor}
                            placeholder="Start Time"
                            onFocus={Onstart_timeFocus}
                            value={start_time}
                        />
                        { start_timeVisibility == true ?
                            <DateTimePicker value={new Date()} mode={'time'}  display="clock"
                                        onChange={setStartTimeMethod}/>
                            :null
                        }

                        </View>

                        <View style={{justifyContent:"center",alignItems:"center",}}>
                            <Image  style={{height:hp('3%'),width:wp('7%')}}
                            source={Clock_Icon}     resizeMode="contain"      
                            />
                            </View>
                        </View> 

                    </View>
      
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
    );
}

const styles = StyleSheet.create(
    {
        main_container: {
            width: wp('100%'),
            height: hp('100%')+ StatusBar.currentHeight,
            paddingTop: StatusBar.currentHeight,
            backgroundColor:myThemeColors.mainbg
        },
    }
);

export default Challengedate;