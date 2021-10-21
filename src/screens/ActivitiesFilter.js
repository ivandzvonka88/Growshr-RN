import React from 'react';
import { useState, useEffect, useCallback, useRef, } from "react";
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
    TouchableWithoutFeedback,
    FlatList,
    ScrollView,
} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import myThemeColors from '../utils/myThemeColors';
import myFontSize from '../utils/myFontSize';
import { Coin_Tile_Color_Icon, Steps_Tile_Color_Icon,Check_Icon,Back_Icon, Clock_Icon, Flame_Color_Icon, Heart_Icon, Walk_Tile_Color_Icon, Bike_Tile_Color_Icon, Run_Tile_Color_Icon, Coin_Color_Icon,chevron_left,search} from '../utils/appconstants';
import { HeaderStyleInterpolators } from '@react-navigation/stack';

export default function Filter(props) {

    const [onClick, setonClick] = React.useState(1);
    const [press,setpress] = React.useState(1);

    const [multiSliderValue, setMultiSliderValue] = useState([0, 1000])
    const multiSliderValuesChange = (values) => setMultiSliderValue(values)

    const [normalSliderValue, setNormalSliderValue] = useState(10000)
    const normalSliderValuesChange = (values) => setNormalSliderValue(values)

    const OnClearClick = () =>{
    }

    const OnApplyClick = () => {
        props.navigation.goBack();
    }

    return (
        <View style={[styles.main_container,{backgroundColor:myThemeColors.mainbg}]}>
        <StatusBar
            translucent={true}
            backgroundColor = {myThemeColors.mainbg}
            barStyle = {"dark-content"}
        />
        <KeyboardAwareScrollView style={{height:hp('100%')+StatusBar.currentHeight,width:wp('100%'),}} enableOnAndroid extraHeight={hp('5%')} contentContainerStyle={{}} keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps={'always'}>
                <View style={{ height: hp('8%'), width: wp('100%'), backgroundColor: myThemeColors.mainbg,flexDirection: "row", borderBottomWidth: hp('0.15%'), borderColor: myThemeColors.bordercolor_light, justifyContent: "space-between", alignItems: "center" }}>    
                <TouchableOpacity onPress={() => { props.navigation.goBack() }} style={{height:hp('8%'),width:wp('15%'),justifyContent:"center",alignItems:"center"}}>
               <Image source={Back_Icon} style={{height:hp('3%'),width:hp('3%'),top:hp('0.2%')}}  />
                </TouchableOpacity>
                        <View style={{ height: hp('8%'), width: wp('50%'), justifyContent: "center", alignItems: "center", }}>
                            <Text style={{ color: myThemeColors.mainfontcolor, fontSize: myFontSize.h2.fontSize, fontFamily: myFontSize.h2.fontFamily, lineHeight: myFontSize.h2.lineHeight }}>Filter</Text>
                        </View>
                    <TouchableOpacity onPress={OnClearClick} style={{ height: hp('8%'), width: wp('15%'), justifyContent: "center",}}>
                        <Text style={{ color: myThemeColors.primary, fontSize: myFontSize.body.fontSize, fontFamily: myFontSize.body.fontFamily, lineHeight: myFontSize.h2.lineHeight }}>Clear</Text>
                    </TouchableOpacity>
                </View>


                <View style={{ height: hp('6%'), width: wp('90%'), justifyContent: "center", alignSelf: "center",}}>
                    <View style={{ marginTop:hp('1%'),height: hp('5%'), width: wp('90%'), justifyContent: "center" ,}} >
                        <Text style={{ color: myThemeColors.secondfontcolor, fontSize: myFontSize.body.fontSize, fontFamily: myFontSize.body.fontFamily, lineHeight: myFontSize.h2.lineHeight }}>Activity Type</Text>
                    </View>
                </View> 
                
                <View style={{ height: hp('17%'), width: wp('90%'), alignSelf: "center", }}>  

                    <View style={{ height: hp("7%"), width: wp('90%'), flexDirection: "row",}}>
                           
                    {press==1 ? 
                        <TouchableOpacity onPress={() => { setpress(0) }} 
                        style={{flexDirection:"row",width:wp("30%"),height:hp("6%"), borderWidth: hp('0.15%'), borderRadius: hp("1.2%"), borderColor: myThemeColors.primary,justifyContent:"center",alignItems:"center" }}>
                            <Text style={{ color: myThemeColors.mainfontcolor, fontSize: myFontSize.body.fontSize, fontFamily: myFontSize.body.fontFamily, lineHeight: myFontSize.h2.lineHeight }}>Walking</Text>
                            <Image style={{height:hp('4%'),width:wp('7%'),marginLeft:hp('2%')}}
                            source={Check_Icon} resizeMode="contain"/>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity onPress={() => { setpress(1) }} 
                            style={{flexDirection:"row",width:wp("25%"),height:hp("6%"), borderWidth: hp('0.15%'), borderRadius: hp("1.2%"), borderColor: "#D7E3F4",justifyContent:"center",alignItems:"center" }}>
                        <Text style={{ color: myThemeColors.secondfontcolor, fontSize: myFontSize.body.fontSize, fontFamily: myFontSize.body.fontFamily, lineHeight: myFontSize.h2.lineHeight }}>Walking</Text>
                        
                        </TouchableOpacity>
                    }


                        {press==2 ? 
                        <TouchableOpacity onPress={() => { setpress(0) }} 
                        style={{marginLeft: wp("2%"),flexDirection:"row",width:wp("30%"),height:hp("6%"), borderWidth: hp('0.15%'), borderRadius: hp("1.2%"),borderColor: myThemeColors.primary,justifyContent:"center",alignItems:"center" }}>
                            <Text style={{ color: myThemeColors.mainfontcolor, fontSize: myFontSize.body.fontSize, fontFamily: myFontSize.body.fontFamily, lineHeight: myFontSize.h2.lineHeight }}>Running</Text>
                            <Image style={{height:hp('4%'),width:wp('7%'),marginLeft:hp('2%')}}
                            source={Check_Icon} resizeMode="contain"/>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity onPress={() => { setpress(2) }} 
                            style={{marginLeft: wp("2%"),flexDirection:"row",width:wp("25%"),height:hp("6%"), borderWidth:hp('0.15%'), borderRadius: hp("1.2%"), borderColor: "#D7E3F4",justifyContent:"center",alignItems:"center" }}>
                        <Text style={{ color: myThemeColors.secondfontcolor, fontSize: myFontSize.body.fontSize, fontFamily: myFontSize.body.fontFamily, lineHeight: myFontSize.h2.lineHeight }}>Running</Text>
                        
                        </TouchableOpacity>
                        }
                       
                       {press==3 ? 
                        <TouchableOpacity onPress={() => { setpress(0) }} 
                        style={{marginLeft: wp("2%"),flexDirection:"row",width:wp("30%"),height:hp("6%"), borderWidth:hp('0.15%'), borderRadius: hp("1.2%"), borderColor: myThemeColors.primary,justifyContent:"center",alignItems:"center" }}>
                            <Text style={{ color: myThemeColors.mainfontcolor, fontSize: myFontSize.body.fontSize, fontFamily: myFontSize.body.fontFamily, lineHeight: myFontSize.h2.lineHeight }}>Cycling</Text>
                            <Image style={{height:hp('4%'),width:wp('7%'),marginLeft:hp('2%')}}
                            source={Check_Icon} resizeMode="contain"/>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity onPress={() => { setpress(3) }} 
                            style={{marginLeft: wp("2%"),flexDirection:"row",width:wp("25%"),height:hp("6%"), borderWidth:hp('0.15%'), borderRadius: hp("1.2%"), borderColor: "#D7E3F4",justifyContent:"center",alignItems:"center" }}>
                        <Text style={{ color: myThemeColors.secondfontcolor, fontSize: myFontSize.body.fontSize, fontFamily: myFontSize.body.fontFamily, lineHeight: myFontSize.h2.lineHeight }}>Cycling</Text>
                        
                        </TouchableOpacity>
                        }

           
                    </View>

             
                    
                    <View style={{ height: hp("6%"), width: wp('30%'), justifyContent: "center",}}>

                    {press==4 ? 
                        <TouchableOpacity onPress={() => { setpress(0) }} 
                        style={{flexDirection:"row",width:wp("30%"),height:hp("6%"), borderWidth:hp('0.15%'), borderRadius: hp("1.2%"), borderColor: myThemeColors.primary,justifyContent:"center",alignItems:"center" }}>
                            <Text style={{ color: myThemeColors.mainfontcolor, fontSize: myFontSize.body.fontSize, fontFamily: myFontSize.body.fontFamily, lineHeight: myFontSize.h2.lineHeight }}>Hiking</Text>
                            <Image style={{height:hp('4%'),width:wp('7%'),marginLeft:hp('2%')}}
                            source={Check_Icon} resizeMode="contain"/>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity onPress={() => { setpress(4) }} 
                            style={{flexDirection:"row",width:wp("25%"),height:hp("6%"), borderWidth:hp('0.15%'), borderRadius: hp("1.2%"), borderColor: "#D7E3F4",justifyContent:"center",alignItems:"center" }}>
                        <Text style={{ color: myThemeColors.secondfontcolor, fontSize: myFontSize.body.fontSize, fontFamily: myFontSize.body.fontFamily, lineHeight: myFontSize.h2.lineHeight }}>Hiking</Text>
                        
                        </TouchableOpacity>
                        }

                    </View>
                </View>


                <View style={{ height: hp("4%"), width: wp('90%'), alignSelf: "center",}}>
                    <Text style={{ color: myThemeColors.secondfontcolor, fontSize: myFontSize.body.fontSize, fontFamily: myFontSize.body.fontFamily, lineHeight: myFontSize.h2.lineHeight }}>Coins Wagered</Text>
                </View>

                <View style={{ height: hp("7%"), width: wp('90%'), alignSelf: "center", flexDirection: 'row',}}>
                    <View style={{ height: hp("7%"), width: wp('43%'), marginRight: wp("2%"), justifyContent: "center", borderWidth:hp('0.15%'), borderColor: myThemeColors.bordercolor_light, borderRadius: hp("1.2%") }}>
                        <TextInput
                            style={{ paddingLeft: wp("4%") }}
                            placeholderTextColor='#919FB4'
                            placeholder="0"
                            keyboardType="default"
                            color="black"
                            value={multiSliderValue[0].toString()}
                                                    />
                    </View>
                    <View style={{ height: hp("7%"), width: wp('43%'), marginLeft: wp("2%"), justifyContent: "center", borderWidth:hp('0.15%'), borderColor: myThemeColors.bordercolor_light, borderRadius: hp("1.2%") }}>
                        <TextInput
                            style={{ paddingLeft: wp("4%") }}
                            placeholderTextColor='#919FB4'
                            placeholder="1000"
                            keyboardType="default"
                            color="black"
                            value={multiSliderValue[1].toString()}
                        />
                    </View>

                </View>

                <View style={{ height: hp("5%"), width: wp('90%'), alignSelf: "center", flexDirection: 'row',alignItems:"center",justifyContent:"center",marginTop:hp('1.5%')}}>
                        <MultiSlider
                                markerStyle={{
                                
                                        height: hp('3%'),
                                        width: hp('2%'),
                                        shadowColor: '#000000',
                                        shadowOffset: {
                                        width: 0,
                                        height: 3
                                        },
                                        shadowRadius: 1,
                                        shadowOpacity: 0.1,
                                        borderRadius: hp('0.3%'),
                                        backgroundColor: myThemeColors.primary     
                                }}
                                pressedMarkerStyle={{
                                        height: hp('3.5%'),
                                        width: hp('2.5%'),
                                        borderRadius: hp('0.6%'),
                                        backgroundColor: myThemeColors.primary  
                                }}
                                selectedStyle={{
                                    backgroundColor: myThemeColors.primary,
                                }}
                                trackStyle={{
                                    backgroundColor: myThemeColors.bordercolor_light,
                                    borderRadius:hp('2%')
                                }}
                                touchDimensions={{
                                    height: hp('3%'),
                                    width: hp('3%'),
                                    borderRadius: 20,
                                    slipDisplacement: 40
                                }}
                                values={[multiSliderValue[0], multiSliderValue[1]]}
                                sliderLength={wp('86%')}
                                onValuesChange={multiSliderValuesChange}
                                min={0}
                                max={1000}
                                allowOverlap={false}
                                minMarkerOverlapDistance={50}
                                />

                </View>


                <View style={{ height: hp("4%"), width: wp('90%'),marginTop:hp('1%'), alignSelf: "center",justifyContent:"center",}}>
                    <Text style={{ color: myThemeColors.secondfontcolor, fontSize: myFontSize.body.fontSize, fontFamily: myFontSize.body.fontFamily, lineHeight: myFontSize.h2.lineHeight }}>Privacy</Text>
                </View>

                
                <View style={{ width: wp("90%"), height: hp("7%"), flexDirection: "row", alignSelf: "center", backgroundColor: myThemeColors.bordercolor_light, marginTop: hp("1%"), borderRadius: hp("1.5%") }}>
                    <TouchableOpacity onPress={() => { setonClick(1) }} style={onClick == 1 ? styles.public_transperant : styles.pulic_text_view}>
                        <Text style={onClick == 1 ? styles.public_text_transparent : styles.public_text}>Public</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { setonClick(0) }} style={onClick == 0 ? styles.public_transperant : styles.pulic_text_view}>
                        <Text style={onClick == 0 ? styles.public_text_transparent : styles.public_text}>Friends</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ height: hp("4%"), width: wp('90%'), justifyContent: "center", marginTop: hp("2%"), alignSelf: "center" }}>
                    <Text style={{ color: myThemeColors.secondfontcolor, fontSize: myFontSize.body.fontSize, fontFamily: myFontSize.body.fontFamily, lineHeight: myFontSize.h2.lineHeight }}>Goal</Text>
                </View>

                <View style={{ height: hp("7%"), width: wp('90%'), marginTop:hp('1%'),justifyContent: "center", borderWidth: hp('0.15%'), borderColor:myThemeColors.bordercolor_light, borderRadius: hp("1.2%"), alignSelf: "center" }}>
                    <TextInput
                        style={{ paddingLeft: wp("4%") }}
                        placeholderTextColor='#000000'
                        placeholder="10 000 steps"
                        keyboardType="default"
                        color={myThemeColors.mainfontcolor}
                        value={normalSliderValue.toString()}
                    />
                </View>

                <View style={{ height: hp("5%"), width: wp('90%'), alignSelf: "center", flexDirection: 'row',alignItems:"center",justifyContent:"center",marginTop:hp('1.5%')}}>
                        <MultiSlider
                                markerStyle={{
                                
                                        height: hp('3%'),
                                        width: hp('2%'),
                                        shadowColor: '#000000',
                                        shadowOffset: {
                                        width: 0,
                                        height: 3
                                        },
                                        shadowRadius: 1,
                                        shadowOpacity: 0.1,
                                        borderRadius: hp('0.3%'),
                                        backgroundColor: myThemeColors.primary     
                                }}
                                pressedMarkerStyle={{
                                        height: hp('3.5%'),
                                        width: hp('2.5%'),
                                        borderRadius: hp('0.6%'),
                                        backgroundColor: myThemeColors.primary  
                                }}
                                selectedStyle={{
                                    backgroundColor: myThemeColors.primary,
                                }}
                                trackStyle={{
                                    backgroundColor: myThemeColors.bordercolor_light,
                                    borderRadius:hp('2%')
                                }}
                                touchDimensions={{
                                    height: hp('3%'),
                                    width: hp('3%'),
                                    borderRadius: 20,
                                    slipDisplacement: 40
                                }}
                                values={[normalSliderValue]}
                                sliderLength={wp('86%')}
                                onValuesChange={normalSliderValuesChange}
                                min={0}
                                max={20000}
                                allowOverlap={false}
                                minMarkerOverlapDistance={50}
                                />

                </View>


                

                </KeyboardAwareScrollView>

                <View style={{position:"absolute",bottom:hp('6%'),alignSelf:"center",justifyContent:"center",alignItems:"center",}}>
                        <TouchableOpacity
                        onPress={OnApplyClick}
                        style={{ backgroundColor: myThemeColors.primary, paddingVertical: hp('2%'), paddingHorizontal: wp('6%'), alignSelf: "center", borderRadius: hp('1%'), justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ fontSize: myFontSize.h3.fontSize, fontFamily: myFontSize.h3.fontFamily, lineHeight: myFontSize.h3.lineHeight, color: myThemeColors.white }}>Apply</Text>
                        </TouchableOpacity>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    main_container: {
            width: wp('100%'),
            height: hp('100%')+ StatusBar.currentHeight,
            paddingTop: StatusBar.currentHeight,
            backgroundColor:myThemeColors.mainbg
    },
    pulic_text_view:
    {
        width: wp("44%"),
        height: hp("7%"),
        justifyContent: "center",
        alignItems: "center"
    },
    public_transperant:
    {
        width: wp("44%"),
        height: hp("6%"),
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: hp("1%"),
        margin: hp("0.5%")
    },
    public_text:
    {
        color: myThemeColors.secondfontcolor,
        fontFamily: myFontSize.body.fontFamily,
        fontSize: myFontSize.body.fontSize,
        lineHeight: myFontSize.h2.lineHeight,


    },
    public_text_transparent:
    {
        color: myThemeColors.primary,
        fontFamily: myFontSize.body.fontFamily,
        fontSize: myFontSize.body.fontSize,
        lineHeight: myFontSize.h2.lineHeight,



    }
})