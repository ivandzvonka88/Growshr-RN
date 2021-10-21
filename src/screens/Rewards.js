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
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import myThemeColors from '../utils/myThemeColors';
import myFontSize from '../utils/myFontSize';
import Modal from 'react-native-modal';
import { App_Logo, Auth_FB_Icon, Auth_Google_Icon, Auth_Twitter_Icon, Eye_Icon, Eye_Off_Icon,plus_icon } from '../utils/appconstants';

const Data = [
    {
        id: 1,
        name: "All Stores",
    },
    {
        id: 2,
        image: require("../assets/image/sprouts.png"),
    },
    {
        id: 3,
        image: require("../assets/image/costco.png"),
    },
    {
        id: 4,
        image: require("../assets/image/gelsons.png"),
    },
    {
        id: 5,
        image: require("../assets/image/ralphs.png"),
    },
];
const value = [
    {
        id: 1,
        name: "All",
    },
    {
        id: 2,
        name: "Bakery",
    },
    {
        id: 3,
        name: "Fruits & Vegetables",
    },
    {
        id: 4,
        name: "Bekery all Items",
    },
];
const item = [
    {
        id: 1,
        image: require("../assets/image/product_1.png"),
        text: "Pear",
        kg: "1kg",
        price: "$11.64",
        icon: require("../assets/image/sprouts.png"),
        plus: require("../assets/icon/plus_tile_color.png")
    },
    {
        id: 2,
        image: require("../assets/image/product_2.png"),
        text: "Jamon Argal serrano Viva las Tapas",
        kg: "60 g",
        price: "$23.12",
        icon: require("../assets/image/ralphs.png"),
        plus: require("../assets/icon/plus_tile_color.png")
    },

    {
        id: 3,
        image: require("../assets/image/product_3.png"),
        text: "Breakfast Mornflake Hawaiian Oat",
        kg: "500 g",
        price: "$10.34",
        icon: require("../assets/image/gelsons.png"),
        plus: require("../assets/icon/plus_tile_color.png")
    },
    {
        id: 4,
        image: require("../assets/image/product_4.png"),
        text: "Mnago WInaway dried",
        kg: "100 g ",
        price: "$7.23",
        icon: require("../assets/image/target.png"),
        plus: require("../assets/icon/plus_tile_color.png")
    },

    {
        id: 5,
        image: require("../assets/image/product_1.png"),
        text: "Avocado to eat",
        kg: "2 ps",
        price: "$11.64",
        icon: require("../assets/image/walgreens.png"),
        plus: require("../assets/icon/plus_tile_color.png")
    },
    {
        id: 6,
        image: require("../assets/image/product_2.png"),
        text: 'Dark chocolate Ritter Sport "Peru" 74%',
        kg: "100 g ",
        price: "$23.12",
        icon: require("../assets/image/vons.png"),
        plus: require("../assets/icon/plus_tile_color.png")
    },

];
export default function Rewards(props) {
    const [storeIndex, SetstoreIndex] = React.useState(1);
    const [onclick, setonclick] = React.useState(1);
    const [allStores, setallStores] = React.useState();
    const [IsProductAdded, setIsProductAdded] = useState(false);
    const [isModal1Visible, setModal1Visible] = useState(false);


    const toggleModal1 = () => {
        setModal1Visible(!isModal1Visible);
        setIsProductAdded(false);
    };



    const addIndex = () => {
        if (storeIndex == 5) { } else { SetstoreIndex(storeIndex + 1) }
        console.log("plus thayu", storeIndex)
    }
    const minusIndex = () => {
        if (storeIndex == 1) { } else { SetstoreIndex(storeIndex - 1) }
        console.log("minus thayu", storeIndex)
    }


    return (
        <View style={[styles.main_container, { backgroundColor: myThemeColors.mainbg }]}>
            <StatusBar
                translucent={true}
                backgroundColor = {myThemeColors.mainbg}
                barStyle = {"dark-content"}
            />
            <View style={{ height: hp('8%'), width: wp('100%'), backgroundColor: myThemeColors.mainbg, flexDirection: "row", borderBottomWidth: hp('0.15%'), borderColor: myThemeColors.bordercolor_light, justifyContent: "space-between", alignItems: "center" }}>
                <View style={{ height: hp('8%'), width: wp('20%'), justifyContent: "center", alignItems: "center" }}>
                </View>
                <View style={{ height: hp('8%'), width: wp('60%'), justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ top: hp('0.5%'), color: myThemeColors.mainfontcolor, fontSize: myFontSize.h2.fontSize, fontFamily: myFontSize.h2.fontFamily, lineHeight: myFontSize.h2.lineHeight }}>Rewards</Text>
                </View>
                <View style={{ height: hp('8%'), width: wp('20%'), justifyContent: "center", alignItems: "center" }}>
                </View>
            </View>

            <View style={{ height: hp('7%'), width: wp('100%'), alignSelf: "center", paddingRight: wp("3%"), justifyContent: "center", marginTop: hp("2%"), marginBottom: hp("2%") }} >
                <FlatList
                    style={styles.flatliststyle}
                    contentContainerStyle={{ justifyContent: "center" }}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={Data}
                    //  keyExtractor={item => Object}
                    renderItem={({ item }) =>

                        item.id == 1 ?
                            <TouchableOpacity onPress={() => { SetstoreIndex(item.id) }} style={storeIndex == item.id ? styles.name_view : styles.name_tarnspernt}>
                                <Text style={{ fontSize: myFontSize.body.fontSize, fontFamily: myFontSize.h3.fontFamily }}>{item.name}</Text>
                            </TouchableOpacity>
                            :
                            <TouchableOpacity onPress={() => { SetstoreIndex(item.id) }} style={storeIndex == item.id ? styles.name_view : styles.name_tarnspernt}>
                                <Image source={item.image} style={{ height: hp("3%"), width: wp('20%') }} resizeMode={"contain"} />
                            </TouchableOpacity>
                    } />
            </View>
            <ScrollView style={{ height: hp("73%") }}>

                {storeIndex == 1 ?
                    null
                    :
                    <View>
                        <View style={{ height: hp('20%'), width: wp('96%'), alignSelf: "center", flexDirection: "row", }}>
                            <TouchableOpacity onPress={minusIndex} style={{ height: hp('20%'), width: wp('10%'), justifyContent: "center", alignItems: "center" }}>
                                <Image source={require("../assets/icon/arrow_left.png")}  style={{ height: hp("3%"), width:hp('3%') }} resizeMode={"contain"}/>
                            </TouchableOpacity>
                            <View style={{ height: hp('20%'), width: wp('76%'), justifyContent: "center", alignItems: "center" }}>
                                {storeIndex == 2 ?
                                    <Image source={require("../assets/image/sprouts.png")} style={{ height: hp('6%'), width: wp('35%'), }} resizeMode={"contain"} />
                                    :
                                    null
                                }
                                {storeIndex == 3 ?
                                    <Image source={require("../assets/image/costco.png")} style={{ height: hp('6%'), width: wp('35%'), }} resizeMode={"contain"} />
                                    :
                                    null
                                }
                                {storeIndex == 4 ?
                                    <Image source={require("../assets/image/gelsons.png")} style={{ height: hp('6%'), width: wp('35%'), }} resizeMode={"contain"} />
                                    :
                                    null
                                }
                                {storeIndex == 5 ?
                                    <Image source={require("../assets/image/ralphs.png")} style={{ height: hp('6%'), width: wp('35%'), }} resizeMode={"contain"} />
                                    :
                                    null
                                }

                                <Text style={{ fontSize: hp("2%"), marginTop: hp("2%") }}>223 Chattanooga st</Text>
                                <TouchableOpacity style={{ marginTop: hp("2%"), }} ><Text style={{ color: "#57C09E" }}>Open</Text></TouchableOpacity>
                            </View>
                            <TouchableOpacity onPress={addIndex} style={{ height: hp('20%'), width: wp('10%'), justifyContent: "center", alignItems: "center" }}>
                                <Image source={require("../assets/icon/arrow_right.png")} style={{ height: hp("3%"), width: hp('3%') }} resizeMode={"contain"}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                }

                <View style={{ height: hp('7%'), width: wp('96%'), alignSelf: "center", flexDirection: "row", backgroundColor: "#F1F4F7", borderRadius: hp("1%") }} >
                    <TouchableOpacity style={{ height: hp('7%'), width: wp('12%'), justifyContent: "center", alignItems: "center" }}>
                        <Image source={require('../assets/icon/search.png')} style={{ height: hp("3%"), width: hp('3%'),tintColor:myThemeColors.thirdfontcolor }} resizeMode={"contain"} />
                    </TouchableOpacity>

                    <View style={{ height: hp('7%'),width:wp('70%'),justifyContent: "center" }}>
                        <TextInput
                            style={{ fontFamily:myFontSize.body.fontFamily, fontSize: myFontSize.body.fontSize,flex:1,color:myThemeColors.mainfontcolor }}
                            placeholderTextColor='#919FB4'
                            placeholder="Search Products"
                            keyboardType="default"
                        />
                    </View>
                </View>
                <View style={{ height: hp('8%'), width: wp('100%'), alignSelf: "center", marginTop: hp('2%'), paddingRight: wp("2%") }}>
                    <FlatList
                        style={styles.flatliststyle}
                        // contentContainerStyle={{ paddingBottom: hp("2%") }}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        data={value}
                        //  keyExtractor={item => Object}
                        renderItem={({ item }) =>
                            <TouchableOpacity onPress={() => { setonclick(item.id) }} style={{ height: hp('7%'), marginLeft: wp("2%"), }}>
                                <Text style={onclick == item.id ? styles.name_text : styles.name_text_tranperant}>{item.name}</Text>
                            </TouchableOpacity>
                        } />
                </View>

                <View style={{ width: wp("100%"), }}>
                
                        <View style={{ width: wp('100%'), alignSelf: "center" }}>
                            <FlatList
                                numColumns={2}
                                style={styles.flatliststyle}
                                contentContainerStyle={{ paddingBottom: hp("10%") }}
                                vertical={true}
                                data={item}
                                //  keyExtractor={item => Object}
                                renderItem={({ item }) =>
                                    <TouchableOpacity style={{ width: wp("47%"), height: hp('37%'), marginLeft: wp("2%"), marginTop: hp("2%"), borderColor:myThemeColors.bordercolor_light, borderWidth:hp('0.15%'), borderRadius: hp("1%") }}>
                                        <View style={{ width: wp("47%"), height: hp('20%'), justifyContent: "center", alignItems: "center",}} >
                                            <Image source={item.image} style={{ width: wp("40%"), height: hp('20%') }} resizeMode="contain" />
                                            {
                                                storeIndex == 1 ?
                                                <Image source={item.icon} style={{ width: wp("20%"), height: hp('4%'), position: "absolute", top:hp('1%'), left:hp('1%'), marginTop: hp("0.1%"), padding:hp('1%'),backgroundColor:myThemeColors.mainbg,borderRadius:hp('1%')}} resizeMode="contain" />
                                                :null
                                            }
                                        </View>
                                        <View style={{ width: wp("40%"), height: hp('11%'), alignSelf: "center",}}>
                                            <Text style={{  fontSize: myFontSize.h3.fontSize, fontFamily:myFontSize.h3.fontFamily,lineHeight:myFontSize.h3.LineHeight,color:myThemeColors.mainfontcolor  }} numberOfLines={3}>{item.text}</Text>
                                            <Text style={{ color:myThemeColors.thirdfontcolor,fontSize: myFontSize.small.fontSize, fontFamily:myFontSize.small.fontFamily,lineHeight:myFontSize.small.LineHeight ,marginTop: hp("0.5%") }}>{item.kg}</Text>
                                        </View>

                                        <View style={{ width: wp("42%"), height: hp('5%'), alignSelf: "center", flexDirection: "row",alignItems:"center" }}>
                                            <View style={{ width: wp("16%"), height: hp('5%'),justifyContent:"center"}}>
                                                <Text style={{ fontSize: myFontSize.h3.fontSize, fontFamily:myFontSize.h3.fontFamily,lineHeight:myFontSize.h3.LineHeight,color:myThemeColors.primary }}> {item.price}</Text>
                                            </View>
                                            <View style={{ width: wp("16%"), height: hp('5%'), justifyContent: "center",alignItems:"flex-start", }}>
                                                <Text style={{  color:myThemeColors.thirdfontcolor,fontSize: myFontSize.small.fontSize, fontFamily:myFontSize.small.fontFamily,lineHeight:myFontSize.small.LineHeight }}> {item.price}</Text>
                                            </View>
                                            <TouchableOpacity onPress={()=>{toggleModal1()}} style={{ width: wp("10%"), height: hp('5%'), alignItems:"flex-end",justifyContent:"center" ,bottom:hp('0.2%')}}>
                                                <Image source={item.plus} style={{ height: hp("4%"), width: hp('4%') }} resizeMode={"contain"} />
                                            </TouchableOpacity>
                                        </View>

                                    </TouchableOpacity>
                                } />
                        </View>  
                </View>
            </ScrollView>

            <Modal
                isVisible={isModal1Visible}
                animationInTiming={1000}
                animationOutTiming={1000}
                animationOut="slideOutDown"
                animationIn="slideInUp"
                onBackdropPress={IsProductAdded==true?toggleModal1:()=>{}}
                >
                <View style={{ width: wp("100%"),alignSelf:"center",position:"absolute",bottom:hp('-2.5%'),height: hp("38%"), backgroundColor: "#fff", alignItems: "center", borderTopLeftRadius: hp("2%"), borderTopRightRadius: hp("2%") }}>
                    <View style={{ width: wp("90%"), height: hp("8%"), alignItems: "center", justifyContent: "center" }} >
                        <Text style={{ fontSize: myFontSize.h2.fontSize, fontFamily: myFontSize.h3.fontFamily, }}>Add to the List</Text>
                    </View>
                    {
                        IsProductAdded == false ? 
                        <View>
                            <View style={{ height: hp('6%'), width: wp('82%'), flexDirection: "row", alignSelf: "center", }}>
                                <View style={{ height: hp('6%'), width: wp('72%'), justifyContent: "center" }}>
                                    <Text style={{ fontSize: hp("2%"), color: "#57C09E", fontFamily: "DM Sans", fontWeight: "700", }}>Create Shopping List</Text>
                                </View>
                                <TouchableOpacity  style={{ height: hp('6%'), width: wp('10%'),justifyContent: "center", }}>
                                    <Image source={require("../assets/icon/plus.png")} style={{ width: hp("3.5%"), height: hp('3.5%') }} resizeMode="contain" />
                                </TouchableOpacity>

                            </View>
                            <TouchableOpacity onPress={()=>{setIsProductAdded(true)}} style={{ height: hp('8%'), width: wp("82%"), justifyContent: 'center',flexDirection:"row", }}>
                            <View style={{ height: hp('8%'), width: wp("80%"), justifyContent: 'center' }}>
                                <Image source={require("../assets/image/sprouts.png")} style={{ height: hp('4%'), width: wp("32"), }} resizeMode={"contain"} />
                            </View>
                            <View style={{ height: hp('8%'), width: wp("10%"), justifyContent: 'center' }}>
                                <Text style={{ color: myThemeColors.thirdfontcolor }}>1</Text>
                            </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={toggleModal1} style={{ height: hp('8%'), width: wp("82%"), justifyContent: 'center',backgroundColor:"#EEF9F5",alignItems:"center",marginTop:hp("2%"),borderRadius:hp('1.5%')}}>
                                <Text style={{ color: myThemeColors.primary,fontSize: myFontSize.h3.fontSize, fontFamily: myFontSize.h3.fontFamily, }}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                        :
                        <View>
                            <View style={{ height: hp('8%'), width: wp("90%"), justifyContent: 'center',alignItems:"center" ,marginTop:hp("2%")}}>
                                <Image source={require("../assets/icon/check_box_filled.png")} style={{ height: hp('4%'), width: wp("32"), }} resizeMode={"contain"} />
                            </View>
                            <View style={{ width: wp("90%"), height: hp("8%"), alignItems: "center", justifyContent: "center" }} >
                                <Text style={{ fontSize: myFontSize.h2.fontSize, fontFamily: myFontSize.h3.fontFamily, }}>Added to Sprouns Farmers Market</Text>
                            </View>
                        </View>
                    }
                  
                </View>
                </Modal>
        </View>
    )
}


