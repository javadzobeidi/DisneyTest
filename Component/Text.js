import React from 'react';
import {
  Text as RText,
  StyleSheet,
} from 'react-native';
import tw from '../Lib/tailwind';

export  function Text(props) {
  return (
    <RText style={tw`${'text-white '+ props.className}`}>
      {props.children}
    </RText>
  );
}


