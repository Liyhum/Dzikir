import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import HomeScreen from '../screens/HomeScreen';
import Dzikir from '../screens/LinksScreen';
import DzikirUn from '../screens/DzikirUnlimited';
import Dzikir2 from '../screens/Dzikir2';
import AntDesign from '@expo/vector-icons/AntDesign'
import {Image} from 'react-native'
const Top = createMaterialTopTabNavigator();
const Stack = createStackNavigator();
const Bottom = createBottomTabNavigator();
function Tops(){
    return(
        <Top.Navigator tabBarOptions={{
            tabStyle:{marginTop:25,backgroundColor: '#8DA05E',},
            labelStyle:{color:'white'},
            indicatorContainerStyle:{borderColor:'white'},
            indicatorStyle:{backgroundColor:'white'}
            }}>
            <Top.Screen name="33" component={HomeScreen}/>
            <Top.Screen name="Unlimited" component={DzikirUn}/>
        </Top.Navigator>
    )
}
function Top2(){
    return(
        <Top.Navigator tabBarOptions={{
            tabStyle:{marginTop:25,backgroundColor: '#8DA05E',},
            labelStyle:{color:'white'},
            indicatorContainerStyle:{borderColor:'white'},
            indicatorStyle:{backgroundColor:'white'},
            }}
            >
            <Top.Screen name="Pagi" component={Dzikir}/>
            <Top.Screen name="Petang" component={Dzikir2}/>
        </Top.Navigator>
    )
}
function Home() {
    return(
        <NavigationContainer>
        <Bottom.Navigator tabBarOptions={{
            showLabel:false,
            showIcon:true,
            tabStyle:{
                backgroundColor: "#8DA05E",
                },
            }}
            >
            <Bottom.Screen 
            name="tasbih" 
            component={Tops} 
            options={{
                tabBarIcon: ()=>(
                <Image 
                    source={require('../assets/images/pray.png')}
                    style={{height:20,width:20,tintColor:'white'}}
                    />
            )}}/>
            <Bottom.Screen 
            name="Dzikir" 
            component={Top2}
            options={{
                tabBarIcon:()=>(
                    <Image 
                    source={require('../assets/images/isha.png')}
                    style={{height:20,width:20,tintColor:'white'}}
                    />
                ),
                
            }}
            />
        </Bottom.Navigator>
        </NavigationContainer>
    )
}
function All (){
    return(
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Dzikir" component={Tops}/>
            <Stack.Screen name="Pagi Petang" component={Home}/>
        </Stack.Navigator>
    </NavigationContainer>
    )
}
export default Home