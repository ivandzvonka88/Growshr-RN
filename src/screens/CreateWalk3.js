import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    Image,
    TouchableOpacity,
    StatusBar
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Back_Icon , Mappin_Start_Icon , Mappin_End_Icon,Maximize_Icon } from '../utils/appconstants';
import myFontSize from '../utils/myFontSize';
import myThemeColors from '../utils/myThemeColors';
import MapView, {Marker,Polyline} from 'react-native-maps';


const WalkRoute = (props) => {

    const OnNextClick = () => {
        props.navigation.navigate('CreateWalk4');
    }
    return(
        <View style={[styles.main_container,{backgroundColor:myThemeColors.mainbg}]}>
            <StatusBar
                translucent={true}
                backgroundColor = {'transparent'}
                barStyle = {"dark-content"}
            />
            <View style={{height:hp('8%'),width:wp('100%'),backgroundColor:myThemeColors.mainbg,flexDirection:"row",borderBottomWidth:hp('0.15%'),borderColor:myThemeColors.bordercolor_light,justifyContent:"space-between",alignItems:"center"}}>
            <TouchableOpacity onPress={() => { props.navigation.goBack() }} style={{height:hp('8%'),width:wp('15%'),justifyContent:"center",alignItems:"center"}}>
               <Image source={Back_Icon} style={{height:hp('3%'),width:hp('3%'),top:hp('0.2%')}}  />
            </TouchableOpacity>
            <View style={{height:hp('8%'),width:wp('60%'),justifyContent:"center",alignItems:"center"}}>
                <Text style={{top:hp('0.5%'),color:myThemeColors.mainfontcolor,fontSize:myFontSize.h2.fontSize,fontFamily:myFontSize.h2.fontFamily,lineHeight:myFontSize.h2.lineHeight}}>Walk Route</Text>
            </View>
            <View style={{height:hp('8%'),width:wp('20%'),justifyContent:"center",alignItems:"center"}}>    
            <Text style={{fontSize:myFontSize.body.fontSize,fontFamily:myFontSize.body.fontFamily,lineHeight:myFontSize.body.lineHeight,color:myThemeColors.secondfontcolor}}>Step 3/6</Text>
            </View>
            </View>

            <View style = {{height:hp('4%'), width:wp('90%'),alignSelf:'center',justifyContent:'center', marginVertical:hp('0.5%'),}}>
                <Text style = {{fontSize:myFontSize.small.fontSize,fontFamily:myFontSize.small.fontFamily,lineHeight:myFontSize.small.lineHeight, color:myThemeColors.thirdfontcolor}}>Choose Route</Text>
            </View>


            <TouchableOpacity style={{height:hp('8%'), width:wp('90%'), alignSelf:'center',flexDirection:'row',justifyContent:'space-between', marginVertical:hp('0.5%'), borderColor:myThemeColors.bordercolor_gray, borderWidth:hp('0.2%'), borderRadius:hp('2%')}}>
                <View style = {{height:hp('7%'), width:wp('72%'), paddingHorizontal:wp('4%'),justifyContent:'center'}}>
                      <Text style = {{fontSize:myFontSize.small.fontSize,fontFamily:myFontSize.small.fontFamily,lineHeight:myFontSize.small.lineHeight, color:myThemeColors.thirdfontcolor}}>Start Location</Text>
                    <Text numberOfLines ={1}  style = {{fontSize:myFontSize.body.fontSize,  fontFamily:myFontSize.body.fontFamily,  lineHeight:myFontSize.body.lineHeight, color:myThemeColors.mainfontcolor}}>West 96th Street & , Central Park West,New York</Text>

                </View>
                <View style={{height:hp('7%'), width:wp('15%'), justifyContent:'center',alignItems:'center',paddingHorizontal:wp('1%'), }}>
                    <Image  
                           source = {Mappin_Start_Icon}  style={{height:hp('4%'), width:hp('4%')}} resizeMode='contain'
                    />
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={{height:hp('8%'), width:wp('90%'), alignSelf:'center',flexDirection:'row',justifyContent:'space-between', marginVertical:hp('1%'), borderColor:myThemeColors.bordercolor_gray, borderWidth:hp('0.2%'), borderRadius:hp('2%')}}>
                <View style = {{height:hp('7%'), width:wp('72%'), paddingHorizontal:wp('4%'),justifyContent:'center'}}>
                      <Text style = {{fontSize:myFontSize.small.fontSize,fontFamily:myFontSize.small.fontFamily,lineHeight:myFontSize.small.lineHeight, color:myThemeColors.thirdfontcolor}}>End Location</Text>
                    <Text numberOfLines ={1}  style = {{fontSize:myFontSize.body.fontSize,  fontFamily:myFontSize.body.fontFamily,  lineHeight:myFontSize.body.lineHeight, color:myThemeColors.mainfontcolor}}>175 5th Ave, New York, NY 10010, United States</Text>

                </View>
                <View style={{height:hp('7%'), width:wp('15%'), justifyContent:'center',alignItems:'center',paddingHorizontal:wp('1%'), }}>
                    <Image  
                           source = {Mappin_End_Icon}  style={{height:hp('4%'), width:hp('4%')}} resizeMode='contain'
                    />
                </View>
            </TouchableOpacity>

            <View style={{height:hp('50%'), width:wp('90%'),marginTop:hp('2%'), alignSelf:'center',borderRadius:hp('2%'),overflow: 'hidden'}}>
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
                        latitudeDelta: 0.5,
                        longitudeDelta: 0.5,
                    }}

                >
                <Marker
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

            <View style={{position:"absolute",bottom:hp('2%'),alignSelf:"center",justifyContent:"center",alignItems:"center",}}>
            <TouchableOpacity
                        onPress={OnNextClick}
                        
                        style={{ backgroundColor: myThemeColors.primary, paddingVertical: hp('2%'), paddingHorizontal: wp('6%'), marginBottom: hp('5%'), alignSelf: "center", borderRadius: hp('1%'), justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ fontSize: myFontSize.h3.fontSize, fontFamily: myFontSize.h3.fontFamily, lineHeight: myFontSize.h3.lineHeight, color: myThemeColors.white }}>Next</Text>
            </TouchableOpacity>
            </View>

        </View>
    )
}

export default WalkRoute;

const styles = StyleSheet.create({
    main_container: {
        width: wp('100%'),
        height: hp('100%')+ StatusBar.currentHeight,
        paddingTop: StatusBar.currentHeight,
        backgroundColor:myThemeColors.mainbg
    },
})