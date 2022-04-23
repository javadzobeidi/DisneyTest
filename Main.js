import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CharacterList } from '../Screens/Posts';
import { Post } from '../Screens/Post';
const MainStack = createStackNavigator();
export const Main = () => (
    <MainStack.Navigator>
        <MainStack.Screen name="Home" component={CharacterList} />
    </MainStack.Navigator>
);