import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Image,
    TouchableOpacity,
    
    Text,
    useColorScheme,
    View,
  } from 'react-native';
import tw from '../Lib/tailwind';
import Icon from 'react-native-vector-icons/AntDesign';


export function Button({ children, onPress, title, className,disabled }) {
  return (
    <TouchableOpacity  onPress={onPress} disabled= {disabled?'disabled':''} activeOpacity={0.5}  style={tw` shadow-md h-12 w-full items-center justify-center rounded-lg
    ${disabled?'bg-btn_primary_disablecolor':'bg-btn_primary_color'}
    ${className}`}>
      {children}
      {title && 
        <Text style={tw`text-white text-center `}>{title}</Text>
      }
    </TouchableOpacity>
  )
}