const styles = StyleSheet.create({
    main_container: {
        width: wp('100%') ,
        height: hp('100%')+ StatusBar.currentHeight,
        paddingTop: StatusBar.currentHeight,
        backgroundColor:myThemeColors.mainbg
    },
    name_view: {
        height: hp("7%"),
        paddingHorizontal: hp("2.5%"),
        justifyContent: "center",
        alignItems: "center",
        marginLeft: wp('2%'),
        borderWidth: 1,
        borderColor: "#57C09E",
        borderRadius: hp('1%'),

    },
    name_tarnspernt: {
        height: hp("7%"),
        paddingHorizontal: hp("2.5%"),
        justifyContent: "center",
        alignItems: "center",
        marginLeft: wp('2%'),
        borderWidth: 1,
        borderRadius: hp("1%"),
        borderColor: "#F1F4F7"
    },
    name_text:
    {
        backgroundColor: "#57C09E",
        paddingLeft: hp("3.5%"),
        paddingRight: hp('3.5%'),
        padding: hp("2.2%"),
        color: "#fff",
        borderRadius: hp('1%'),
    },
    name_text_tranperant:
    {
        paddingLeft: hp("3.5%"),
        paddingRight: hp('3.5%'),
        padding: hp("2.2%"),
        borderRadius: hp('1%'),
        color: "#616E80",
        borderWidth: 1,
        borderColor: "#E1EAF7",
    }
});
 //    <View style={{ height: hp('8%'), width: wp('20%'), justifyContent: "center", alignItems: "center" }}>
                        