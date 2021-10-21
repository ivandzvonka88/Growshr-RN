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
    FlatList
} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import myThemeColors from '../utils/myThemeColors';
import myFontSize from '../utils/myFontSize';
import { Coin_Tile_Color_Icon, Search_Icon, Clock_Icon, Flame_Color_Icon, Heart_Icon, Walk_Tile_Color_Icon, Bike_Tile_Color_Icon, Run_Tile_Color_Icon, Coin_Color_Icon } from '../utils/appconstants';

const Data = [
    {
        image:require("../assets/image/sprouts.png"),
    },
    {
        image:require("../assets/image/aldi.png"),
    },
    {
        image:require("../assets/image/albertsons.png"),
    },
    {
        image:require("../assets/image/vons.png"),
    },
];
const value = [
    {
        image:require("../assets/image/trader.png"),
    },
    {
        image:require("../assets/image/whole_foods.png"),
    },
    {
        image:require("../assets/image/gelsons.png"),
    },
    {
        image:require("../assets/image/ralphs.png"),
    },
    {
        image:require("../assets/image/walgreens.png"),
    },
    {
        image:require("../assets/image/costco.png"),
    },
    {
        image:require("../assets/image/walmart.png"),
    },
    {
        image:require("../assets/image/target.png"),
    },
];

export default function AllShop(props) {
    return (
        <View style={[styles.main_container, { backgroundColor: myThemeColors.mainbg }]}>
            <StatusBar
                backgroundColor={myThemeColors.mainbg}
                barStyle={"dark-content"}
            />
            <View style={{ height: hp('8%'), width: wp('100%'), backgroundColor: myThemeColors.mainbg, flexDirection: "row", borderBottomWidth: hp('0.15%'), borderColor: myThemeColors.bordercolor_light, justifyContent: "space-between", alignItems: "center" }}>
                <TouchableOpacity onPress={()=> {props.navigation.goBack()}} style={{ height: hp('8%'), width: wp('20%'), justifyContent: "center", alignItems: "center" }}>
                    <Image source={require("../assets/icon/chevron_left.png")} style={{height:hp('3%'),width:hp('3%')}} resizeMode={"contain"} />
                </TouchableOpacity>
                <View style={{ height: hp('8%'), width: wp('60%'), justifyContent: "center", alignItems: "center" }}>
                    <Text style={{  color: myThemeColors.mainfontcolor, fontSize: myFontSize.h2.fontSize, fontFamily: myFontSize.h2.fontFamily, lineHeight: myFontSize.h2.lineHeight }}>All Shops</Text>
                </View>
                <TouchableOpacity style={{ height: hp('8%'), width: wp('20%'), justifyContent: "center", alignItems: "center" }}>
                    <Image source={require("../assets/icon/qr.png")} style={{height:hp('3%'),width:hp('3%')}} resizeMode={"contain"} />
                </TouchableOpacity>
            </View>

            <View style={{ height: hp('7%'), width: wp('92%'), alignSelf: "center", flexDirection: "row", backgroundColor: myThemeColors.bordercolor_light, borderRadius: hp("1%"),marginTop:hp('1.5%') }} >
                                <TouchableOpacity style={{ height: hp('7%'), width: wp('12%'), justifyContent: "center", alignItems: "center" }}>
                                    <Image source={Search_Icon} style={{ width: hp('3%'), height: hp('3%'),tintColor:myThemeColors.thirdfontcolor }} resizeMode="contain"  />
                                </TouchableOpacity>

                                <View style={{ height: hp('7%'), width: wp("80%"), justifyContent: "center", }}>
                                    <TextInput
                                        style={{ color: myThemeColors.mainfontcolor, fontFamily: myFontSize.body.fontFamily, fontSize: myFontSize.body.fontSize,flex:1 }}
                                        placeholderTextColor={myThemeColors.thirdfontcolor}
                                        placeholder="Search Store"
                                        keyboardType="default"

                                    />
                                </View>
            </View>
            <View style={{ height: hp('7%'), width: wp('94%'), alignSelf: "center", flexDirection: "row", }} >
                <View style={{ height: hp('7%'), width: wp('52%'), justifyContent: "center" }} >
                    <Text style={{fontSize: hp("2%") }}>Closest to me </Text>
                </View>
                <View style={{ height: hp('7%'), width: wp('42%'), flexDirection: "row", justifyContent:"center",alignItems:"center" }} >
                    <Image source={require("../assets/icon/mappin.png")} resizeMode={"contain"} style={{width:hp("2%"),height:hp("2%")}}/>
                    <Text style={{ paddingLeft: wp("2%"),color:myThemeColors.secondfontcolor}}>223 Chattanooga st </Text>
                </View>
            </View>
            <View style={{ width: wp('100%'),height:hp("24%"), alignSelf: "center", paddingRight: wp("2%"), }}>
                    <FlatList
                    numColumns={2}
                        style={styles.flatliststyle}
                        // contentContainerStyle={{ paddingBottom: hp("2%") }}
                        showsVerticalScrollIndicator={false}
                        data={Data}
                        //  keyExtractor={item => Object}
                        renderItem={({ item }) =>
                            <TouchableOpacity style={{ height: hp('10%'),width:wp("45"),marginBottom:hp("2%"),marginLeft:wp("3.5%"),justifyContent:"center",alignItems:"center",borderWidth:hp('0.15%'),borderColor:myThemeColors.bordercolor_light,borderRadius:hp("1.5%")}}>
                                <Image source={item.image} style={{ height: hp('6%'),width:wp("26%"),}} resizeMode={"contain"} />
                            </TouchableOpacity>
                        } />
                </View>
                <View style={{ width: wp('100%'),height:hp("52.5%"), alignSelf: "center", paddingRight: wp("2%"),borderTopWidth:1,borderColor:"#F1F4F7" }}>
                    <FlatList
                    numColumns={2}
                        style={styles.flatliststyle}
                        contentContainerStyle={{ paddingBottom: hp("4%"), }}
                        showsVerticalScrollIndicator={false}
                        data={value}
                        //  keyExtractor={item => Object}
                        renderItem={({ item }) =>
                            <TouchableOpacity onPress={()=>{props.navigation.replace('Rewards')}} style={{ height: hp('10%'),width:wp("45"),marginTop:hp("2%"),marginLeft:wp("3.5%"),justifyContent:"center",alignItems:"center",borderWidth:hp('0.15%'),borderColor:myThemeColors.bordercolor_light,borderRadius:hp("1.5%")}}>
                                <Image source={item.image} style={{ height: hp('6%'),width:wp("26%"),}}  resizeMode={"contain"}/>
                            </TouchableOpacity>
                        } />
                </View>


        </View>

    )

}

const styles = StyleSheet.create({
    main_container: {
        height: hp('100%') + StatusBar.currentHeight,
        width: wp('100%'),
        paddingTop: StatusBar.currentHeight,
    },
});