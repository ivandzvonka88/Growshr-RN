import React, { useState } from 'react'
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
    FlatList,
    StatusBar
} from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { product_1, product_2, product_4, Back_Icon, trash_color, plus_tile_color, minus_tile_color, qr_tile_color } from '../utils/appconstants'
import myThemeColors from '../utils/myThemeColors';
import myFontSize from '../utils/myFontSize';
import Modal from 'react-native-modal';
const myFlatlistData = [
    {
        id: 1,
        title: 'Pear',
        incre_decre: 1,
        task: '1 kg',
        reward: "$11.64",
        rewards: "$12.00",
        image: product_1,
        plus_icon: plus_tile_color,
        minus_icon: minus_tile_color
    },
    {
        id: 2,
        title: 'Jamon Argal serrano Viva...Jamon Argal serrano Viva...Jamon Argal serrano Viva...Jamon Argal serrano Viva...',
        incre_decre: 1,
        task: '1 kg',
        reward: "$11.64",
        rewards: "$12.00",
        image: product_2,
        plus_icon: plus_tile_color,
        minus_icon: minus_tile_color
    },
    {
        id: 3,
        title: 'Breakfast Mornflake Hawai...',
        incre_decre: 1,
        task: '1 kg',
        reward: "$11.64",
        rewards: "$12.00",
        image: product_4,
        plus_icon: plus_tile_color,
        minus_icon: minus_tile_color
    },

]

