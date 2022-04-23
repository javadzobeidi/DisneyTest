/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React,{useState,useEffect} from 'react';
 import { useQuery } from 'react-query';
 import Icon from 'react-native-vector-icons/AntDesign';

 import {
   ScrollView,
  
   Image,
   FlatList,
   Text,
   Alert ,
   View,
 } from 'react-native';
 import {Button,LoadingLayout} from '../Component'
 import tw from '../Lib/tailwind';
 import {GetCharacterList} from '../Api'
 
 export const CharacterList = ({ navigation }) => {

    const [page,setPage]=useState(1);
    const [response,setReponse]=useState([]);
    const [error,setError]=useState(null);

 const {  isLoading, isSuccess ,data,
    isFetching,
    isRefetching,
    isPreviousData,
} = useQuery(['posts',page], ()=>GetCharacterList(page),{onSuccess ,cacheTime: 0 });





function onSuccess(result) {
  if (result.httpCode==200)
  {
    setReponse(result.response)
  }
  else
  {
    Alert.alert(
      result.message
   );

    //setError(result.message);
  }

}



   const renderItem = ({ item }) => (
     <CharacterListItem data={item} />
   );
 
     return (
        <View>
{(isLoading ||isRefetching)  && (
                   <LoadingLayout />
            )}

          {error && <View stlye={tw`flex`}><Text>{error}</Text>
          

          </View>}

{response &&  (
        <ScrollView  nestedScrollEnabled={true} style={tw`my-5 pl-4    `}>
       <Text style={tw`text-2xl text-black font-bold my-5 `}>List of Characters</Text>
      <View style={tw`w-full`} >
  
      <FlatList
      inverted
        horizontal={false}
      columnWrapperStyle={{flex:1, justifyContent: 'space-between'}}
   data={response.data}
   numColumns={2}
   keyExtractor={(_item, index) => index.toString()}
   renderItem={({ item }) => (
     <CharacterListItem
       data={item} navigation={navigation}
     />
   )}
 />
 <View style={tw`flex-1 flex-row pr-4`}>

  
 <Button className='flex-1 flex flex-row  justify-around  mr-4 h-16  ' disabled={response.previousPage=== undefined} onPress={()=>setPage(page-1)}  >
 <Icon name="arrowleft" size={25} color={'white'} style={tw``}/>
 <Text style={tw`font-bold text-lg	  text-white`}>Back</Text>
   </Button>

     <Button className='flex-1 flex  flex-row justify-around	    h-16' disabled={!response.nextPage} onPress={()=>setPage(page+1)}  >
 <Text style={tw`font-bold text-lg	  text-white`}>Next</Text>
 <Icon name="arrowright" size={25} color={'white'} style={tw``}/>
   </Button> 


 </View>
      </View>
      </ScrollView>
)}
      </View>
        
     );
 };


  const CharacterListItem = ({
    navigation,
    data
  }) => (
   <View style={tw`mr-4 flex-1  text-center items-center justify-center 	rounded-lg mb-4 	py-2 	 bg-background_primary ` } >
   <View style={tw`w-20 h-20 rounded-full bg-indigo-50`}>
       <Image
         style={tw`w-full h-full rounded-full`}
         source={{uri:data.imageUrl}}
         />
     </View>
          <Text style={tw`text-white pt-4`}>{data.name}</Text>
          <View style={tw`w-full px-4 pt-4`}>

     <Button onPress={()=>navigation.navigate('character',{id:data._id})} title='Show More' />
     </View>
        </View>
  )
 
 
  const RightArrow=()=>{
    return (
     <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
    )
  }
 
 