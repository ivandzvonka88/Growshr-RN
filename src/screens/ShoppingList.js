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
import { Coin_Tile_Color_Icon, Steps_Tile_Color_Icon, Clock_Icon, Flame_Color_Icon, Heart_Icon, Walk_Tile_Color_Icon, Bike_Tile_Color_Icon, Run_Tile_Color_Icon, Coin_Color_Icon,plus_icon } from '../utils/appconstants';

const data = [
    {
        id: 1,
        image: require("../assets/image/ralphs.png"),
        font: 3,
        icon: require("../assets/icon/chevron_right_color_light.png")
    },

    {
        id: 2,
        image: require("../assets/image/gelsons.png"),
        font: 1,
        icon: require("../assets/icon/chevron_right_color_light.png")
    },

    {
        id: 3,
        image: require("../assets/image/sprouts.png"),
        font: 1,
        icon: require("../assets/icon/chevron_right_color_light.png")
    },



];

export default function ShoppingList(props) {

    const OnStoreClick = () =>{
        props.navigation.navigate('StoreCart')
    }

    return (
        <View style={[styles.main_container, { backgroundColor: myThemeColors.mainbg }]}>
            <StatusBar
                backgroundColor={myThemeColors.mainbg}
                barStyle={"dark-content"}
            />
            <View style={{ height: hp('8%'), width: wp('100%'), backgroundColor: myThemeColors.mainbg, flexDirection: "row", borderBottomWidth: hp('0.15%'), borderColor: myThemeColors.bordercolor_light, justifyContent: "space-between", alignItems: "center" }}>
                <TouchableOpacity onPress={() => { props.navigation.goBack() }} style={{ height: hp('8%'), width: wp('20%'), justifyContent: "center", alignItems: "center" }}>
                    <Image source={require("../assets/icon/chevron_left.png")} resizeMode={"contain"} style={{ width: hp("3%"), height: hp("3%") }} />
                </TouchableOpacity>
                <View style={{ height: hp('8%'), width: wp('60%'), justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ color: myThemeColors.mainfontcolor, fontSize: myFontSize.h2.fontSize, fontFamily: myFontSize.h2.fontFamily, lineHeight: myFontSize.h2.lineHeight }}>Shopping Lists</Text>
                </View>
                <View style={{ height: hp('8%'), width: wp('20%'), justifyContent: "center", alignItems: "center" }}>
                </View>
            </View>
            <View style={{ height: hp('8%'), width: wp('92%'), flexDirection: "row", alignSelf: "center" }}>
                <View style={{ height: hp('8%'), width: wp('46%'), justifyContent: "center" }}>
                    <Text style={{ color:myThemeColors.primary,fontSize:myFontSize.h3.fontSize,fontFamily:myFontSize.h3.fontFamily,lineHeight:myFontSize.h3.lineHeight }}>Create Shopping List</Text>
                </View>
                <TouchableOpacity  style={{ height: hp('8%'), width: wp('46%'), alignItems: "flex-end", justifyContent: "center" }}>
                    <Image source={require("../assets/icon/plus.png")} style={{ width: hp("3.5%"), height: hp('3.5%') }} resizeMode="contain"/>
                </TouchableOpacity>

            </View>
            <View style={{ width: wp('100%'), height: hp("42%"), alignSelf: "center", }}>
                <FlatList
                    style={styles.flatliststyle}
                    // contentContainerStyle={{ paddingBottom: hp("2%") }}
                    showsVerticalScrollIndicator={false}
                    data={data}
                    //  keyExtractor={item => Object}
                    renderItem={({ item }) =>
                        <TouchableOpacity onPress={OnStoreClick} style={{ height: hp('8%'), width: wp("100"), flexDirection: "row", }}>
                            <View style={{ height: hp('8%'), width: wp("80%"), justifyContent: 'center' }}>
                                <Image source={item.image} style={{ height: hp('4%'), width: wp("32"), }} resizeMode={"contain"} />
                            </View>
                            <View style={{ height: hp('8%'), width: wp("10%"), justifyContent: 'center' }}>
                                <Text style={{ color: "#919FB4" }}>{item.font}</Text>
                            </View>
                            <View style={{ height: hp('8%'), width: wp("10%"), justifyContent: 'center' }}>
                                <Image source={item.icon} style={{ height: hp('3%'), width: wp("6"), }} resizeMode={"contain"} />
                            </View>
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