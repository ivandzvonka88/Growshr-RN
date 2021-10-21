import React, { useState ,useEffect,useRef} from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    StatusBar,
    Image,
    TouchableOpacity,
    Switch
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import myFontSize from '../utils/myFontSize';
import myThemeColors from '../utils/myThemeColors';
import { Avatar_Icon,Pensil_Icon,Steps_Tile_Color_Light,Route_Tile_Color,Run_Tile_Color,Fitbit_Icon,Apple_Heart_Icon,Switch_On_Icon,Switch_Off_Icon,List_Tile_Color_Light,User_Add_Tile_Color_Light,Clock_Tile_Color_Tile2,Logout_Tile_Color_Light,Chevron_Right_Color_Light } from '../utils/appconstants';


export default Profile = (props) => {

    const [Health,SetHealth] = useState(false);
    const [Fitbit,SetFitbit] = useState(true);

    const toggleSwitchHealth = () => SetHealth(previousState => !previousState);
    const toggleSwitchFitbit = () => SetFitbit(previousState => !previousState);

    const OnEditProfileClick =()=>{
    }

    const OnAddInterestClick =()=>{
    }

    const OnShoppingListClick =()=>{
        props.navigation.navigate("ShoppingList");
    }

    const OnInviteFriendsClick =()=>{
        props.navigation.navigate("InviteFriends");
    }

    const OnRewardHistoryClick =()=>{
    }

    const OnLogoutClick =()=>{
        props.navigation.popToTop();
        props.navigation.replace("Login");
    }


    return (
            <ScrollView style={styles.main_container} contentContainerStyle={{paddingBottom:hp('20%')}}>
            <StatusBar
                translucent={true}
                backgroundColor = {myThemeColors.mainbg}
                barStyle = {"dark-content"}
            />
                <View style={{height:hp('8%'),width:wp('100%'),backgroundColor:myThemeColors.mainbg,flexDirection:"row",borderBottomWidth:hp('0.15%'),borderColor:myThemeColors.bordercolor_light,justifyContent:"space-between",alignItems:"center"}}>
                    <View style={{height:hp('8%'),width:wp('20%'),justifyContent:"center",alignItems:"center"}}>
                    </View>
                    <View style={{height:hp('8%'),width:wp('60%'),justifyContent:"center",alignItems:"center"}}>
                        <Text style={{top:hp('0.5%'),color:myThemeColors.mainfontcolor,fontSize:myFontSize.h2.fontSize,fontFamily:myFontSize.h2.fontFamily,lineHeight:myFontSize.h2.lineHeight}}>Profile</Text>
                    </View>
                <View style={{height:hp('8%'),width:wp('20%'),justifyContent:"center",alignItems:"center"}}>         
                </View>
                </View>

                <View style={{height:hp('10%'),width:wp('90%'),alignSelf:"center",backgroundColor:myThemeColors.mainbg,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                    <View style={{height:hp('10%'),width:wp('10%'),justifyContent:"center",alignItems:"center"}}>
                        <Image source={Avatar_Icon} style={{height:hp('7%'),width:hp('7%')}} resizeMode={"contain"} />
                    </View>
                    <View style={{height:hp('10%'),width:wp('68%'),justifyContent:"center",alignItems:"flex-start"}}>
                        <View style={{ flexDirection: 'column', padding: wp('5%'),}}>
                            <Text style={{ color:myThemeColors.mainfontcolor,fontSize:myFontSize.h1.fontSize,fontFamily:myFontSize.h1.fontFamily,lineHeight:myFontSize.h1.lineHeight }}>James Baptista</Text>
                            <Text style={{ color:myThemeColors.secondfontcolor,fontSize:myFontSize.small.fontSize,fontFamily:myFontSize.small.fontFamily,lineHeight:myFontSize.small.lineHeight }}>omar@mail.com</Text>
                        </View>                    
                    </View>
                <View style={{height:hp('10%'),width:wp('10%'),justifyContent:"center",alignItems:"flex-start"}}> 
                <TouchableOpacity onPress={OnEditProfileClick}>
                        <Image source={Pensil_Icon} style={{height:hp('3%'),width:hp('3%')}} resizeMode={"contain"}/>
                </TouchableOpacity>
                </View>
                </View>

                <View style={{height:hp('3%'),width:wp('100%'),paddingHorizontal:wp('5%'),justifyContent:"center",marginTop:hp('0.5%')}}>
                    <Text style={{color:myThemeColors.mainfontcolor,fontSize:myFontSize.h3.fontSize,fontFamily:myFontSize.h3.fontFamily,lineHeight:myFontSize.h3.lineHeight}}>Interests</Text>
                </View>
                <View style={{ height: hp('16%'), width: wp('100%'),paddingHorizontal:wp('3%')}}>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }} >
                        <TouchableOpacity><Text style={styles.interests1}>Bakery</Text></TouchableOpacity>
                        <TouchableOpacity><Text style={styles.interests}>Sports</Text></TouchableOpacity>    
                        <TouchableOpacity><Text style={styles.interests}>Kids</Text></TouchableOpacity>                    
                        <TouchableOpacity><Text style={styles.interests}>Phycology</Text></TouchableOpacity>                       
                        <TouchableOpacity onPress={OnAddInterestClick}>
                        <Image source={require('../assets/icon/plus_tile_color.png')} style={{height:hp('5%'),width:hp('5%'),marginVertical:hp('1.2%'),marginHorizontal:wp('1%')}} resizeMode="contain" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{height:hp('3%'),width:wp('100%'),paddingHorizontal:wp('5%'),justifyContent:"center",marginTop:hp('0.5%'),}}>
                    <Text style={{color:myThemeColors.mainfontcolor,fontSize:myFontSize.h3.fontSize,fontFamily:myFontSize.h3.fontFamily,lineHeight:myFontSize.h3.lineHeight}}>Health Activity</Text>
                </View>


                <View style={{height:hp('10%'),marginLeft:wp('5%'),width:wp('90%'),alignSelf:"center",backgroundColor:myThemeColors.mainbg,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                    <View style={{height:hp('7%'),width:wp('7%'),justifyContent:"center",alignItems:"center"}}>
                        <Image source={Steps_Tile_Color_Light} style={{height:hp('7%'),width:hp('7%')}} resizeMode={"contain"} />
                    </View>
                    <View style={{height:hp('6%'),width:wp('76%'),paddingTop:hp('1%'),paddingHorizontal:wp('3%'),justifyContent:"center"}}>
                    <View style={{position:"absolute",height:hp('5%'),width:wp('70%'),paddingLeft:wp('5%'),left:wp('-4%'),top:hp('1.7%')}}><Text style={{bottom:hp('0.5%'),color:myThemeColors.mainfontcolor,fontSize:myFontSize.h3.fontSize,fontFamily:myFontSize.h3.fontFamily,lineHeight:myFontSize.h3.lineHeight}}>5,432 <Text style={{bottom:hp('0.5%'),color:myThemeColors.secondfontcolor,fontSize:myFontSize.body.fontSize,fontFamily:myFontSize.body.fontFamily,lineHeight:myFontSize.body.lineHeight}}>steps</Text></Text></View>
                    <View style={{position:"absolute",height:hp('1%'),width:wp('70%'),borderRadius:hp('1%'),top:hp('4%'),left:wp('1%'),alignSelf:"center",backgroundColor:myThemeColors.bordercolor_gray}}></View>
                    <View style={{position:"absolute",height:hp('1%'),width:wp('30%'),borderRadius:hp('1%'),top:hp('4%'),left:wp('1%'),alignSelf:"flex-start",backgroundColor:myThemeColors.primary}}></View>
                    </View>
                </View>

                <View style={{height:hp('10%'),marginLeft:wp('5%'),width:wp('90%'),alignSelf:"center",backgroundColor:myThemeColors.mainbg,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                    <View style={{height:hp('7%'),width:wp('7%'),justifyContent:"center",alignItems:"center"}}>
                        <Image source={Route_Tile_Color} style={{height:hp('7%'),width:hp('7%')}} resizeMode={"contain"} />
                    </View>
                    <View style={{height:hp('6%'),width:wp('76%'),paddingTop:hp('1%'),paddingHorizontal:wp('3%'),justifyContent:"center"}}>
                    <View style={{position:"absolute",height:hp('5%'),width:wp('70%'),paddingLeft:wp('5%'),left:wp('-4%'),top:hp('1.7%')}}><Text style={{bottom:hp('0.5%'),color:myThemeColors.mainfontcolor,fontSize:myFontSize.h3.fontSize,fontFamily:myFontSize.h3.fontFamily,lineHeight:myFontSize.h3.lineHeight}}>4.67 <Text style={{bottom:hp('0.5%'),color:myThemeColors.secondfontcolor,fontSize:myFontSize.body.fontSize,fontFamily:myFontSize.body.fontFamily,lineHeight:myFontSize.body.lineHeight}}>miles</Text></Text></View>
                    <View style={{position:"absolute",height:hp('1%'),width:wp('70%'),borderRadius:hp('1%'),top:hp('4%'),left:wp('1%'),alignSelf:"center",backgroundColor:myThemeColors.bordercolor_gray}}></View>
                    <View style={{position:"absolute",height:hp('1%'),width:wp('30%'),borderRadius:hp('1%'),top:hp('4%'),left:wp('1%'),alignSelf:"flex-start",backgroundColor:myThemeColors.red}}></View>
                    </View>
                </View>

                <View style={{height:hp('10%'),marginLeft:wp('5%'),width:wp('90%'),alignSelf:"center",backgroundColor:myThemeColors.mainbg,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                    <View style={{height:hp('7%'),width:wp('7%'),justifyContent:"center",alignItems:"center"}}>
                        <Image source={Run_Tile_Color} style={{height:hp('7%'),width:hp('7%')}} resizeMode={"contain"} />
                    </View>
                    <View style={{height:hp('6%'),width:wp('76%'),paddingTop:hp('1%'),paddingHorizontal:wp('3%'),justifyContent:"center"}}>
                    <View style={{position:"absolute",height:hp('5%'),width:wp('70%'),paddingLeft:wp('5%'),left:wp('-4%'),top:hp('1.7%')}}><Text style={{bottom:hp('0.5%'),color:myThemeColors.mainfontcolor,fontSize:myFontSize.h3.fontSize,fontFamily:myFontSize.h3.fontFamily,lineHeight:myFontSize.h3.lineHeight}}>56 <Text style={{bottom:hp('0.5%'),color:myThemeColors.mainfontcolor,fontSize:myFontSize.body.fontSize,fontFamily:myFontSize.body.fontFamily,lineHeight:myFontSize.body.lineHeight}}>active minutes</Text></Text></View>
                    <View style={{position:"absolute",height:hp('1%'),width:wp('70%'),borderRadius:hp('1%'),top:hp('4%'),left:wp('1%'),alignSelf:"center",backgroundColor:myThemeColors.bordercolor_gray}}></View>
                    <View style={{position:"absolute",height:hp('1%'),width:wp('30%'),borderRadius:hp('1%'),top:hp('4%'),left:wp('1%'),alignSelf:"flex-start",backgroundColor:myThemeColors.orange}}></View>
                    </View>
                </View>

                <View style={{height:hp('3%'),width:wp('100%'),paddingHorizontal:wp('5%'),justifyContent:"center",marginTop:hp('2%'),}}>
                    <Text style={{color:myThemeColors.mainfontcolor,fontSize:myFontSize.h3.fontSize,fontFamily:myFontSize.h3.fontFamily,lineHeight:myFontSize.h3.lineHeight}}>Connected Apps</Text>
                </View>

                <View style={{height:hp('7%'),width:wp('100%'),marginTop:hp('1.5%'),borderBottomWidth:hp('0.15%'),borderColor:myThemeColors.bordercolor_light,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                    <View style={{height:hp('5%'),marginLeft:wp('5%'),width:hp('5%')}}>
                    <Image source={Apple_Heart_Icon} style={{height:hp('5%'),width:hp('5%')}} resizeMode="contain" />
                    </View>

                    <View style={{height:hp('5%'),width:wp('60%'),justifyContent:"center",paddingLeft:wp('3%')}}>
                        <Text style={{fontSize:myFontSize.h3.fontSize,lineHeight:myFontSize.h3.LineHeight,fontFamily:myFontSize.h3.fontFamily,color:myThemeColors.mainfontcolor,textAlign:"left"}}>Health</Text>
                    </View>

                    <View style={{height:hp('5%'),marginRight:wp('5%'),width:wp('15%')}}>
                    {
                        Health == true?
                        <TouchableOpacity onPress={toggleSwitchHealth} style={{height:hp('4.4%'),width:wp('13%'),paddingHorizontal:wp('1%'),marginTop:hp('0.5%'),justifyContent:"center",alignItems:"flex-end",borderRadius:hp('1.2%'),backgroundColor:"#DDF2EC"}}>
                        <Image source={Switch_On_Icon} style={{height:hp('5%'),width:hp('5%')}}  resizeMode="contain" />
                        </TouchableOpacity>:
                            <TouchableOpacity onPress={toggleSwitchHealth} style={{height:hp('4.4%'),width:wp('13%'),paddingHorizontal:wp('1%'),marginTop:hp('0.5%'),justifyContent:"center",alignItems:"flex-start",borderRadius:hp('1.2%'),backgroundColor:"#F1F4F7"}}>
                            <Image source={Switch_Off_Icon} style={{height:hp('5%'),width:hp('5%')}}  resizeMode="contain" />
                        </TouchableOpacity>
                    }
                    </View>
                </View>
                <View style={{height:hp('7%'),width:wp('100%'),borderBottomWidth:hp('0.15%'),borderColor:myThemeColors.bordercolor_light,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                        <View style={{height:hp('5%'),marginLeft:wp('5%'),width:hp('5%')}}>
                        <Image source={Fitbit_Icon} style={{height:hp('5%'),width:hp('5%')}}  resizeMode="contain" />
                        </View>

                        <View style={{height:hp('5%'),width:wp('60%'),justifyContent:"center",paddingLeft:wp('3%')}}>
                            <Text style={{fontSize:myFontSize.h3.fontSize,lineHeight:myFontSize.h3.LineHeight,fontFamily:myFontSize.h3.fontFamily,color:myThemeColors.mainfontcolor,textAlign:"left"}}>Fitbit</Text>
                        </View>

                        <View style={{height:hp('5%'),marginRight:wp('5%'),width:wp('15%'),}}>
                        {
                            Fitbit == true?
                            <TouchableOpacity onPress={toggleSwitchFitbit} style={{height:hp('4.4%'),width:wp('13%'),paddingHorizontal:wp('1%'),marginTop:hp('0.5%'),justifyContent:"center",alignItems:"flex-end",borderRadius:hp('1.2%'),backgroundColor:"#DDF2EC"}}>
                                <Image source={Switch_On_Icon} style={{height:hp('5%'),width:hp('5%')}}  resizeMode="contain" />
                            </TouchableOpacity>
                            :
                            <TouchableOpacity onPress={toggleSwitchFitbit} style={{height:hp('4.4%'),width:wp('13%'),paddingHorizontal:wp('1%'),marginTop:hp('0.5%'),justifyContent:"center",alignItems:"flex-start",borderRadius:hp('1.2%'),backgroundColor:"#F1F4F7"}}>
                            <Image source={Switch_Off_Icon} style={{height:hp('5%'),width:hp('5%')}}  resizeMode="contain" />
                            </TouchableOpacity>
                        }
                        </View>
                    </View>


                    <TouchableOpacity onPress={OnShoppingListClick} style={{height:hp('7%'),width:wp('100%'),marginTop:hp('5%'),borderBottomWidth:hp('0.15%'),borderColor:myThemeColors.bordercolor_light,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                        <View style={{height:hp('5%'),marginLeft:wp('5%'),width:hp('5%')}}>
                        <Image source={List_Tile_Color_Light} style={{height:hp('5%'),width:hp('5%')}}  resizeMode="contain" />
                        </View>

                        <View style={{height:hp('5%'),width:wp('60%'),justifyContent:"center"}}>
                            <Text style={{fontSize:myFontSize.h3.fontSize,lineHeight:myFontSize.h3.LineHeight,fontFamily:myFontSize.h3.fontFamily,color:myThemeColors.mainfontcolor,textAlign:"left"}}>Shopping Lists</Text>
                        </View>

                        <View style={{height:hp('5%'),width:wp('15%'),justifyContent:"center",alignItems:"flex-end",paddingRight:wp('5%')}}>
                            <Image source={Chevron_Right_Color_Light} style={{height:hp('3.3%'),width:hp('3.3%'),top:hp('0.5%')}}  resizeMode="contain" />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={OnInviteFriendsClick} style={{height:hp('7%'),width:wp('100%'),marginTop:hp('0.5%'),borderBottomWidth:hp('0.15%'),borderColor:myThemeColors.bordercolor_light,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                        <View style={{height:hp('5%'),marginLeft:wp('5%'),width:hp('5%')}}>
                        <Image source={User_Add_Tile_Color_Light} style={{height:hp('5%'),width:hp('5%')}}  resizeMode="contain" />
                        </View>

                        <View style={{height:hp('5%'),width:wp('60%'),justifyContent:"center",}}>
                            <Text style={{fontSize:myFontSize.h3.fontSize,lineHeight:myFontSize.h3.LineHeight,fontFamily:myFontSize.h3.fontFamily,color:myThemeColors.mainfontcolor,textAlign:"left"}}>Invite Friends</Text>
                        </View>
                        <View style={{height:hp('5%'),width:wp('15%'),justifyContent:"center",alignItems:"flex-end",paddingRight:wp('5%')}}>
                            <Image source={Chevron_Right_Color_Light} style={{height:hp('3.3%'),width:hp('3.3%'),top:hp('0.5%')}}  resizeMode="contain" />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={OnRewardHistoryClick} style={{height:hp('7%'),width:wp('100%'),marginTop:hp('0.5%'),borderBottomWidth:hp('0.15%'),borderColor:myThemeColors.bordercolor_light,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                        <View style={{height:hp('5%'),marginLeft:wp('5%'),width:hp('5%')}}>
                        <Image source={Clock_Tile_Color_Tile2} style={{height:hp('5%'),width:hp('5%')}}  resizeMode="contain" />
                        </View>

                        <View style={{height:hp('5%'),width:wp('60%'),justifyContent:"center",}}>
                            <Text style={{fontSize:myFontSize.h3.fontSize,lineHeight:myFontSize.h3.LineHeight,fontFamily:myFontSize.h3.fontFamily,color:myThemeColors.mainfontcolor,textAlign:"left"}}>Reward History</Text>
                        </View>

                        <View style={{height:hp('5%'),width:wp('15%'),justifyContent:"center",alignItems:"flex-end",paddingRight:wp('5%')}}>
                            <Image source={Chevron_Right_Color_Light} style={{height:hp('3.3%'),width:hp('3.3%'),top:hp('0.5%')}}  resizeMode="contain" />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={OnLogoutClick} style={{height:hp('7%'),width:wp('100%'),marginTop:hp('0.5%'),borderBottomWidth:hp('0.15%'),borderColor:myThemeColors.bordercolor_light,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                        <View style={{height:hp('5%'),marginLeft:wp('5%'),width:hp('5%')}}>
                        <Image source={Logout_Tile_Color_Light} style={{height:hp('5%'),width:hp('5%')}}  resizeMode="contain" />
                        </View>

                        <View style={{height:hp('5%'),width:wp('60%'),justifyContent:"center",}}>
                            <Text style={{fontSize:myFontSize.h3.fontSize,lineHeight:myFontSize.h3.LineHeight,fontFamily:myFontSize.h3.fontFamily,color:myThemeColors.mainfontcolor,textAlign:"left"}}>Log Out</Text>
                        </View>

                        <View style={{height:hp('5%'),width:wp('15%'),}}>
                        </View>
                    </TouchableOpacity>

            </ScrollView>
    )
}


const styles = StyleSheet.create({
    main_container: {
        width: wp('100%'),
        height: hp('100%')+ StatusBar.currentHeight,
        paddingTop: StatusBar.currentHeight,
        backgroundColor:myThemeColors.mainbg
    },
    image: {
        width: wp('16%'),
        height: hp('8%'),
        borderRadius: 14,
        borderWidth: 1,
        borderColor: '#FFFFFF',

    },
    interests: {
        color: myThemeColors.secondfontcolor,
        borderColor:'#D7E3F4',
        borderRadius: hp('2%'),
        borderWidth: 1,
        paddingVertical: hp('1.5%'),
        paddingHorizontal: wp('6%'),
        marginHorizontal: wp('2%'),
        marginVertical: hp('1%'),
        fontFamily:myFontSize.body.fontSize,
        fontFamily:myFontSize.body.fontFamily,
    },
    interests1:{
        color: myThemeColors.secondfontcolor,
        borderColor:'#D7E3F4',
        borderRadius: hp('2%'),
        borderWidth: 1,
        paddingVertical: hp('1.5%'),
        paddingHorizontal: wp('6%'),
        marginHorizontal: wp('2%'),
        marginVertical: hp('1%'),
        fontFamily:myFontSize.body.fontSize,
        fontFamily:myFontSize.body.fontFamily,  
    },
    box: {
        marginVertical: hp('1%'),
        height: hp('6.1%'),
        width: wp('12%')

    },
    row: {
        height: hp('7%'),
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#F1F4F7'
    },
    list: {
        marginLeft: wp('5%'),
        fontSize: myFontSize.large,
    }

})