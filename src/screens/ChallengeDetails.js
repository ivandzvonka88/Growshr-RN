
import * as React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet, 
    TouchableOpacity,
    Image,
    StatusBar,
    FlatList,
    ScrollView
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Chevron_Left , Walk_Tile_Color_Light, Steps_Tile_Color_Light3, Calendar_Tile_Color_Light, Clock_Tile_Color_Tile, Coin_Tile_Color_Light, Trophy_Tile_Color_Light , Avatar_1,Avatar_2,Avatar_3,Avatar_4,Heart_Icon,Heart_Color_Icon} from '../utils/appconstants';
import myFontSize from '../utils/myFontSize';
import myThemeColors from '../utils/myThemeColors';

const myChallengeDetailsData=[
    {
      id:1,
      title:'Paityn Korsgaard',
      icon_type:1,
      goal:'7 000 steps',
      image : Avatar_1,
      count:"0",
      line_index : 1,
    
    },
    {
        id:2,
        title:'Kaylynn Lubin',
        icon_type:1,
        goal:'6 000 steps',
        image :Avatar_2,
        count:"0",
        line_index : 2,
        
    },
    {
        id:3,
        title:'Marely Herwitz',
        icon_type:2,
        goal:'12 000 steps',
        image : Avatar_3,
        count:"1",
        line_index : 3,
    },
    {
        id:4,
        title:'Ashlynn Korsgaard',
        icon_type:1,
        goal:'7 000 steps',
        image : Avatar_4,
        count:"0",
        line_index : 4,
    },

  ]




