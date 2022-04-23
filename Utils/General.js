import { Dimensions } from 'react-native';

export const getColumnNumber=(width)=>{
    
    return Dimensions.get('window').width/(width*8);
}