export default function Ralphs(props) {
    const [isModalVisible, setModalVisible] = useState(false);
    const [isModaloneVisible, setModaloneVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    const toggleModalone = () => {
        setModaloneVisible(!isModaloneVisible);
    };

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
                    <Text style={{ color: myThemeColors.mainfontcolor, fontSize: myFontSize.h2.fontSize, fontFamily: myFontSize.h2.fontFamily, lineHeight: myFontSize.h2.lineHeight }}>Ralphs</Text>
                </View>
                <TouchableOpacity style={{ height: hp('8%'), width: wp('20%'), justifyContent: "center", alignItems: "center" }}>
                    <Image source={trash_color} resizeMode={"contain"} style={{ width: hp("3%"), height: hp("3%") }} />
                </TouchableOpacity>
            </View>

            <View style={{ height: hp('80%'), width: wp('100%') }}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    data={myFlatlistData}
                    style={{}}
                    contentContainerStyle={{ paddingBottom: hp('4%') }}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        <View style={{ height: hp('17%'), width: wp('90%'), alignItems: "center", alignSelf: "center", borderRadius: hp('2%'), flexDirection: "row", backgroundColor: myThemeColors.mainbg, marginTop: hp('2%'),borderWidth:hp('0.15%'),borderColor:myThemeColors.bordercolor_light,borderRadius:hp('1.5%') }}>
                            <View style={{ height: hp('15%'), width: wp('30%'), justifyContent: "center", alignItems: "center" }}>
                                <Image style={{ height: hp('15%'), width: hp('20%'), resizeMode: "contain" }} source={item.image}></Image>
                            </View>
                            <View style={{ flexDirection: 'column', }}>
                                <View style={{ height: hp('7.5%'), width: wp('52%'), marginLeft: hp('2%'), justifyContent: "center" }}>
                                    <Text style={{ fontSize: myFontSize.h3.fontSize, fontFamily: myFontSize.h3.fontFamily,color:myThemeColors.mainfontcolor }} numberOfLines={1}>{item.title}</Text>
                                    <Text style={{ color: myThemeColors.thirdfontcolor, fontSize: myFontSize.small.fontSize, fontFamily: myFontSize.small.fontFamily,lineHeight:myFontSize.small.LineHeight }} >{item.task}</Text>
                                </View>
                                <View style={{ height: hp('7.5%'), marginLeft: hp('2%'), width: wp('58%'), flexDirection: 'row', alignItems: 'center' }}>
                                    <TouchableOpacity><Image style={{ height: hp('3.5%'), width: hp('3.5%'), resizeMode: "contain" }} source={item.minus_icon}></Image></TouchableOpacity>
                                    <Text style={{ marginLeft: hp('1.5%'),top:hp('0.35%') ,marginRight: hp('1.5%'), fontSize: myFontSize.h3.fontSize, fontFamily: myFontSize.h3.fontFamily,lineHeight:myFontSize.h3.LineHeight,color:myThemeColors.mainfontcolor}}>{item.incre_decre}</Text>
                                    <TouchableOpacity><Image style={{ height: hp('3.5%'), width: hp('3.5%'), resizeMode: "contain" }} source={item.plus_icon}></Image></TouchableOpacity>
                                    <Text style={{ fontSize: myFontSize.h3.fontSize, fontFamily: myFontSize.h3.fontFamily,color:myThemeColors.primary, marginRight: hp('1%'), marginLeft: hp('3%') }}>{item.reward}</Text>
                                    <Text style={{ color: myThemeColors.thirdfontcolor, fontSize: myFontSize.small.fontSize, fontFamily: myFontSize.small.fontFamily, marginRight: hp('1%'), marginLeft: hp('0.5%') }} >{item.rewards}</Text>
                                </View>
                            </View>
                        </View>
                    }
                />

            </View>

            <View style={{ flexDirection: "row",position:"absolute",bottom:hp('3.5%'), width: wp('100%'), paddingHorizontal: wp('5%'), justifyContent: "space-between", alignItems: "center", alignSelf: 'center', backgroundColor: myThemeColors.mainbg,borderTopWidth:hp('0.15%'),borderColor:myThemeColors.bordercolor_light }}>
                <View style={{ width: wp('35%'),height:hp('12%') }}>
                    <View style={{ flexDirection: "row",alignItems:"center",justifyContent:"flex-start",marginTop:hp('2%') }}>
                        <Text style={{ fontSize: myFontSize.small.fontSize, fontFamily: myFontSize.small.fontFamily }}>Pay:</Text>
                        <Text style={{ fontSize: myFontSize.h3.fontSize, fontFamily: myFontSize.h3.fontFamily, color: myThemeColors.primary, marginLeft: hp('5%') }}>$112.64</Text>
                    </View >
                    <View style={{ flexDirection: "row",alignItems:"center",justifyContent:"flex-start",marginTop:hp('1%') }}>
                        <Text style={{ fontSize: myFontSize.small.fontSize, fontFamily: myFontSize.small.fontFamily, color: myThemeColors.thirdfontcolor }}>Discount:</Text>
                        <Text style={{ fontSize: myFontSize.small.fontSize, fontFamily: myFontSize.small.fontFamily, marginLeft: hp('1.5%') }}>$32.56</Text>
                    </View>
                    <View style={{ flexDirection: "row", border: hp('5%') }}>
                        <Text style={{ fontSize: myFontSize.small.fontSize, fontFamily: myFontSize.small.fontFamily, color: myThemeColors.thirdfontcolor }}>Steps:</Text>
                        <Text style={{ fontSize: myFontSize.small.fontSize, fontFamily: myFontSize.small.fontFamily, marginLeft: hp('4%') }}>-4,563</Text>
                    </View>
                </View>
                <View style={{ height: hp('8%'), width: wp('65%'), alignItems: "center", justifyContent: "center", }}>

                    <TouchableOpacity onPress={toggleModalone} style={{ flexDirection: "row",alignItems:"center",height:hp('8%'),paddingLeft:wp('4%'),paddingRight:wp('3%'), backgroundColor: '#EEF9F5', borderRadius: hp('1%') }}>
                        <Text style={{ fontSize: myFontSize.labels.fontSize,fontFamily: myFontSize.labels.fontFamily, alignSelf: 'center', marginRight: hp('0.5%'), marginLeft: hp('1%'), color:myThemeColors.mainfontcolor }}>Redeem Reward</Text>
                    <Image style={{ justifyContent: "center",marginLeft:wp('2%'), alignSelf: 'center', height: hp('4.5%'), width: hp('4.5%')}} resizeMode={"contain"} source={qr_tile_color} />
                    </TouchableOpacity>

                </View>
            </View>


            <Modal
                isVisible={isModaloneVisible}
                animationInTiming={1000}
                animationOutTiming={1000}
                animationOut="slideOutDown"
                animationIn="slideInUp"
                onBackdropPress={toggleModalone}
                >
                <TouchableOpacity activeOpacity={0.8} onPress={toggleModalone} style={{ width: wp("100%"),alignSelf:"center",height: hp("45%"),position:"absolute",bottom:hp('-2.5%'), backgroundColor: "#fff", alignItems: "center", borderTopLeftRadius:hp("3%"),borderTopRightRadius:hp("3%") }}>
                    <View style={{ width: wp("90%"), height: hp("10%"), alignItems: "center", justifyContent: "center" }} >
                        <Text style={{ fontSize: myFontSize.h2.fontSize, fontFamily: myFontSize.h3.fontFamily, }}>Redeem Reward</Text>
                    </View>
                    <View style={{ width: wp("90%"), height: hp("13%"), flexDirection: "row", justifyContent: "center" }}>
                        <TouchableOpacity  onPress={toggleModalone} style={{ width: wp("43%"), height: hp("10%"), alignItems: 'flex-end' }}>
                            <Image source={require("../assets/icon/steps_tile_color_light2.png")} style={{ width: wp("15%"), height: hp("7.5") }} />
                        </TouchableOpacity>
                        <View style={{ width: wp("43%"), height: hp("10%"), marginLeft: wp("4%") ,marginTop:hp('1%')}}>
                            <Text style={{ fontSize: myFontSize.h1.fontSize, fontFamily: myFontSize.labels.fontFamily, }}>7,218</Text>
                            <Text style={{ fontSize: myFontSize.body.fontSize, fontFamily: myFontSize.body.fontFamily, color: myThemeColors.secondfontcolor }}  >steps</Text>
                        </View>
                        </View>
                        <View style={{ width: wp("90%"), height: hp("17%"), alignItems:"center" }}>
                            <Image source={require("../assets/icon/qr_image.png")} style={{ width: wp("34%"), height: hp("17%") }} />
                        </View>
                </TouchableOpacity>
            </Modal>

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
