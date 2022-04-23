import React,{useState,useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CharacterList } from '../Screens/CharacterList';
import { Character } from '../Screens/Character';
import {GetCharacterList,GetCharacter} from '../Api'
import {LayoutRoute} from './LayoutRoute'
  
  const CharacterComponentScreen=(data)=>{
    return <LayoutRoute  apiCall={()=>GetCharacter(data.route.params.id)} Component={Character}  />
  }
  

const MainStack = createStackNavigator();
export const Main = () => (
    <MainStack.Navigator initialRouteName="characterList"
    screenOptions={
        {gestureDirection: 'horizontal',
            gestureEnabled: true,
            headerShown: false
        }
    }    
    >
                <MainStack.Screen name="characterList" component={CharacterList} />
                <MainStack.Screen name="character" component={CharacterComponentScreen} />

    </MainStack.Navigator>
);