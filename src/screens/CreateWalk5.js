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
    ScrollView
} from "react-native";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import myThemeColors from '../utils/myThemeColors';
import myFontSize from '../utils/myFontSize';
import { Back_Icon, Check_Box_Icon_Unfilled,Check_Box_Icon_Filled, Drop_Down_Icon, Flame_Color_Icon, Heart_Icon, Walk_Tile_Color_Icon, Bike_Tile_Color_Icon, Run_Tile_Color_Icon, Search_Icon,chevron_left,search} from '../utils/appconstants';
const Data = [
    {
        id: 1,
        image: require("../assets/image/avatar_1.png"),
        text: "Giana Passaquindici Arcand",
        steps: "7 000 steps",
        icon: require("../assets/icon/check.png"),
    },
    {
        id: 2,
        image: require("../assets/image/avatar_2.png"),
        text: "Omar Franci",
        steps: "12 000 steps",
        icon: require("../assets/icon/check.png"),
    },
    {
        id: 3,
        image: require("../assets/image/avatar_3.png"),
        text: "Terry Passaquindici Arcand",
        steps: "9 000 steps",
        icon: require("../assets/icon/check.png"),
    },
    {
        id: 4,
        image: require("../assets/image/avatar_4.png"),
        text: "Kadin Aminoff",
        steps: "23 000 steps",
        icon: require("../assets/icon/check.png"),
    },
    {
        id: 5,
        image: require("../assets/image/avatar_5.png"),
        text: "Hanna Franci",
        steps: "123 000 steps",
        icon: require("../assets/icon/check.png"),
    },
    {
        id: 6,
        image: require("../assets/image/avatar_6.png"),
        text: "Leo Baptista",
        steps: "12 000 steps",
        icon: require("../assets/icon/check.png"),
    },
    {
        id: 7,
        image: require("../assets/image/avatar_4.png"),
        text: "Kadin Aminoff",
        steps: "23 000 steps",
        icon: require("../assets/icon/check.png"),
    },
    {
        id: 8,
        image: require("../assets/image/avatar_5.png"),
        text: "Hanna Franci",
        steps: "123 000 steps",
        icon: require("../assets/icon/check.png"),
    },
    {
        id: 9,
        image: require("../assets/image/avatar_6.png"),
        text: "Leo Baptista",
        steps: "12 000 steps",
        icon: require("../assets/icon/check.png"),
    },
]