const ChallengeDetails= (props) => {

    const OnJoinClick=()=>{
        props.navigation.goBack()
    }
    return(
        <View style={styles.main_container}>
      
        <StatusBar
                translucent={true}
                backgroundColor = {'transparent'}
                barStyle = {"dark-content"}
            />

        <View style={{height:hp('8%'),width:wp('100%'),backgroundColor:myThemeColors.mainbg,flexDirection:"row",borderBottomWidth:hp('0.15%'),borderColor:myThemeColors.bordercolor_light,justifyContent:"space-between",alignItems:"center"}}>
            <TouchableOpacity onPress={() => { props.navigation.goBack() }} style={{height:hp('8%'),width:wp('15%'),justifyContent:"center",alignItems:"center"}}>
               <Image source={Chevron_Left} style={{height:hp('3%'),width:hp('3%'),top:hp('0.2%')}}  />
            </TouchableOpacity>
            <View style={{height:hp('8%'),width:wp('70%'),justifyContent:"center",alignItems:"center"}}>
                <Text style={{top:hp('0.5%'),color:myThemeColors.mainfontcolor,fontSize:myFontSize.h2.fontSize,fontFamily:myFontSize.h2.fontFamily,lineHeight:myFontSize.h2.lineHeight}}>Challenge Details</Text>
            </View>
        <View style={{height:hp('8%'),width:wp('15%'),justifyContent:"center",alignItems:"center"}}>         
        </View>
        </View>

            <ScrollView 
                contentContainerStyle={{}} 
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                nestedScrollEnabled={true}
                >
            <View style={{width:wp('90%'), height:hp('10%'),alignSelf:'center' ,justifyContent:'center',}}>
                <Text style={{fontSize:myFontSize.small.fontSize,fontFamily:myFontSize.small.fontFamily,lineHeight:myFontSize.small.lineHeight, color:myThemeColors.thirdfontcolor}}>Challenge Name</Text>
                <Text style={{fontSize:myFontSize.h1.fontSize,fontFamily:myFontSize.h1.fontFamily,lineHeight:myFontSize.h1.lineHeight,paddingVertical:hp('1%')}}>Walking Challenge</Text>
            </View>


            <View style={{height:hp('8%'),width:wp('100%'),paddingLeft:wp('5%'),paddingRight:wp('2%'),alignSelf:"center",backgroundColor:myThemeColors.mainbg,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                <View style={{height:hp('8%'),width:wp('10%'),justifyContent:"center",alignItems:"center"}}>
                    <Image source={Walk_Tile_Color_Light} style={{height:hp('6%'),width:hp('6%')}} resizeMode={"contain"} />
                </View>
                <View style={{height:hp('8%'),width:wp('71%'),justifyContent:"center",alignItems:"flex-start"}}>
                    <View style={{ flexDirection: 'column', padding: wp('5%'),}}>
                    <Text style={{ color:myThemeColors.secondfontcolor,fontSize:myFontSize.small.fontSize,fontFamily:myFontSize.small.fontFamily,lineHeight:myFontSize.small.lineHeight }}>Type</Text>
                        <Text style={{ color:myThemeColors.mainfontcolor,fontSize:myFontSize.h2.fontSize,fontFamily:myFontSize.h2.fontFamily,lineHeight:myFontSize.h2.lineHeight }}>Walking</Text>
                    </View>                    
                </View>
            <View style={{height:hp('8%'),width:wp('10%'),justifyContent:"center",alignItems:"flex-start"}}> 
            </View>
            </View>

            <View style={{height:hp('8%'),width:wp('100%'),paddingLeft:wp('5%'),paddingRight:wp('2%'),alignSelf:"center",backgroundColor:myThemeColors.mainbg,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                <View style={{height:hp('8%'),width:wp('10%'),justifyContent:"center",alignItems:"center"}}>
                    <Image source={Steps_Tile_Color_Light3} style={{height:hp('6%'),width:hp('6%')}} resizeMode={"contain"} />
                </View>
                <View style={{height:hp('8%'),width:wp('71%'),justifyContent:"center",alignItems:"flex-start"}}>
                    <View style={{ flexDirection: 'column', padding: wp('5%'),}}>
                    <Text style={{ color:myThemeColors.secondfontcolor,fontSize:myFontSize.small.fontSize,fontFamily:myFontSize.small.fontFamily,lineHeight:myFontSize.small.lineHeight }}>Goal</Text>
                        <Text style={{ color:myThemeColors.mainfontcolor,fontSize:myFontSize.h2.fontSize,fontFamily:myFontSize.h2.fontFamily,lineHeight:myFontSize.h2.lineHeight }}>10,000 steps</Text>
                    </View>                    
                </View>
            <View style={{height:hp('8%'),width:wp('10%'),justifyContent:"center",alignItems:"flex-start"}}> 
            </View>
            </View>

            <View style={{height:hp('8%'),width:wp('100%'),paddingLeft:wp('5%'),paddingRight:wp('2%'),alignSelf:"center",backgroundColor:myThemeColors.mainbg,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                    <View style={{height:hp('8%'),width:wp('10%'),justifyContent:"center",alignItems:"center"}}>
                        <Image source={Calendar_Tile_Color_Light} style={{height:hp('6%'),width:hp('6%')}} resizeMode={"contain"} />
                    </View>
                    <View style={{height:hp('8%'),width:wp('71%'),justifyContent:"center",alignItems:"flex-start"}}>
                        <View style={{ flexDirection: 'column', padding: wp('5%'),}}>
                        <Text style={{ color:myThemeColors.secondfontcolor,fontSize:myFontSize.small.fontSize,fontFamily:myFontSize.small.fontFamily,lineHeight:myFontSize.small.lineHeight }}>Start Date & Time</Text>
                            <Text style={{ color:myThemeColors.mainfontcolor,fontSize:myFontSize.h2.fontSize,fontFamily:myFontSize.h2.fontFamily,lineHeight:myFontSize.h2.lineHeight }}>24 May 2021, 14:00</Text>
                        </View>                    
                    </View>
                <View style={{height:hp('8%'),width:wp('10%'),justifyContent:"center",alignItems:"flex-start"}}> 
                </View>
            </View>


            <View style={{height:hp('8%'),marginTop:hp('-1%'),width:wp('100%'),paddingLeft:wp('5%'),paddingRight:wp('2%'),alignSelf:"center",backgroundColor:myThemeColors.mainbg,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
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

            <View style={{height:hp('8%'),width:wp('100%'),marginTop:hp('-1%'),paddingLeft:wp('5%'),paddingRight:wp('2%'),alignSelf:"center",backgroundColor:myThemeColors.mainbg,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                <View style={{height:hp('8%'),width:wp('10%'),justifyContent:"center",alignItems:"center"}}>
                    <Image source={Coin_Tile_Color_Light} style={{height:hp('6%'),width:hp('6%')}} resizeMode={"contain"} />
                </View>
                <View style={{height:hp('8%'),width:wp('71%'),justifyContent:"center",alignItems:"flex-start"}}>
                    <View style={{ flexDirection: 'column', padding: wp('5%'),}}>
                    <Text style={{ color:myThemeColors.secondfontcolor,fontSize:myFontSize.small.fontSize,fontFamily:myFontSize.small.fontFamily,lineHeight:myFontSize.small.lineHeight }}>Wager</Text>
                        <Text style={{ color:myThemeColors.mainfontcolor,fontSize:myFontSize.h2.fontSize,fontFamily:myFontSize.h2.fontFamily,lineHeight:myFontSize.h2.lineHeight }}>100 coins</Text>
                    </View>                    
                </View>
            <View style={{height:hp('8%'),width:wp('10%'),justifyContent:"center",alignItems:"flex-start"}}> 
            </View>
            </View>

            <View style={{height:hp('8%'),width:wp('100%'),marginTop:hp('-1%'),paddingLeft:wp('5%'),paddingRight:wp('2%'),alignSelf:"center",backgroundColor:myThemeColors.mainbg,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                <View style={{height:hp('8%'),width:wp('10%'),justifyContent:"center",alignItems:"center"}}>
                    <Image source={Trophy_Tile_Color_Light} style={{height:hp('6%'),width:hp('6%')}} resizeMode={"contain"} />
                </View>
                <View style={{height:hp('8%'),width:wp('71%'),justifyContent:"center",alignItems:"flex-start"}}>
                    <View style={{ flexDirection: 'column', padding: wp('5%'),}}>
                    <Text style={{ color:myThemeColors.secondfontcolor,fontSize:myFontSize.small.fontSize,fontFamily:myFontSize.small.fontFamily,lineHeight:myFontSize.small.lineHeight }}>Reward</Text>
                        <Text style={{ color:myThemeColors.mainfontcolor,fontSize:myFontSize.h2.fontSize,fontFamily:myFontSize.h2.fontFamily,lineHeight:myFontSize.h2.lineHeight }}>500 coins</Text>
                    </View>                    
                </View>
            <View style={{height:hp('8%'),width:wp('10%'),justifyContent:"center",alignItems:"flex-start"}}> 
            </View>
            </View>

            <View style={{height:hp('4%'), width:wp('90%'), alignSelf:'center', justifyContent:'center'}}>
                <Text style={{fontSize:myFontSize.small.fontSize,fontFamily:myFontSize.small.fontFamily,lineHeight:myFontSize.small.lineHeight, color:myThemeColors.thirdfontcolor}}>Participants</Text>
            </View>
        
        <FlatList
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={ myChallengeDetailsData}
          style={{}}
          contentContainerStyle={{paddingBottom:hp('15%')}}
          keyExtractor={item => item.id}
          renderItem={({ item  }) => 
          <View style={{width:wp('90%'), height:hp('11%'),alignSelf:'center',alignSelf:"center", backgroundColor:myThemeColors.mainbg,marginBottom:hp('1%')}}>
              <View style={{width:wp('90%'), height:hp('9%'),flexDirection:'row',alignItems:"center",paddingVertical:hp('1%')}}>
                     <View style={{width:wp('15%'), height:hp('9%'),justifyContent:'space-around',alignItems:'center'}}>
                         <Image  source={item.image} style={{height:hp('7%'),width:hp('7%')}} resizeMode="contain" />
                    </View>
                    <View style={{width:wp('55%'), height:hp('9%'), paddingHorizontal:wp('2%'),justifyContent:'center', flexDirection:'column'}}>
                        <Text style={{fontSize: myFontSize.h2.fontSize, fontFamily:myFontSize.h2.fontFamily,lineHeight:myFontSize.small.lineHeight}}>{item.title}</Text>
                        <Text style={{fontSize:myFontSize.small.fontSize,fontFamily:myFontSize.small.fontFamily,lineHeight:myFontSize.small.lineHeight, color:myThemeColors.thirdfontcolor}}>{item.goal}</Text>
                     </View>
                     <View style={{width:wp('20%'), height:hp('9%'),flexDirection:"row",alignItems:"center",justifyContent:"space-between",}}>
                    <View style={{width:wp('5%')}}></View>
                     <Text style={{ fontSize:myFontSize.body.fontSize,fontFamily:myFontSize.body.fontFamily,lineHeight:myFontSize.body.lineHeight, color:myThemeColors.thirdfontcolor}}>{item.count}</Text>
                     {
                        item.icon_type == 1 ?
                        <TouchableOpacity>
                        <Image source = {Heart_Icon} style={{height:hp('7%'),width:wp('7%')}} resizeMode="contain"/>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity>
                        <Image source = {Heart_Color_Icon} style={{height:hp('7%'),width:wp('7%')}} resizeMode="contain"/>
                        </TouchableOpacity>                    }
                     </View>
               </View>
              
                   {
                       item.line_index == 1 ?
                       <View style={{height:hp('2%'),width:wp('88%'),alignSelf:"center",paddingHorizontal:wp('2%'),justifyContent:"center",}}>
                       <View style={{position:"absolute",height:hp('1%'),width:wp('88%'),borderRadius:hp('1%'),alignSelf:"center",backgroundColor:myThemeColors.bordercolor_gray}}></View>
                       <View style={{position:"absolute",height:hp('1%'),width:wp('30%'),borderRadius:hp('1%'),alignSelf:"flex-start",backgroundColor:myThemeColors.primary}}></View>
                       </View>
                       :
                       null
                   }
                   {
                       item.line_index == 2 ?
                       <View style={{height:hp('2%'),width:wp('88%'),alignSelf:"center",paddingHorizontal:wp('2%'),justifyContent:"center",}}>
                       <View style={{position:"absolute",height:hp('1%'),width:wp('88%'),borderRadius:hp('1%'),alignSelf:"center",backgroundColor:myThemeColors.bordercolor_gray}}></View>
                       <View style={{position:"absolute",height:hp('1%'),width:wp('10%'),borderRadius:hp('1%'),alignSelf:"flex-start",backgroundColor:myThemeColors.primary}}></View>
                       </View>
                       :
                       null
                   }
                    {
                       item.line_index == 3?
                       <View style={{height:hp('2%'),width:wp('88%'),alignSelf:"center",paddingHorizontal:wp('2%'),justifyContent:"center",}}>
                       <View style={{position:"absolute",height:hp('1%'),width:wp('88%'),borderRadius:hp('1%'),alignSelf:"center",backgroundColor:myThemeColors.bordercolor_gray}}></View>
                       <View style={{position:"absolute",height:hp('1%'),width:wp('60%'),borderRadius:hp('1%'),alignSelf:"flex-start",backgroundColor:myThemeColors.primary}}></View>
                       </View>
                       :
                       null
                   }
                    {
                       item.line_index == 4 ?
                       <View style={{height:hp('2%'),width:wp('88%'),alignSelf:"center",paddingHorizontal:wp('2%'),justifyContent:"center",}}>
                       <View style={{position:"absolute",height:hp('1%'),width:wp('88%'),borderRadius:hp('1%'),alignSelf:"center",backgroundColor:myThemeColors.bordercolor_gray}}></View>
                       <View style={{position:"absolute",height:hp('1%'),width:wp('80%'),borderRadius:hp('1%'),alignSelf:"flex-start",backgroundColor:myThemeColors.primary}}></View>
                       </View>
                       :
                       null
                   }
          </View>
    }

   
/>

            </ScrollView>
           <TouchableOpacity onPress={OnJoinClick} style={{backgroundColor:myThemeColors.primary,paddingVertical:hp('2%'),paddingHorizontal:wp('6%'),alignSelf:"center",borderRadius:hp('1%'),justifyContent:"center",alignItems:"center",position:"absolute",bottom:hp('5%'),zIndex:100}}>
                 <Text style={{fontSize:myFontSize.h3.fontSize,fontFamily:myFontSize.h3.fontFamily,lineHeight:myFontSize.h3.lineHeight,color:myThemeColors.white}}>Join</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ChallengeDetails;

const styles = StyleSheet.create({
    main_container : {
        width: wp('100%'),
        height: hp('100%')+ StatusBar.currentHeight,
        paddingTop: StatusBar.currentHeight,
        backgroundColor:myThemeColors.mainbg
    }
})