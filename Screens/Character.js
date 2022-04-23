/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  ScrollView,
  Image,
  View,
} from 'react-native';

import tw from '../Lib/tailwind';
import { Text ,Button} from '../Component'
import { useNavigation } from '@react-navigation/native';


export function Character({ props }) {
  const navigation = useNavigation();
console.log(props);
  return (
    <View style={tw`flex-1`}>
     
        <ScrollView style={tw` bg-background_primary mx-4 my-4`}>
      <View style={tw` mr-4 flex-col   mx-2 my-6 flex-row text-center  items-start  	rounded-lg mb-4 	py-6 	 `} >
        <View style={tw`flex-2 px-3    `}>
          <View style={tw`flex-row py-2 text-justify  flex-1 	`}>
            <Text className=' flex-1 font-bold'>Name:</Text>
            <Text className=' flex-1'>{props.name}</Text>
          </View>

          <View style={tw`flex-row py-2 text-justify  flex-1 	`}>
            <Text className=' flex-1 font-bold'>Films:</Text>
            <Text className='flex-1'>{props.films}</Text>
          </View>

          <View style={tw`flex-row py-2 text-justify  flex-1 	`}>
            <Text className=' flex-1 font-bold'>Short Films :</Text>
            <Text className='flex-1'>{props.shortFilms}</Text>
          </View>

          <View style={tw`flex-row py-2 text-justify  flex-1 	`}>
            <Text className=' flex-1 font-bold'>Video Games :</Text>
            <Text className='flex-1'>{props.videoGames}</Text>
          </View>

 
        </View>

        <View style={tw`flex-1 py-4  items-start	justify-start	`}>
          <View style={tw`  rounded-full bg-indigo-50`}>
            <Image
              style={tw`w-28 h-28 rounded-full`}
              source={{uri:props.imageUrl}}

            />
          </View>

        </View>

      </View>
      
      </ScrollView>
     

      <View style={tw`w-34  px-4 py-4  `}>
      
<Button className='flex flex-row 	' onPress={()=>navigation.navigate('characterList')} title='Back' >
<Icon name="arrowleft" size={20} color={'white'} style={tw`mx-4`}/>
  </Button>
  
</View>

     
      </View>

  );
};