export default function inviteFriend(props){
    const [onClick, setonClick] = useState(1);
    const [isChecked, setisChecked] = useState(1);

    const OnNextClick =()=>{
        props.navigation.navigate('CreateWalk6');
    }


    return (
            <View style={[styles.main_container, { backgroundColor: myThemeColors.mainbg }]}>
            <StatusBar
                translucent={true}
                backgroundColor = {'transparent'}
                barStyle = {"dark-content"}
            />
                <View style={{ height: hp('8%'), width: wp('100%'), backgroundColor: myThemeColors.mainbg, flexDirection: "row", borderBottomWidth: hp('0.15%'), borderColor: myThemeColors.bordercolor_light, justifyContent: "space-between", alignItems: "center" }}>
                    <TouchableOpacity onPress={() => { props.navigation.goBack() }} style={{ height: hp('8%'), width: wp('20%'), justifyContent: "center", alignItems: "center" }}>
                        <Image source={Back_Icon} resizeMode={"contain"} style={{width:wp("6%"),height:hp("3%")}} />
                    </TouchableOpacity>
                    <View style={{ height: hp('8%'), width: wp('60%'), justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ color: myThemeColors.mainfontcolor, fontSize: myFontSize.h2.fontSize, fontFamily: myFontSize.h2.fontFamily, lineHeight: myFontSize.h2.lineHeight }}>Invite Friends</Text>
                    </View>
                    <TouchableOpacity style={{ height: hp('8%'), width: wp('20%'), justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ color: myThemeColors.secondfontcolor, fontSize: myFontSize.body.fontSize, fontFamily: myFontSize.body.fontFamily, lineHeight: myFontSize.h2.lineHeight }}>Step 5/5</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ width: wp("92%"), height: hp("7%"), flexDirection: "row", alignSelf: "center", backgroundColor: myThemeColors.bordercolor_light, marginTop: hp("2%"), borderRadius: hp("1.5%") }}>
                    <TouchableOpacity onPress={() => { setonClick(1) }} style={onClick == 1 ? styles.public_transperant : styles.pulic_text_view}>
                        <Text style={onClick == 1 ? styles.public_text_transparent : styles.public_text}>Public</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { setonClick(0) }} style={onClick == 0 ? styles.public_transperant : styles.pulic_text_view}>
                        <Text style={onClick == 0 ? styles.public_text_transparent : styles.public_text}>Friends</Text>
                    </TouchableOpacity>
                </View>
                <View  >
                    {onClick == 1 ?
                        <ScrollView style={{ height: hp("83%") }} nestedScrollEnabled={true}>
                        <View style={{ height: hp('8%'), width: wp('92%'), justifyContent: "center", alignSelf: "center" }}>
                                <Text style={{ color: myThemeColors.secondfontcolor, fontFamily: myFontSize.body.fontFamily, fontSize: myFontSize.body.fontSize, lineHeight: myFontSize.h2.lineHeight, }}>Your challenge can see anyone and accept it.</Text>
                            </View>
                            <View style={{ height: hp('7%'), width: wp('92%'), alignSelf: "center", flexDirection: "row", backgroundColor: myThemeColors.bordercolor_light, borderRadius: hp("1%") }} >
                                <TouchableOpacity style={{ height: hp('7%'), width: wp('12%'), justifyContent: "center", alignItems: "center" }}>
                                    <Image source={Search_Icon} style={{ width: hp('3%'), height: hp('3%') }} resizeMode="contain" />
                                </TouchableOpacity>

                                <View style={{ height: hp('7%'), width: wp("80%"), justifyContent: "center", }}>
                                    <TextInput
                                        style={{ color: myThemeColors.secondfontcolor, fontFamily: myFontSize.body.fontFamily, fontSize: myFontSize.body.fontSize, lineHeight: myFontSize.h2.lineHeight, }}
                                        placeholderTextColor='#919FB4'
                                        placeholder="Search"
                                        keyboardType="default"
                                    />
                                </View>
                            </View>

                            <View style={{ height: hp('7%'), marginTop:hp('2%'),width: wp('92%'), alignSelf: "center", flexDirection: "row", backgroundColor: myThemeColors.mainbg, borderRadius: hp("1%"),borderWidth:hp('0.15%'),borderColor:myThemeColors.bordercolor_light }} >
                                <View style={{ height: hp('7%'), width: wp("80%"), justifyContent: "center", }}>
                                    <TextInput
                                        style={{ color: myThemeColors.secondfontcolor, fontFamily: myFontSize.body.fontFamily, fontSize: myFontSize.body.fontSize, lineHeight: myFontSize.h2.lineHeight,paddingLeft:wp('5%') }}
                                        placeholderTextColor='#919FB4'
                                        placeholder="Sort by Interests"
                                        keyboardType="default"
                                        editable={false}
                                    />
                                </View>
                                <TouchableOpacity style={{ height: hp('7%'), width: wp('12%'), justifyContent: "center", alignItems: "flex-start" }}>
                                    <Image source={Drop_Down_Icon} style={{ width: hp('3%'), height: hp('3%') }} resizeMode="contain" />
                                </TouchableOpacity>
                            </View>

                            <TouchableOpacity style={{ height: hp('7%'), width: wp("92%"), justifyContent: "center", alignSelf: "center", borderRadius: hp("1%"), marginTop: hp("2%"), alignItems: "center", borderWidth: 1, borderColor: myThemeColors.primary }}>
                                <Text style={{ fontFamily: myFontSize.h3.fontFamily, fontSize: myFontSize.h3.fontSize, lineHeight: myFontSize.h2.lineHeight,  }}>Invite via Email</Text>
                            </TouchableOpacity>
                            <View style={{ height: hp('9%'), width: wp("92%"), alignSelf: "center", flexDirection: "row", alignItems: "center" }}>
                                <TouchableOpacity onPress={() => { isChecked == 1 ? setisChecked(0):setisChecked(1) }}>
                                    {
                                        isChecked == 1 ?
                                        <Image source={Check_Box_Icon_Filled} style={{height:hp('3%'),width:hp('3%')}} resizeMode={"contain"} />
                                        :
                                        <Image source={Check_Box_Icon_Unfilled} style={{height:hp('3%'),width:hp('3%')}} resizeMode={"contain"} />
                                    }
                                </TouchableOpacity>
                                <View style={{ marginLeft: wp("3%") }}>
                                    <Text style={{ color: myThemeColors.mainfontcolor, fontFamily: myFontSize.body.fontFamily, fontSize: myFontSize.body.fontSize, lineHeight: myFontSize.h2.lineHeight, }} >Select All</Text>
                                </View>
                            </View>
                            <FlatList
                                style={{width:wp('96%'),alignSelf:"center",}}
                                contentContainerStyle={{paddingBottom:hp('16%')}}
                                showsVerticalScrollIndicator={false}
                                showsHorizontalScrollIndicator={false}
                                data={Data}
                                keyExtractor={item => item.id}
                                renderItem={({ item }) =>
                                    <TouchableOpacity style={{ width: wp('92%'), height: hp("7%"), flexDirection: "row", alignSelf: "center", borderBottomWidth: 1,marginTop:hp('0.5%'), borderBottomColor: "#F1F4F7",paddingBottom:hp("1%")}}>
                                        <View style={{ width: wp('13%'), height: hp("6%"), justifyContent: "center", }}>
                                            <Image source={item.image} style={{height:hp('5%'),width:hp('5%')}} resizeMode={"contain"} />
                                        </View>
                                        <View style={{ width: wp('66%'), height: hp("6%"), justifyContent: "center" }}>
                                            <Text style={{ fontFamily: myFontSize.h2.fontFamily, fontSize: myFontSize.h2.fontSize, lineHeight: myFontSize.h2.lineHeight,  }}>{item.text}</Text>
                                            <Text style={{ color: myThemeColors.secondfontcolor, fontFamily: myFontSize.body.fontFamily, fontSize: myFontSize.body.fontSize, lineHeight: myFontSize.h2.lineHeight, }}>{item.steps}</Text>
                                        </View>
                                        <View style={{ width: wp('10%'), height: hp("6%"), justifyContent: "center", alignItems: "center", }}>
                                            <Image source={item.icon} style={{height:hp('3%'),width:hp('3%')}} resizeMode={"contain"} />
                                        </View>
                                    </TouchableOpacity>
                                } />
                        </ScrollView>
                        :
                        null}
                   </View>
                   <View style={{position:"absolute",bottom:hp('1%'),alignSelf:"center",justifyContent:"center",alignItems:"center",}}>
                    <TouchableOpacity
                                onPress={OnNextClick}
                                
                                style={{ backgroundColor: myThemeColors.primary, paddingVertical: hp('2%'), paddingHorizontal: wp('6%'), marginBottom: hp('5%'), alignSelf: "center", borderRadius: hp('1%'), justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ fontSize: myFontSize.h3.fontSize, fontFamily: myFontSize.h3.fontFamily, lineHeight: myFontSize.h3.lineHeight, color: myThemeColors.white }}>Next</Text>
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
        width: wp("46%"),
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
        borderRadius: hp("1.5%"),
        margin: hp("0.5")
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
});