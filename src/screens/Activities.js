import React from 'react';
import { useState,useEffect,useCallback, useRef, } from "react";
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
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import myThemeColors from '../utils/myThemeColors';
import myFontSize from '../utils/myFontSize';
import { Coin_Tile_Color_Icon,Mappin_Start_Tile_Color,Search_Icon,Clock_Tile_Color_Tile,Filter_Icon,Mappin_End_Tile_Color,Walk_Tile_Color_Icon,Bike_Tile_Color_Icon,Run_Tile_Color_Icon,Coin_Color_Icon} from '../utils/appconstants';

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

const myChallengesData=[
    {
      id:1,
      title:'Challenge Name',
      icon_type:1,
      task:'Walking',
      goal:'10 000 steps',
      date_time:"24 May - 31 May 2021",
      count:"3 000 steps",
      reward:"$5.00",
      reward_type:1,
    },
    {
        id:2,
        title:'Challenge Name',
        icon_type:2,
        task:'Walking',
        goal:'10 000 steps',
        date_time:"24 May - 31 May 2021",
        count:"7 miles",
        reward:"500",
        reward_type:2
    },
    {
        id:3,
        title:'Challenge Name',
        icon_type:3,
        task:'Walking',
        goal:'10 000 steps',
        date_time:"24 May - 31 May 2021",
        count:"9 miles",
        reward:"$100",
        count:"5 000 steps",
        reward_type:3
    },
    {
        id:4,
        title:'Challenge Name',
        icon_type:3,
        task:'Walking',
        goal:'10 000 steps',
        date_time:"24 May - 31 May 2021",
        count:"9 miles",
        reward:"500",
        reward_type:2
    },

  ]


  const myWalkData=[
    {
        id:1,
        title:'Walk Name',
        subtitle:'Ad-Hoc',
        start_address:'West 96th Street & Central Park,New York,USA st 96th Street & ',
        end_address:'West 96th Street & Central Park,New York,USA st 96th Street & ',
        date_time:"31 May 2021 4:00 pm",
        room_type:1
    },
    {
        id:2,
        title:'Walk Name',
        subtitle:'Ad-Hoc',
        start_address:'West 96th Street & Central Park',
        end_address:'West 96th Street & Central Park,New York,USA st 96th Street & ',
        date_time:"31 May 2021 4:00 pm",
        room_type:2
    },
    {
        id:3,
        title:'Walk Name',
        subtitle:'Ad-Hoc',
        start_address:'West 96th Street & Central Park,New York,USA st 96th Street & ',
        end_address:'West 96th Street & Central Park,New York,USA st 96th Street & ',
        date_time:"31 May 2021 4:00 pm",
        room_type:1
    },
    {
        id:4,
        title:'Walk Name',
        subtitle:'Ad-Hoc',
        start_address:'West 96th Street & Central Park,New York,USA st 96th Street & ',
        end_address:'West 96th Street & Central Park,New York,USA st 96th Street & ',
        date_time:"31 May 2021 4:00 pm",
        room_type:2
    },

  ]




