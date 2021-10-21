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
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import myThemeColors from '../utils/myThemeColors';
import myFontSize from '../utils/myFontSize';
import { Coin_Tile_Color_Icon,Steps_Tile_Color_Icon,Clock_Icon,Flame_Color_Icon,Heart_Icon,Walk_Tile_Color_Icon,Bike_Tile_Color_Icon,Run_Tile_Color_Icon,Coin_Color_Icon,Maximize_Icon} from '../utils/appconstants';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Svg,{Circle,Path,Defs} from 'react-native-svg';
import LinearGradient,{Stop} from 'react-native-linear-gradient';
import MapView, {Marker,Polyline} from 'react-native-maps';

  const AvatarData=[
    {
        id:1,
        url:require('../assets/image/avatar_5.png'),
    },
    {
        id:2,
        url:require('../assets/image/avatar_3.png'),
    },
    {
        id:3,
        url:require('../assets/image/avatar.png'),
    },
]

  const StoresData = [
    {
        id:1,
        image: require("../assets/image/sprouts.png"),
    },
    {
        id:2,
        image: require("../assets/image/costco.png"),
    },
    {
        id:3,
        image: require("../assets/image/gelsons.png"),
    },
    {
        id:4,
        image: require("../assets/image/gelsons.png"),
    },
];

        const myFlatlistData=[
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
            reward:"500",
            reward_type:2
        },
      ]

