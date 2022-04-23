
import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    ActivityIndicator
  } from 'react-native';
  var { width, height } = Dimensions.get('window');


export const LoadingLayout=()=>{
    return  (<View style={styles.container}>
   <View style={[styles.overlay, {height:height}]} >
       <View style={{justifyContent: 'center',alignItems: 'center',flex:1,zIndex:100}}>
  <ActivityIndicator  size="large" color="#0000ff" />
  <Text>Loading</Text>
  </View>
    </View>
    </View>)

  }


  var styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F51CFF',
      zIndex:100,

    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
 
    overlay: {
      flex: 1,
      position: 'absolute',
      left: 0,
      top: 0,
      opacity: 0.9,
      backgroundColor: 'white',
      width: width,
      zIndex: 100 
    }  
  });