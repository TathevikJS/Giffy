import React, { useState } from 'react';
import {Image} from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from '../Screens/HomeScreen/Home';
import Add from '../Screens/AddScreen/Add';
import Reg from '../Screens/RegScreen/Reg';

const Tab = createMaterialBottomTabNavigator();

const  Navigation = ({navigation}) => {

    const [col, setCol] = useState('yellow')
    const colors = ['yellow', 'green', 'red']

    const rand = colors[Math.floor(Math.random() * colors.length)]

    const randCol = () => {
        setCol(rand)
    }


  return (
    <Tab.Navigator
    initialRouteName="Home"
    activeColor={col}
    barStyle={{backgroundColor: col}}
    labeled={false}
    
    >
      <Tab.Screen 
      
      name="Home" 
      children={() => <Home randCol={randCol} col={col} rand={rand} colors={colors}/>} 
      options={{
          tabBarIcon: () => <Image style={{height: 35, width: 35}}  source={require('../../assets/navigation/home.png')}/>
      }}
       />
      <Tab.Screen 
      name="Add" 
      component={Add} 
      options={{
        tabBarIcon: () => <Image style={{height: 35, width: 35}} source={require('../../assets/navigation/add.png')}/>
    }}
    />
      <Tab.Screen 
      name="Reg" 
      component={Reg} 
      options={{
        tabBarIcon: () => <Image style={{height: 35, width: 35}} source={require('../../assets/navigation/reg.png')}/>
    }}
    />
    </Tab.Navigator>
  );
}

 
export default Navigation;