export default function Login(props) {

    const [tabIndex,SettabIndex] = useState(1);
    const [storeIndex, SetstoreIndex] = React.useState(1);

    const OnAllStoresClick =()=>{
        props.navigation.navigate('StoreList');
    }

    const OnTopUpClick =()=>{
    }
    
    return (
        <View style={[styles.main_container,{backgroundColor:myThemeColors.mainbg}]}>
            <StatusBar
                translucent={true}
                backgroundColor = {myThemeColors.mainbg}
                barStyle = {"dark-content"}
            />
        <KeyboardAwareScrollView style={{height:hp('100%'),width:wp('100%'),}} enableOnAndroid extraHeight={hp('5%')} contentContainerStyle={{paddingBottom:hp('12%')}} nestedScrollEnabled={true}>

        <View style={{height:hp('8%'),width:wp('100%'),backgroundColor:myThemeColors.mainbg,flexDirection:"row",borderBottomWidth:hp('0.15%'),borderColor:myThemeColors.bordercolor_light,justifyContent:"space-between",alignItems:"center"}}>
            <View style={{height:hp('8%'),width:wp('20%'),justifyContent:"center",alignItems:"center"}}>
            </View>
            <View style={{height:hp('8%'),width:wp('60%'),justifyContent:"center",alignItems:"center"}}>
                <Text style={{top:hp('0.5%'),color:myThemeColors.mainfontcolor,fontSize:myFontSize.h2.fontSize,fontFamily:myFontSize.h2.fontFamily,lineHeight:myFontSize.h2.lineHeight}}>Home</Text>
            </View>
        <View style={{height:hp('8%'),width:wp('20%'),justifyContent:"center",alignItems:"center"}}>         
        </View>
        </View>

        <View style={{height:hp('11%'),width:wp('100%'),marginTop:hp('2%')}}>
            <View style={{height:hp('3%'),width:wp('100%'),paddingHorizontal:wp('5%'),justifyContent:"center"}}>
                <Text style={{color:myThemeColors.mainfontcolor,fontSize:myFontSize.h3.fontSize,fontFamily:myFontSize.h3.fontFamily,lineHeight:myFontSize.h3.lineHeight}}>Balance</Text>
            </View>
            <View style={{height:hp('7%'),marginTop:hp('1%'),width:wp('100%'),paddingHorizontal:wp('5%'),flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                <View style={{height:hp('7%'),width:wp('15%'),right:wp('1.4%'),justifyContent:"center",alignItems:"center"}}>
                <Image source={Coin_Tile_Color_Icon} style={{height:hp('6.6%'),width:hp('6.6%')}} resizeMode="contain" />     
                </View>
                <View style={{height:hp('7%'),width:wp('50%'),right:wp('2%'),paddingHorizontal:wp('3%'),justifyContent:"center",alignItems:"flex-start"}}>
                <Text style={{color:myThemeColors.mainfontcolor,fontSize:myFontSize.h3.fontSize,fontFamily:myFontSize.h3.fontFamily,lineHeight:myFontSize.h3.lineHeight}}>100 <Text style={{color:myThemeColors.secondfontcolor,fontSize:myFontSize.small.fontSize,fontFamily:myFontSize.small.fontFamily,lineHeight:myFontSize.small.lineHeight}}>coins</Text></Text>    
                </View>
                <View style={{height:hp('7%'),width:wp('25%'),justifyContent:"center",alignItems:"center"}}>
                    <TouchableOpacity onPress={OnTopUpClick} style={{height:hp('5%'),width:wp('27%'),borderRadius:hp('1.5%'),right:wp('2%'),justifyContent:"center",alignItems:"center",borderWidth:hp('0.12%'),borderColor:myThemeColors.primary}}>
                    <Text style={{color:myThemeColors.mainfontcolor,fontSize:myFontSize.h3.fontSize,fontFamily:myFontSize.h3.fontFamily,lineHeight:myFontSize.h3.lineHeight}}>Top Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

        
            <View style={{height:hp('3%'),width:wp('100%'),paddingHorizontal:wp('5%'),justifyContent:"center",marginTop:hp('3%')}}>
                <Text style={{color:myThemeColors.mainfontcolor,fontSize:myFontSize.h3.fontSize,fontFamily:myFontSize.h3.fontFamily,lineHeight:myFontSize.h3.lineHeight}}>Stats</Text>
            </View>

            <View style={{height:hp('10%'),marginTop:hp('1%'),width:wp('90%'),alignSelf:"center",borderRadius:hp('1.5%'),backgroundColor:myThemeColors.primary_2,flexDirection:"row",alignItems:"center"}}>
                <View style={{height:hp('8%'),width:wp('12%'),marginLeft:wp('4%'),justifyContent:"center",alignItems:"center"}}>
                <Image source={Steps_Tile_Color_Icon} style={{height:hp('6.6%'),width:hp('6.6%')}} resizeMode="contain" />     
                </View>
                <View style={{height:hp('8%'),width:wp('20%'),justifyContent:"center",marginLeft:wp('4%'),paddingHorizontal:wp('1%')}}>
                    <Text style={{color:myThemeColors.mainfontcolor,fontSize:myFontSize.h2.fontSize,fontFamily:myFontSize.h2.fontFamily,lineHeight:myFontSize.h2.lineHeight}}>7,218</Text>
                    <Text style={{color:myThemeColors.secondfontcolor,fontSize:myFontSize.body.fontSize,fontFamily:myFontSize.body.fontFamily,lineHeight:myFontSize.body.lineHeight}}>steps</Text>
                </View>

                <View style={{height:hp('8%'),width:wp('42%'),alignItems:"center",justifyContent:"space-evenly",marginLeft:wp('4%'),flexDirection:"row"}}>
                    <View>
                        <View style={{height:hp('6%'),width:wp('1%'),alignSelf:"center",alignItems:"center",justifyContent:"flex-end"}}>
                        <View style={{height:hp('3%'),width:wp('1%'),borderRadius:hp('1%'),alignSelf:"center",backgroundColor:myThemeColors.primary}}>
                        </View>
                        </View>
                        <Text style={{color:myThemeColors.secondfontcolor,fontSize:myFontSize.body.fontSize,fontFamily:myFontSize.body.fontFamily,lineHeight:myFontSize.body.lineHeight}}>m</Text>
                    </View>
                    <View>
                        <View style={{height:hp('6%'),width:wp('1%'),alignSelf:"center",alignItems:"center",justifyContent:"flex-end"}}>
                        <View style={{height:hp('1%'),width:wp('1%'),borderRadius:hp('1%'),alignSelf:"center",backgroundColor:myThemeColors.primary}}>
                        </View>
                        </View>
                        <Text style={{color:myThemeColors.secondfontcolor,fontSize:myFontSize.body.fontSize,fontFamily:myFontSize.body.fontFamily,lineHeight:myFontSize.body.lineHeight}}>t</Text>
                    </View>
                    <View>
                        <View style={{height:hp('6%'),width:wp('1%'),alignSelf:"center",alignItems:"center",justifyContent:"flex-end"}}>
                        <View style={{height:hp('2.2%'),width:wp('1%'),borderRadius:hp('1%'),alignSelf:"center",backgroundColor:myThemeColors.primary}}>
                        </View>
                        </View>
                        <Text style={{color:myThemeColors.secondfontcolor,fontSize:myFontSize.body.fontSize,fontFamily:myFontSize.body.fontFamily,lineHeight:myFontSize.body.lineHeight}}>w</Text>
                    </View>
                    <View>
                        <View style={{height:hp('6%'),width:wp('1%'),alignSelf:"center",alignItems:"center",justifyContent:"flex-end"}}>
                        <View style={{height:hp('4%'),width:wp('1%'),borderRadius:hp('1%'),alignSelf:"center",backgroundColor:myThemeColors.primary}}>
                        </View>
                        </View>
                        <Text style={{color:myThemeColors.secondfontcolor,fontSize:myFontSize.body.fontSize,fontFamily:myFontSize.body.fontFamily,lineHeight:myFontSize.body.lineHeight}}>t</Text>
                    </View>
                    <View>
                        <View style={{height:hp('6%'),width:wp('1%'),alignSelf:"center",alignItems:"center",justifyContent:"flex-end"}}>
                        <View style={{height:hp('3%'),width:wp('1%'),borderRadius:hp('1%'),alignSelf:"center",backgroundColor:myThemeColors.primary}}>
                        </View>
                        </View>
                        <Text style={{color:myThemeColors.secondfontcolor,fontSize:myFontSize.body.fontSize,fontFamily:myFontSize.body.fontFamily,lineHeight:myFontSize.body.lineHeight}}>f</Text>
                    </View>
                    <View>
                        <View style={{height:hp('6%'),width:wp('1%'),alignSelf:"center",alignItems:"center",justifyContent:"flex-end"}}>
                        <View style={{height:hp('5%'),width:wp('1%'),borderRadius:hp('1%'),alignSelf:"center",backgroundColor:myThemeColors.primary}}>
                        </View>
                        </View>
                        <Text style={{color:myThemeColors.secondfontcolor,fontSize:myFontSize.body.fontSize,fontFamily:myFontSize.body.fontFamily,lineHeight:myFontSize.body.lineHeight}}>s</Text>
                    </View>
                    <View>
                        <View style={{height:hp('6%'),width:wp('1%'),alignSelf:"center",alignItems:"center",justifyContent:"flex-end"}}>
                        <View style={{height:hp('6%'),width:wp('1%'),borderRadius:hp('1%'),alignSelf:"center",backgroundColor:myThemeColors.primary}}>
                        </View>
                        </View>
                        <Text style={{color:myThemeColors.secondfontcolor,fontSize:myFontSize.body.fontSize,fontFamily:myFontSize.body.fontFamily,lineHeight:myFontSize.body.lineHeight}}>S</Text>
                    </View>
                </View>
            </View>

            <View style={{height:hp('19%'),marginTop:hp('2%'),width:wp('90%'),alignSelf:"center",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>

                    <View style={{height:hp('18%'),width:wp('27%'),backgroundColor:myThemeColors.mainbg,elevation:2,borderRadius:hp('1.5%'),alignItems:"center"}}>
                            <View style={{height:hp('4%'),marginTop:hp('1%'),paddingLeft:wp('3%'),paddingRight:wp('2%'),width:wp('27%'),flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                                <Text style={{color:myThemeColors.mainfontcolor,fontSize:myFontSize.body.fontSize,fontFamily:myFontSize.body.fontFamily,lineHeight:myFontSize.body.lineHeight}}>Time</Text>
                                <View style={{height:hp('4%'),width:wp('8%'),justifyContent:"center",alignItems:"center"}}> 
                                <Image source={Clock_Icon} style={{height:hp('3%'),width:hp('3%')}} resizeMode="contain"/>     
                                </View>
                            </View>

                            <View style={{height:hp('12%'),paddingHorizontal:wp('2%'),width:wp('25%'),justifyContent:"center",alignItems:"center"}}>
                            <View style={{position:"absolute",alignSelf:"center",justifyContent:"center",alignItems:"center"}}>
                                        <Text style={{color:myThemeColors.mainfontcolor,fontSize:myFontSize.body.fontSize,fontFamily:myFontSize.h3.fontFamily}}>14</Text>
                                        <Text style={{color:myThemeColors.secondfontcolor,fontSize:myFontSize.small.fontSize,fontFamily:myFontSize.small.fontFamily}}>hrs</Text>
                            </View>
                            <AnimatedCircularProgress
                                    size={hp('11.5%')}
                                    width={hp('0.45%')}
                                    fill={90}
                                    tintColor={myThemeColors.primary}
                                    backgroundColor={'#F1F4F7'}
                                    backgroundWidth={hp('0.3%')}
                                    lineCap={'round'}
                                    rotation={0}
                                    padding={hp('1%')}
                                    renderCap={({ center }) => <Svg style={{justifyContent:"center",alignItems:"center"}}>
                                        <Circle cx={center.x} cy={center.y} r={hp('0.75%')} fill={myThemeColors.primary}/>
                                        <Circle cx={center.x} cy={center.y} r={hp('0.3%')} fill={myThemeColors.mainbg}/>
                                    </Svg>}
                                    />
                            </View>
                    </View>

                    <View style={{height:hp('18%'),width:wp('27%'),backgroundColor:myThemeColors.mainbg,elevation:2,borderRadius:hp('1.5%'),alignItems:"center"}}>
                            <View style={{height:hp('4%'),marginTop:hp('1%'),paddingLeft:wp('3%'),paddingRight:wp('1%'),width:wp('27%'),flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                                <Text style={{color:myThemeColors.mainfontcolor,fontSize:myFontSize.body.fontSize,fontFamily:myFontSize.body.fontFamily,lineHeight:myFontSize.body.lineHeight}}>Calories</Text>
                                <View style={{height:hp('4%'),width:wp('8%'),justifyContent:"center",alignItems:"center"}}> 
                                <Image source={Flame_Color_Icon} style={{height:hp('3%'),width:hp('3%')}} resizeMode="contain" />     
                                </View>
                            </View>

                            <View style={{height:hp('12%'),paddingHorizontal:wp('2%'),width:wp('25%'),justifyContent:"center",alignItems:"center"}}>
                                <View style={{position:"absolute",alignSelf:"center",justifyContent:"center",alignItems:"center"}}>
                                        <Text style={{color:myThemeColors.mainfontcolor,fontSize:myFontSize.body.fontSize,fontFamily:myFontSize.h3.fontFamily}}>412,12</Text>
                                        <Text style={{color:myThemeColors.secondfontcolor,fontSize:myFontSize.small.fontSize,fontFamily:myFontSize.small.fontFamily}}>cal</Text>
                                </View>
                                <AnimatedCircularProgress
                                    size={hp('11.5%')}
                                    width={hp('0.45%')}
                                    fill={20}
                                    tintColor={myThemeColors.orange}
                                    backgroundColor={'#F1F4F7'}
                                    backgroundWidth={hp('0.3%')}
                                    lineCap={'round'}
                                    rotation={0}
                                    padding={hp('1%')}
                                    renderCap={({ center }) => <Svg style={{justifyContent:"center",alignItems:"center",}}>
                                        <Circle cx={center.x} cy={center.y} r={hp('0.75%')} fill={myThemeColors.orange}/>  
                                        <Circle cx={center.x} cy={center.y} r={hp('0.3%')} fill={myThemeColors.mainbg} />
                                    </Svg>}
                                    />
                            </View>
                    </View>

                    <View style={{height:hp('18%'),width:wp('27%'),backgroundColor:myThemeColors.mainbg,elevation:2,borderRadius:hp('1.5%'),alignItems:"center"}}>
                    <View style={{height:hp('4%'),marginTop:hp('1%'),paddingLeft:wp('3%'),paddingRight:wp('2%'),width:wp('27%'),flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                                <Text style={{color:myThemeColors.mainfontcolor,fontSize:myFontSize.body.fontSize,fontFamily:myFontSize.body.fontFamily,lineHeight:myFontSize.body.lineHeight}}>Heart</Text>
                                <View style={{height:hp('4%'),width:wp('8%'),justifyContent:"center",alignItems:"center"}}> 
                                <Image source={Heart_Icon} style={{height:hp('3%'),width:hp('3%')}} resizeMode="contain" />     
                                </View>
                            </View>

                            <View style={{height:hp('12%'),width:wp('27%')}}>

                            <Image source={require("../assets/icon/bpm_line.png")} style={{height:hp('4.5%'),width:wp('27%'),position:"absolute",top:hp('1%')}} resizeMode="contain" />     
                            <Image source={require("../assets/icon/bpm_bg.png")} style={{height:hp('12%'),width:wp('27%'),position:"absolute",top:hp('1%')}} resizeMode="contain" />     
                            <View style={{position:"absolute",bottom:hp('1%'),left:wp('3%')}}>
                                <Text style={{zIndex:100,color:myThemeColors.mainfontcolor,fontSize:myFontSize.body.fontSize,fontFamily:myFontSize.h3.fontFamily}}>72</Text>
                                <Text style={{zIndex:100,color:myThemeColors.secondfontcolor,fontSize:myFontSize.small.fontSize,fontFamily:myFontSize.small.fontFamily}}>bpm</Text>

                            </View>

                            {/* <View style={{position:"absolute",bottom:0,justifyContent:"center",alignItems:"center"}}>
                            <LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['#FF52522a','#ffffff']} style={styles.linearGradient}>

                            <Text style={{zIndex:100,color:myThemeColors.mainfontcolor,fontSize:myFontSize.body.fontSize,fontFamily:myFontSize.h3.fontFamily}}>72</Text>
                            <Text style={{zIndex:100,color:myThemeColors.secondfontcolor,fontSize:myFontSize.small.fontSize,fontFamily:myFontSize.small.fontFamily}}>bpm</Text>
                            </LinearGradient>
                            </View> */}

                            {/* <Svg  height={hp('10%')} width={wp('27%')} viewBox="0 0 1440 1020">
                            <Defs>
                            <LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['#FF5252','#FF52522a','#ffffff']} style={styles.linearGradient}></LinearGradient>
                            </Defs>

                            <Path fill="#FF5252" fill-opacity="0.5" d="M0,294L15,245C30,196,60,98,90,122.5C120,147,150,294,180,343C210,392,240,343,270,318.5C300,294,330,294,360,302.2C390,310,420,327,450,326.7C480,327,510,310,540,285.8C570,261,600,229,630,220.5C660,212,690,229,720,253.2C750,278,780,310,810,277.7C840,245,870,147,900,114.3C930,82,960,114,990,155.2C1020,196,1050,245,1080,245C1110,245,1140,196,1170,220.5C1200,245,1230,343,1260,375.7C1290,408,1320,376,1350,334.8C1380,294,1410,245,1440,245C1470,245,1500,294,1530,285.8C1560,278,1590,212,1620,171.5C1650,131,1680,114,1710,122.5C1740,131,1770,163,1800,179.7C1830,196,1860,196,1890,236.8C1920,278,1950,359,1980,392C2010,425,2040,408,2070,343C2100,278,2130,163,2145,106.2L2160,49L2160,490L2145,490C2130,490,2100,490,2070,490C2040,490,2010,490,1980,490C1950,490,1920,490,1890,490C1860,490,1830,490,1800,490C1770,490,1740,490,1710,490C1680,490,1650,490,1620,490C1590,490,1560,490,1530,490C1500,490,1470,490,1440,490C1410,490,1380,490,1350,490C1320,490,1290,490,1260,490C1230,490,1200,490,1170,490C1140,490,1110,490,1080,490C1050,490,1020,490,990,490C960,490,930,490,900,490C870,490,840,490,810,490C780,490,750,490,720,490C690,490,660,490,630,490C600,490,570,490,540,490C510,490,480,490,450,490C420,490,390,490,360,490C330,490,300,490,270,490C240,490,210,490,180,490C150,490,120,490,90,490C60,490,30,490,15,490L0,490Z"></Path>
                            </Svg> */}

                            {/* <Svg height={hp("10%")} width={wp('27%')} viewBox="0 0 1140 650" preserveAspectRatio="none">
                            <GradientPath
                                d={
                                'M0,256L26.7,218.7C53.3,181,107,107,160,96C213.3,85,267,139,320,138.7C373.3,139,427,85,480,69.3C533.3,53,587,75,640,80C693.3,85,747,75,800,112C853.3,149,907,235,960,245.3C1013.3,256,1067,192,1120,154.7C1173.3,117,1227,107,1280,90.7C1333.3,75,1387,53,1413,42.7L1440,32L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z'
                                }
                                colors={['#FF5252','#FFFFFF']}
                                
                                strokeWidth={hp('2%')}
                            />
                            </Svg> */}

                            </View>
                    </View>
            </View>


            <View style={{height:hp('3%'),width:wp('100%'),paddingHorizontal:wp('5%'),justifyContent:"center",marginTop:hp('2%')}}>
                <Text style={{color:myThemeColors.mainfontcolor,fontSize:myFontSize.h3.fontSize,fontFamily:myFontSize.h3.fontFamily,lineHeight:myFontSize.h3.lineHeight}}>Activities</Text>
            </View>

            <View style={{height:hp('5%'),width:wp('90%'),alignSelf:"center",alignItems:"center",flexDirection:"row",marginTop:hp('1%'),borderBottomWidth:hp('0.2%'),borderColor:myThemeColors.bordercolor_light}}>
                <TouchableOpacity onPress={()=>{SettabIndex(1)}} style={{height:hp('5%'),width:wp('45%'),justifyContent:"center",alignItems:"center",borderBottomWidth:hp('0.2%'),borderColor:tabIndex == 1?myThemeColors.primary:myThemeColors.bordercolor_light}}>
                <Text style={{color:tabIndex == 1 ?myThemeColors.mainfontcolor:myThemeColors.secondfontcolor,fontSize:myFontSize.body.fontSize,fontFamily:myFontSize.h3.fontFamily,lineHeight:myFontSize.body.lineHeight}}>Challenges</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{SettabIndex(2)}} style={{height:hp('5%'),width:wp('45%'),justifyContent:"center",alignItems:"center",borderBottomWidth:hp('0.2%'),borderColor:tabIndex == 2?myThemeColors.primary:myThemeColors.bordercolor_light}}>
                <Text style={{color:tabIndex == 2 ?myThemeColors.mainfontcolor:myThemeColors.secondfontcolor,fontSize:myFontSize.body.fontSize,fontFamily:myFontSize.h3.fontFamily,lineHeight:myFontSize.body.lineHeight}}>Walk</Text>
                </TouchableOpacity>
            </View>

        <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={myFlatlistData}
        style={{}}
        contentContainerStyle={{}}
        keyExtractor={item => item.id}
        renderItem={({ item  }) => 
        <View  style={{height:hp('18%'),width:wp('90%'),alignSelf:"center",backgroundColor:myThemeColors.mainbg,borderRadius:hp('2%'),borderWidth:hp('0.2%'),borderColor:myThemeColors.bordercolor_light,marginTop:hp('2%')}}>                     
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
                    item.reward_type == 1? 
                    <Text style={{color:myThemeColors.primary,fontSize:myFontSize.h3.fontSize,fontFamily:myFontSize.h3.fontFamily,lineHeight:myFontSize.h3.lineHeight}}>{item.reward}</Text>
                    :
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                    <Image source={Coin_Color_Icon} style={{height:hp('2.2%'),width:hp('2.2%'),}} resizeMode="contain" />
                    <Text style={{marginLeft:wp('1%'),color:myThemeColors.orange,fontSize:myFontSize.h3.fontSize,fontFamily:myFontSize.h3.fontFamily,lineHeight:myFontSize.h3.lineHeight}}>{item.reward}</Text>
                    </View>
                }
                <View style={{height:hp('4%'),top:hp('1%'),justifyContent:"center",alignItems:"center" , transform:[{scaleX:-1}]}}> 
                    <FlatList
                            contentContainerStyle={{ paddingLeft: hp("1%") }}
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            data={AvatarData}
                            //  keyExtractor={item => Object}
                            renderItem={({ item,index }) =>
                                    <View >
                                        <Image source={item.url} style={{ height: hp("3%"), width: hp('3%') ,marginLeft:-wp('2%')}} resizeMode={"contain"} />
                                    </View>
                            } />
                    </View>
                </View>
            </View>
            {
                item.icon_type == 1 ?
                <View style={{height:hp('6%'),width:wp('90%'),paddingTop:hp('1%'),paddingHorizontal:wp('3%'),justifyContent:"center",}}>
                <View style={{position:"absolute",height:hp('5%'),width:wp('80%'),paddingLeft:wp('5%')}}><Text style={{bottom:hp('0.5%'),color:myThemeColors.mainfontcolor,fontSize:myFontSize.body.fontSize,fontFamily:myFontSize.small.fontFamily,lineHeight:myFontSize.small.lineHeight}}>{item.count}</Text></View>
                <View style={{position:"absolute",height:hp('1%'),width:wp('80%'),borderRadius:hp('1%'),alignSelf:"center",backgroundColor:myThemeColors.bordercolor_gray}}></View>
                <View style={{position:"absolute",height:hp('1%'),width:wp('20%'),borderRadius:hp('1%'),alignSelf:"flex-start",marginLeft:wp('5%'),backgroundColor:myThemeColors.primary}}></View>
                </View>
                :null
            }

            {
                item.icon_type == 2 ?
                <View style={{height:hp('6%'),width:wp('90%'),paddingTop:hp('1%'),paddingHorizontal:wp('3%'),justifyContent:"center",}}>
                <View style={{position:"absolute",height:hp('5%'),width:wp('80%'),paddingLeft:wp('25%')}}><Text style={{bottom:hp('0.5%'),color:myThemeColors.mainfontcolor,fontSize:myFontSize.body.fontSize,fontFamily:myFontSize.small.fontFamily,lineHeight:myFontSize.small.lineHeight}}>{item.count}</Text></View>
                <View style={{position:"absolute",height:hp('1%'),width:wp('80%'),borderRadius:hp('1%'),alignSelf:"center",backgroundColor:myThemeColors.bordercolor_gray}}></View>
                <View style={{position:"absolute",height:hp('1%'),width:wp('30%'),borderRadius:hp('1%'),alignSelf:"flex-start",marginLeft:wp('5%'),backgroundColor:myThemeColors.primary}}></View>
                </View>
                :null
            }

            {
                item.icon_type == 3 ?
                <View style={{height:hp('6%'),width:wp('90%'),paddingTop:hp('1%'),paddingHorizontal:wp('3%'),justifyContent:"center",}}>
                <View style={{position:"absolute",height:hp('5%'),width:wp('80%'),paddingLeft:wp('55%')}}><Text style={{bottom:hp('0.5%'),color:myThemeColors.mainfontcolor,fontSize:myFontSize.body.fontSize,fontFamily:myFontSize.small.fontFamily,lineHeight:myFontSize.small.lineHeight}}>{item.count}</Text></View>
                <View style={{position:"absolute",height:hp('1%'),width:wp('80%'),borderRadius:hp('1%'),alignSelf:"center",backgroundColor:myThemeColors.bordercolor_gray}}></View>
                <View style={{position:"absolute",height:hp('1%'),width:wp('60%'),borderRadius:hp('1%'),alignSelf:"flex-start",marginLeft:wp('5%'),backgroundColor:myThemeColors.primary}}></View>
                </View>
                :null
            }

        </View>             
        }
      />

            <View style={{height:hp('6%'),width:wp('100%'),paddingHorizontal:wp('5%'),alignItems:"center",justifyContent:"space-between",flexDirection:"row",marginTop:hp('2%')}}>
                <Text style={{color:myThemeColors.mainfontcolor,fontSize:myFontSize.h3.fontSize,fontFamily:myFontSize.h3.fontFamily,lineHeight:myFontSize.h3.lineHeight}}>Stores</Text>
                <Text onPress={OnAllStoresClick} style={{color:myThemeColors.primary,fontSize:myFontSize.body.fontSize,fontFamily:myFontSize.body.fontFamily,lineHeight:myFontSize.body.lineHeight}}>All Stores</Text>
            </View>

            <View style={{ height: hp('8%'), width: wp('100%'), alignSelf: "center", }} >
                        {/* <FlatList
                            style={styles.flatliststyle}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{paddingRight:wp('2%')}}
                            horizontal={true}
                            data={StoresData}
                            renderItem={({ item }) =>
                                    <TouchableOpacity onPress={() => { SetstoreIndex(item.id) }} style={storeIndex == item.id ? styles.name_view : styles.name_tarnspernt}>
                                        <Image source={item.image} style={{ height: hp("4%"), width: wp('25%') }} resizeMode="contain" />
                                    </TouchableOpacity>
                            } /> */}
                    <FlatList
                        style={styles.flatliststyle}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        data={StoresData}
                        renderItem={({ item }) =>
                        <TouchableOpacity onPress={() => { SetstoreIndex(item.id) }} style={storeIndex == item.id ? styles.name_view : styles.name_tarnspernt}>
                            <Image source={item.image} style={{ height: hp("3%"), width: wp('20%') }} resizeMode={"contain"} />
                        </TouchableOpacity>
                        } />
            
            </View>


            <View style={{height: hp('40%'), width: wp('90%'),alignSelf:"center",borderRadius:hp('2%'),overflow: 'hidden',marginTop:hp('2.3%')}}>   
            <MapView
                style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        }}
                initialRegion={{
                                latitude: 34.180840,
                                longitude:-118.308968,
                                latitudeDelta: 0.2,
                                longitudeDelta: 0.2,
                }}
            >
          <Marker
            // draggable={true}
            coordinate={{
              latitude: 34.180840,
              longitude: -118.308968,
            }}
            image={require("../assets/icon/mappin_user.png")}
         
            title={'Test Growshr Marker'}
            description={'This is a description of the marker'}
          />

        <Marker
          
            coordinate={{
              latitude: 34.052235,
              longitude: -118.243683,
            }}
            image={require("../assets/icon/mappin_shop.png")}
          
            title={'Test Growshr Marker'}
            description={'This is a description of the marker'}
            height={30}
            width={50}
            
          />

        
        </MapView>
            <TouchableOpacity style={{zIndex:100,height:hp('5%'),width:hp('5%'),justifyContent:"center",alignItems:"center",position:"absolute",top:hp('1%'),right:hp('1%')}}>
            <Image source={Maximize_Icon} style={{ height: hp("5%"), width:hp('5%') }} resizeMode="contain" />
            </TouchableOpacity>
        </View>

        </KeyboardAwareScrollView>
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
    linearGradient: {
        height:hp('5%'),width:wp('27%'),
        paddingHorizontal:wp('4%')
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
});

