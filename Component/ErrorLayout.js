
import React from 'react'
import {
   
    Text,
    View,
  } from 'react-native';
  import tw from '../Lib/tailwind';
  export const ErrorLayout=({error})=>{
    return <View style={tw` my-4 flex flex-1 items-center	items-center	`}>
  <Text style={tw`text-red-500 font-extrabold`}>{error}</Text>
    </View>

  }