export default function Login(props) {

    const [tabIndex,SettabIndex] = useState(1);
    const [searchString,SetsearchString] = useState("");

    const OnCreateClick =()=>{
        if(tabIndex == 1){
            //redirection for Challenges Create Steps
            props.navigation.navigate("CreateChallenge1");
        }
        if(tabIndex == 2){
            //redirection for Walk Create Steps
            props.navigation.navigate("CreateWalk1");
        }
    }

    const OnChallengeCardClick =()=>{
        props.navigation.navigate("ChallengeDetails");
    }

    const OnFilterClick = () =>{
        props.navigation.navigate("ActivitiesFilter");
    }

    return (
        <View style={[styles.main_container,{backgroundColor:myThemeColors.mainbg}]}>
            <StatusBar
                translucent={true}
                backgroundColor = {myThemeColors.mainbg}
                barStyle = {"dark-content"}
            />

        <View style={{height:hp('8%'),width:wp('100%'),backgroundColor:myThemeColors.mainbg,flexDirection:"row",borderBottomWidth:hp('0.15%'),borderColor:myThemeColors.bordercolor_light,justifyContent:"space-between",alignItems:"center"}}>
            <View style={{height:hp('8%'),width:wp('20%'),justifyContent:"center",alignItems:"center"}}>  
            </View>
            <View style={{height:hp('8%'),width:wp('60%'),justifyContent:"center",alignItems:"center"}}>
                <Text style={{top:hp('0.5%'),color:myThemeColors.mainfontcolor,fontSize:myFontSize.h2.fontSize,fontFamily:myFontSize.h2.fontFamily,lineHeight:myFontSize.h2.lineHeight}}>Activities</Text>
            </View>
        <View style={{height:hp('8%'),width:wp('20%'),justifyContent:"center",alignItems:"center"}}>         
        </View>
        </View>

        <View style={{height:hp('8%'),width:wp('90%'),alignSelf:"center",alignItems:"center",flexDirection:"row",borderBottomWidth:hp('0.3%'),borderColor:myThemeColors.bordercolor_light}}>
                <TouchableOpacity onPress={()=>{SettabIndex(1)}} style={{height:hp('8%'),width:wp('45%'),justifyContent:"center",alignItems:"center",borderBottomWidth:hp('0.3%'),borderColor:tabIndex == 1?myThemeColors.primary:myThemeColors.bordercolor_light}}>
                <Text style={{color:tabIndex == 1 ?myThemeColors.mainfontcolor:myThemeColors.secondfontcolor,fontSize:myFontSize.body.fontSize,fontFamily:myFontSize.h3.fontFamily,lineHeight:myFontSize.body.lineHeight,paddingVertical:hp('1%')}}>Challenges</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{SettabIndex(2)}} style={{height:hp('8%'),width:wp('45%'),justifyContent:"center",alignItems:"center",borderBottomWidth:hp('0.3%'),borderColor:tabIndex == 2?myThemeColors.primary:myThemeColors.bordercolor_light}}>
                <Text style={{color:tabIndex == 2 ?myThemeColors.mainfontcolor:myThemeColors.secondfontcolor,fontSize:myFontSize.body.fontSize,fontFamily:myFontSize.h3.fontFamily,lineHeight:myFontSize.body.lineHeight,paddingVertical:hp('1%')}}>Walk</Text>
                </TouchableOpacity>
        </View>
       
       <View style={{height:hp('10%'),width:wp('90%'),alignSelf:"center",alignItems:"center",flexDirection:"row",paddingVertical:hp('1%')}}>

        <View style={{height:hp('7%'),width:wp('70%'),borderRadius:hp('2%'),backgroundColor:"#F1F4F7",alignItems:"center",flexDirection:"row"}}>
            <View style={{height:hp('7%'),width:wp('12%'),justifyContent:"center",alignItems:"center"}}>
            <Image source={Search_Icon} style={{marginLeft:wp('2%'),height:hp('4%'),width:wp('8%')}} resizeMode="contain" />     
            </View>
        <TextInput style = {{flex:1,paddingLeft:wp('2%'),paddingRight:wp('2%'),paddingVertical:hp('1%'),color:myThemeColors.mainfontcolor,fontSize:myFontSize.body.fontSize,fontFamily:myFontSize.body.fontFamily}}
                returnKeyType="done"
                onSubmitEditing={()=>{Keyboard.dismiss()}}
                blurOnSubmit={false}
                underlineColorAndroid = "transparent"
                placeholder ={ tabIndex == 1 ? "Search Challenges":"Search Walk"}
                placeholderTextColor ={myThemeColors.secondfontcolor}
                value={searchString}
                onChangeText={(e) => SetsearchString(e)}  
                />
        </View>

        <TouchableOpacity onPress={OnFilterClick} style={{height:hp('7%'),width:wp('14%'),marginLeft:wp('3%'),justifyContent:"center",alignItems:"center",borderRadius:hp('1.5%'),borderWidth:hp('0.15%'),borderColor:myThemeColors.bordercolor_light}}>
        <Image source={Filter_Icon} style={{height:hp('4%'),width:hp('4%')}} resizeMode="contain" />     
        </TouchableOpacity>
       </View>

        {
            tabIndex == 1 ?

            <FlatList
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={myChallengesData}
            style={{}}
            contentContainerStyle={{paddingBottom:hp('25%')}}
            keyExtractor={item => item.id}
            renderItem={({ item  }) => 
            <TouchableOpacity onPress={OnChallengeCardClick} style={{height:item.reward_type == 1 ?hp('14%'):hp('20%'),width:wp('90%'),alignSelf:"center",backgroundColor:myThemeColors.mainbg,borderRadius:hp('2%'),borderWidth:hp('0.2%'),borderColor:myThemeColors.bordercolor_light,marginTop:hp('2%')}}>                     
                <View style={{height:hp('12%'),width:wp('90%'),paddingTop:hp('1%'),paddingHorizontal:wp('3%'),flexDirection:"row",alignItems:"center"}}>
                    <View style={{height:hp('10%'),width:wp('20%'),justifyContent:"center",alignItems:"center"}}>
                    {item.icon_type == 1 ?<Image source={Walk_Tile_Color_Icon} style={{height:hp('8%'),width:hp('8%')}} resizeMode="contain" /> :null}
                    {item.icon_type == 2 ?<Image source={Bike_Tile_Color_Icon} style={{height:hp('8%'),width:hp('8%')}} resizeMode="contain" /> :null}
                    {item.icon_type == 3 ?<Image source={Run_Tile_Color_Icon} style={{height:hp('8%'),width:hp('8%')}} resizeMode="contain" /> :null}
                    </View>
                    <View style={{height:hp('10%'),marginLeft:wp('2%'),width:wp('40%'),justifyContent:"center"}}>
                        <Text style={{color:myThemeColors.mainfontcolor,fontSize:myFontSize.h2.fontSize,fontFamily:myFontSize.h2.fontFamily,lineHeight:myFontSize.h2.lineHeight}}>{item.title}</Text>
                        <Text style={{color:myThemeColors.secondfontcolor,fontSize:myFontSize.small.fontSize,fontFamily:myFontSize.small.fontFamily,lineHeight:myFontSize.small.lineHeight}}>{item.task} | {item.goal}</Text>
                        <Text style={{marginTop:hp('0.7%'),color:myThemeColors.secondfontcolor,fontSize:myFontSize.small.fontSize,fontFamily:myFontSize.small.fontFamily,lineHeight:myFontSize.small.lineHeight}}>{item.date_time}</Text>
                    </View>
                    <View style={{height:hp('10%'),marginLeft:wp('2%'),width:wp('20%'),justifyContent:"center",alignItems:"flex-end",paddingRight:wp('2%')}}>
                    {
                        item.reward_type == 1 ? 
                        <Text style={{color:myThemeColors.primary,fontSize:myFontSize.h3.fontSize,fontFamily:myFontSize.h3.fontFamily,lineHeight:myFontSize.h3.lineHeight}}>{item.reward}</Text>
                        :
                        null                    
                    }
                    {
                        item.reward_type == 2 ?
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Image source={Coin_Color_Icon} style={{height:hp('2.2%'),width:hp('2.2%'),}} resizeMode="contain" />
                        <Text style={{marginLeft:wp('1%'),color:myThemeColors.orange,fontSize:myFontSize.h3.fontSize,fontFamily:myFontSize.h3.fontFamily,lineHeight:myFontSize.h3.lineHeight}}>{item.reward}</Text>
                        </View>
                        :null
                    }
                    
                    {
                        item.reward_type == 3 ? 
                        <Text style={{color:myThemeColors.primary,fontSize:myFontSize.h3.fontSize,fontFamily:myFontSize.h3.fontFamily,lineHeight:myFontSize.h3.lineHeight}}>{item.reward}</Text>
                        :
                        null                    
                    }

                    {/* <Text style={{marginTop:hp('1%'),top:hp('0.5%')}}>Avatar</Text> */}
                    <View style={{height:hp('4%'),top:hp('1%'),justifyContent:"center",alignItems:"center" , transform:[{scaleX:-1}]}}> 
                    <FlatList
                            contentContainerStyle={{ paddingLeft: hp("1%") }}
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            data={AvatarData}
                            //  keyExtractor={item => Object}
                            renderItem={({ item,index }) =>
                                    <View>
                                        <Image source={item.url} style={{ height: hp("3%"), width: hp('3%') ,marginLeft:-wp('2%')}} resizeMode={"contain"} />
                                    </View>
                            } />
                    </View>
                    </View>
                </View>
                {
                    item.reward_type == 2 ?
                    <View style={{height:hp('6.5%'),width:wp('90%'),justifyContent:"center",alignItems:"center"}}>
                    <TouchableOpacity style={{backgroundColor:myThemeColors.mainbg,paddingVertical:hp('1%'),paddingHorizontal:wp('6%'),alignSelf:"center",borderRadius:hp('1%'),borderWidth:hp('0.15%'),borderColor:myThemeColors.primary,justifyContent:"center",alignItems:"center"}}>
                            <Text style={{fontSize:myFontSize.h3.fontSize,fontFamily:myFontSize.h3.fontFamily,lineHeight:myFontSize.h3.lineHeight,color:myThemeColors.mainfontcolor}}>Join</Text>
                    </TouchableOpacity>
                    </View>
                    :
                    null
                }

                {
                    item.reward_type == 3 ?
                    <View style={{height:hp('6%'),width:wp('90%'),marginTop:hp('1%'),paddingHorizontal:wp('3%'),justifyContent:"center",}}>
                    <View style={{position:"absolute",height:hp('5%'),width:wp('80%'),paddingLeft:wp('25%')}}><Text style={{bottom:hp('0.5%'),color:myThemeColors.mainfontcolor,fontSize:myFontSize.body.fontSize,fontFamily:myFontSize.small.fontFamily,lineHeight:myFontSize.small.lineHeight}}>{item.count}</Text></View>
                    <View style={{position:"absolute",height:hp('1%'),width:wp('80%'),borderRadius:hp('1%'),alignSelf:"center",backgroundColor:myThemeColors.bordercolor_gray}}></View>
                    <View style={{position:"absolute",height:hp('1%'),width:wp('40%'),borderRadius:hp('1%'),alignSelf:"flex-start",marginLeft:wp('5%'),backgroundColor:myThemeColors.primary}}></View>
                    </View>
                    :
                    null
                }
    
            </TouchableOpacity>             
            }
          />
          :
          <FlatList
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={myWalkData}
          style={{}}
          contentContainerStyle={{paddingBottom:hp('20%')}}
          keyExtractor={item => item.id}
          renderItem={({ item  }) => 
          <View  style={{height:hp('34%'),width:wp('90%'),paddingVertical:hp('2%'),justifyContent:"space-between",paddingHorizontal:wp('2%'),alignSelf:"center",backgroundColor:myThemeColors.mainbg,borderRadius:hp('2%'),borderWidth:hp('0.2%'),borderColor:myThemeColors.bordercolor_light,marginTop:hp('2%')}}>                     
            <View style={{height:hp('4%'),width:wp('86%'),flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingHorizontal:wp('2%')}}>
                <Text style={{fontSize:myFontSize.h2.fontSize,fontFamily:myFontSize.h2.fontFamily,lineHeight:myFontSize.h2.lineHeight,color:myThemeColors.mainfontcolor}}>{item.title}</Text>
                <Text style={{fontSize:myFontSize.small.fontSize,fontFamily:myFontSize.small.fontFamily,lineHeight:myFontSize.small.lineHeight,color:myThemeColors.secondfontcolor}}>{item.subtitle}</Text>
            </View>
            <View style={{height:hp('5%'),marginTop:hp('1%'),width:wp('86%'),flexDirection:"row",alignItems:"center",paddingHorizontal:wp('2%')}}>
                <View style={{height:hp('5%'),width:wp('16%'),justifyContent:"center",alignItems:"flex-start"}}>
                <Image source={Mappin_Start_Tile_Color} style={{height:hp('5%'),width:hp('5%')}} resizeMode="contain" />     
                </View>
                <View style={{height:hp('5%'),width:wp('66%'),justifyContent:"center",alignItems:"flex-start"}}>
                <Text style={{fontSize:myFontSize.small.fontSize,fontFamily:myFontSize.small.fontFamily,lineHeight:myFontSize.small.lineHeight,color:myThemeColors.secondfontcolor}}>Start</Text>
                <Text style={{fontSize:myFontSize.body.fontSize,fontFamily:myFontSize.body.fontFamily,lineHeight:myFontSize.body.lineHeight,color:myThemeColors.mainfontcolor}} numberOfLines={1}>{item.start_address}</Text>
                </View>
            </View>
            <View style={{height:hp('5%'),marginTop:hp('1%'),width:wp('86%'),flexDirection:"row",alignItems:"center",paddingHorizontal:wp('2%')}}>
                <View style={{height:hp('5%'),width:wp('16%'),justifyContent:"center",alignItems:"flex-start"}}>
                <Image source={Mappin_End_Tile_Color} style={{height:hp('5%'),width:hp('5%')}} resizeMode="contain" />     
                </View>
                <View style={{height:hp('5%'),width:wp('66%'),justifyContent:"center",alignItems:"flex-start"}}>
                <Text style={{fontSize:myFontSize.small.fontSize,fontFamily:myFontSize.small.fontFamily,lineHeight:myFontSize.small.lineHeight,color:myThemeColors.secondfontcolor}}>End</Text>
                <Text style={{fontSize:myFontSize.body.fontSize,fontFamily:myFontSize.body.fontFamily,lineHeight:myFontSize.body.lineHeight,color:myThemeColors.mainfontcolor}} numberOfLines={1}>{item.end_address}</Text>
                </View>
            </View>
            <View style={{height:hp('5%'),marginTop:hp('1%'),width:wp('86%'),flexDirection:"row",alignItems:"center",paddingHorizontal:wp('2%')}}>
                <View style={{height:hp('5%'),width:wp('16%'),justifyContent:"center",alignItems:"flex-start"}}>
                <Image source={Clock_Tile_Color_Tile} style={{height:hp('5%'),width:hp('5%')}} resizeMode="contain" />     
                </View>
                <View style={{height:hp('5%'),width:wp('66%'),justifyContent:"center",alignItems:"flex-start"}}>
                <Text style={{fontSize:myFontSize.small.fontSize,fontFamily:myFontSize.small.fontFamily,lineHeight:myFontSize.small.lineHeight,color:myThemeColors.secondfontcolor}}>Time</Text>
                <Text style={{fontSize:myFontSize.body.fontSize,fontFamily:myFontSize.body.fontFamily,lineHeight:myFontSize.body.lineHeight,color:myThemeColors.mainfontcolor}} numberOfLines={1}>{item.date_time}</Text>
                </View>
            </View>
            <View style={{height:hp('5%'),width:wp('86%'),marginTop:hp('1.5%'),flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingHorizontal:wp('2%')}}>
                {/* <View style={{height:hp('5%'),width:wp('16%'),alignItems:"center",justifyContent:"center",borderWidth:hp('0.2%')}}>
                    <Text>Avatar</Text>
                </View> */}
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
                {
                    item.room_type == 1 ?
                    null:
                    <TouchableOpacity style={{backgroundColor:myThemeColors.mainbg,paddingVertical:hp('1%'),paddingHorizontal:wp('6%'),alignSelf:"center",borderRadius:hp('1%'),borderWidth:hp('0.15%'),borderColor:myThemeColors.primary,justifyContent:"center",alignItems:"center"}}>
                    <Text style={{fontSize:myFontSize.h3.fontSize,fontFamily:myFontSize.h3.fontFamily,lineHeight:myFontSize.h3.lineHeight,color:myThemeColors.mainfontcolor}}>Join</Text>
                    </TouchableOpacity>
                }
            </View>

          </View>             
          }
        />
        }

        <TouchableOpacity onPress={OnCreateClick} style={{backgroundColor:myThemeColors.primary,paddingVertical:hp('2%'),paddingHorizontal:wp('6%'),alignSelf:"center",borderRadius:hp('1%'),justifyContent:"center",alignItems:"center",position:"absolute",bottom:hp('13%'),zIndex:100}}>
                            <Text style={{fontSize:myFontSize.h3.fontSize,fontFamily:myFontSize.h3.fontFamily,lineHeight:myFontSize.h3.lineHeight,color:myThemeColors.white}}>Create</Text>
        </TouchableOpacity>

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