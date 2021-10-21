import React from 'react'
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
import { Back_Icon, Pensil_Icon, Walk_Tile_Color_Icon,calendar_tile_color_light,coin_tile_color_light,Walk_Tile_Color_Light, Steps, calendar, Clock, Coin, Trophy } from '../utils/appconstants'
import myFontSize from '../utils/myFontSize';
import myThemeColors from '../utils/myThemeColors';

const AvatarData=[
    {
        id:1,
        url:require('../assets/image/avatar.png'),
    },
    {
        id:2,
        url:require('../assets/image/avatar.png'),
    },
    {
        id:3,
        url:require('../assets/image/avatar.png'),
    },
]

export default function Check_info(props){

    const OnCreateChallengeClick = () => {
        props.navigation.pop(6);
    }

        return ( 
            <View style={[styles.main_container, { backgroundColor: myThemeColors.mainbg }]}>
            <StatusBar
                translucent={true}
                backgroundColor = {'transparent'}
                barStyle = {"dark-content"}
            />
                <View style={{ height: hp('8%'), width: wp('100%'), backgroundColor: myThemeColors.mainbg, flexDirection: "row", borderBottomWidth: hp('0.15%'), borderColor: myThemeColors.bordercolor_light, justifyContent: "space-between", alignItems: "center" }}>
                    <View style={{ height: hp('8%'), width: wp('30%'), paddingRight: wp('10%'), justifyContent: "center", alignItems: "center" }}>
                        <TouchableOpacity><Image style={{ height: hp('3%'), width: hp('3%'), resizeMode: "contain" }} source={Back_Icon}></Image></TouchableOpacity>
                    </View>
                    <View style={{ height: hp('8%'), width: wp('40%'), justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ top: hp('0.5%'), color: myThemeColors.mainfontcolor, fontSize: myFontSize.h2.fontSize, fontFamily: myFontSize.h2.fontFamily, lineHeight: myFontSize.h2.lineHeight }}>Check Info</Text>
                    </View>
                    <View style={{ height: hp('8%'), width: wp('30%'), justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ top: hp('0.5%'), fontSize: myFontSize.small.fontSize, fontFamily: myFontSize.small.fontFamily, color: myThemeColors.secondfontcolor }}>Almost Done</Text>
                    </View>
                </View>

                <View style={{ height: hp('92%'),alignSelf:"center", width: wp('100%'), }}>


                <View style={{height:hp('8%'),marginTop:hp('2%'),width:wp('100%'),paddingLeft:wp('5%'),paddingRight:wp('2%'),alignSelf:"center",borderBottomWidth: hp('0.15%'), borderColor: myThemeColors.bordercolor_light,backgroundColor:myThemeColors.mainbg,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                    <View style={{height:hp('8%'),width:wp('71%'),justifyContent:"center",alignItems:"flex-start"}}>
                        <View style={{ flexDirection: 'column',}}>
                            <Text style={{ color:myThemeColors.secondfontcolor,fontSize:myFontSize.small.fontSize,fontFamily:myFontSize.small.fontFamily,lineHeight:myFontSize.small.lineHeight }}>Challenge Name</Text>
                            <Text style={{ color:myThemeColors.mainfontcolor,fontSize:myFontSize.h2.fontSize,fontFamily:myFontSize.h2.fontFamily,lineHeight:myFontSize.h2.lineHeight }}>Walking Challenge</Text>
                        </View>                    
                    </View>
                <View style={{height:hp('8%'),width:wp('10%'),justifyContent:"center",alignItems:"flex-start"}}> 
                <TouchableOpacity >
                        <Image source={Pensil_Icon} style={{height:hp('3%'),width:hp('3%')}} resizeMode={"contain"}/>
                </TouchableOpacity>
                </View>
                </View>

                <View style={{height:hp('8%'),width:wp('100%'),paddingLeft:wp('5%'),paddingRight:wp('2%'),alignSelf:"center",borderBottomWidth: hp('0.15%'), borderColor: myThemeColors.bordercolor_light,backgroundColor:myThemeColors.mainbg,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                    <View style={{height:hp('8%'),width:wp('10%'),justifyContent:"center",alignItems:"center"}}>
                        <Image source={Walk_Tile_Color_Icon} style={{height:hp('6%'),width:hp('6%')}} resizeMode={"contain"} />
                    </View>
                    <View style={{height:hp('8%'),width:wp('71%'),justifyContent:"center",alignItems:"flex-start"}}>
                        <View style={{ flexDirection: 'column', padding: wp('5%'),}}>
                        <Text style={{ color:myThemeColors.secondfontcolor,fontSize:myFontSize.small.fontSize,fontFamily:myFontSize.small.fontFamily,lineHeight:myFontSize.small.lineHeight }}>Type</Text>
                            <Text style={{ color:myThemeColors.mainfontcolor,fontSize:myFontSize.h2.fontSize,fontFamily:myFontSize.h2.fontFamily,lineHeight:myFontSize.h2.lineHeight }}>Walking</Text>
                        </View>                    
                    </View>
                <View style={{height:hp('8%'),width:wp('10%'),justifyContent:"center",alignItems:"flex-start"}}> 
                <TouchableOpacity>
                        <Image source={Pensil_Icon} style={{height:hp('3%'),width:hp('3%')}} resizeMode={"contain"}/>
                </TouchableOpacity>
                </View>
                </View>

                <View style={{height:hp('8%'),width:wp('100%'),paddingLeft:wp('5%'),paddingRight:wp('2%'),alignSelf:"center",backgroundColor:myThemeColors.mainbg,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                    <View style={{height:hp('8%'),width:wp('10%'),justifyContent:"center",alignItems:"center"}}>
                        <Image source={calendar_tile_color_light} style={{height:hp('6%'),width:hp('6%')}} resizeMode={"contain"} />
                    </View>
                    <View style={{height:hp('8%'),width:wp('71%'),justifyContent:"center",alignItems:"flex-start"}}>
                        <View style={{ flexDirection: 'column', padding: wp('5%'),}}>
                        <Text style={{ color:myThemeColors.secondfontcolor,fontSize:myFontSize.small.fontSize,fontFamily:myFontSize.small.fontFamily,lineHeight:myFontSize.small.lineHeight }}>Start Date & Time</Text>
                            <Text style={{ color:myThemeColors.mainfontcolor,fontSize:myFontSize.h2.fontSize,fontFamily:myFontSize.h2.fontFamily,lineHeight:myFontSize.h2.lineHeight }}>24 May 2021, 14:00</Text>
                        </View>                    
                    </View>
                <View style={{height:hp('8%'),width:wp('10%'),justifyContent:"center",alignItems:"flex-start"}}> 
                <TouchableOpacity>
                        <Image source={Pensil_Icon} style={{height:hp('3%'),width:hp('3%')}} resizeMode={"contain"}/>
                </TouchableOpacity>
                </View>
                </View>


                <View style={{height:hp('8%'),bottom:hp('1%'),width:wp('100%'),paddingLeft:wp('5%'),paddingRight:wp('2%'),alignSelf:"center",borderBottomWidth: hp('0.15%'), borderColor: myThemeColors.bordercolor_light,backgroundColor:myThemeColors.mainbg,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                    <View style={{height:hp('8%'),width:wp('10%'),justifyContent:"center",alignItems:"center"}}>
                    </View>
                    <View style={{height:hp('8%'),width:wp('71%'),justifyContent:"center",alignItems:"flex-start"}}>
                        <View style={{ flexDirection: 'column', padding: wp('5%'),}}>
                        <Text style={{ color:myThemeColors.secondfontcolor,fontSize:myFontSize.small.fontSize,fontFamily:myFontSize.small.fontFamily,lineHeight:myFontSize.small.lineHeight }}>End Date & Time</Text>
                        <Text style={{ color:myThemeColors.mainfontcolor,fontSize:myFontSize.h2.fontSize,fontFamily:myFontSize.h2.fontFamily,lineHeight:myFontSize.h2.lineHeight }}>31 May 2021, 15:00</Text>
                        </View>                    
                    </View>
                <View style={{height:hp('8%'),width:wp('10%'),justifyContent:"center",alignItems:"flex-start"}}> 
                </View>
                </View>


                <View style={{height:hp('8%'),bottom:hp('1%'),width:wp('100%'),paddingLeft:wp('5%'),paddingRight:wp('2%'),alignSelf:"center",borderBottomWidth: hp('0.15%'), borderColor: myThemeColors.bordercolor_light,backgroundColor:myThemeColors.mainbg,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                    <View style={{height:hp('8%'),width:wp('10%'),justifyContent:"center",alignItems:"center"}}>
                        <Image source={coin_tile_color_light} style={{height:hp('6%'),width:hp('6%')}} resizeMode={"contain"} />
                    </View>
                    <View style={{height:hp('8%'),width:wp('71%'),justifyContent:"center",alignItems:"flex-start"}}>
                        <View style={{ flexDirection: 'column', padding: wp('5%'),}}>
                        <Text style={{ color:myThemeColors.secondfontcolor,fontSize:myFontSize.small.fontSize,fontFamily:myFontSize.small.fontFamily,lineHeight:myFontSize.small.lineHeight }}>Wager</Text>
                            <Text style={{ color:myThemeColors.mainfontcolor,fontSize:myFontSize.h2.fontSize,fontFamily:myFontSize.h2.fontFamily,lineHeight:myFontSize.h2.lineHeight }}>100 coins</Text>
                        </View>                    
                    </View>
                <View style={{height:hp('8%'),width:wp('10%'),justifyContent:"center",alignItems:"flex-start"}}> 
                <TouchableOpacity>
                        <Image source={Pensil_Icon} style={{height:hp('3%'),width:hp('3%')}} resizeMode={"contain"}/>
                </TouchableOpacity>
                </View>
                </View>

                    

                <View style={{height:hp('10%'),width:wp('100%'),bottom:hp('1%'),paddingLeft:wp('5%'),paddingRight:wp('2%'),alignSelf:"center",borderBottomWidth: hp('0.15%'), borderColor: myThemeColors.bordercolor_light,backgroundColor:myThemeColors.mainbg,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                    <View style={{height:hp('10%'),width:wp('71%'),justifyContent:"center",alignItems:"flex-start"}}>
                        <View style={{ flexDirection: 'column',}}>
                            <Text style={{ color:myThemeColors.secondfontcolor,fontSize:myFontSize.small.fontSize,fontFamily:myFontSize.small.fontFamily,lineHeight:myFontSize.small.lineHeight }}>Friends</Text>
                                <View style={{height:hp('4.5%'),marginTop:hp('0.5%'),justifyContent:"center",alignItems:"center" , transform:[{scaleX:-1}]}}> 
                                <FlatList
                                        contentContainerStyle={{ paddingLeft: hp("1%") }}
                                        showsHorizontalScrollIndicator={false}
                                        horizontal={true}
                                        data={AvatarData}
                                        //  keyExtractor={item => Object}
                                        renderItem={({ item,index }) =>
                                                <View>
                                                    <Image source={item.url} style={{ height: hp("4.5%"), width: hp('4.5%') ,marginLeft:-wp('2%')}} resizeMode={"contain"} />
                                                </View>
                                        } />
                                </View>
                    </View>                    
                    </View>
                <View style={{height:hp('10%'),width:wp('10%'),bottom:hp('1.5%'),justifyContent:"center",alignItems:"flex-start"}}> 
                <TouchableOpacity >
                        <Image source={Pensil_Icon} style={{height:hp('3%'),width:hp('3%')}} resizeMode={"contain"}/>
                </TouchableOpacity>
                </View>
                </View>
                </View>

            <View style={{position:"absolute",bottom:hp('2%'),alignSelf:"center",justifyContent:"center",alignItems:"center",}}>
            <TouchableOpacity
                        onPress={OnCreateChallengeClick}
                        style={{ backgroundColor: myThemeColors.primary, paddingVertical: hp('2%'), paddingHorizontal: wp('6%'), marginBottom: hp('5%'), alignSelf: "center", borderRadius: hp('1%'), justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ fontSize: myFontSize.h3.fontSize, fontFamily: myFontSize.h3.fontFamily, lineHeight: myFontSize.h3.lineHeight, color: myThemeColors.white }}>Create a Challenge</Text>
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
});