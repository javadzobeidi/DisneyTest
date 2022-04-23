/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React,{useState} from 'react';
 import {getColumnNumber} from './Utils/General'
 import { useQuery } from 'react-query';
 import axios from 'axios';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Image,
   TouchableOpacity,
   ListView  ,
 FlatList,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
 import {Button} from './Component/Button'
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 import tw from './Lib/tailwind';
 const data=
 {
   "data": [
     {
       "_id":308,
       "films":["Tangled","Tangled: Before Ever After"],
       "shortFilms":["Tangled Ever After","Hare Peace"],
       "tvShows":["Once Upon a Time","Tangled: The Series"],
       "videoGames":["Disney Princess Enchanting Storybooks","Hidden Worlds","Disney Crossy Road","Kingdom Hearts III"],
       "parkAttractions":["Celebrate the Magic","Jingle Bell, Jingle BAM!"],
       "allies":[],
       "enemies":[],
       "sourceUrl":"https://disney.fandom.com/wiki/Queen_Arianna",
       "name":"Queen Arianna",
       "imageUrl":"https://static.wikia.nocookie.net/disney/images/1/15/Arianna_Tangled.jpg/revision/latest?cb=20160715191802",
       "createdAt":"2021-04-12T01:33:34.458Z",
       "updatedAt":"2021-04-12T01:33:34.458Z",
       "url":"https://api.disneyapi.dev/characters/308",
       "__v":0
     },
     {
       "_id":308,
       "films":["Tangled","Tangled: Before Ever After"],
       "shortFilms":["Tangled Ever After","Hare Peace"],
       "tvShows":["Once Upon a Time","Tangled: The Series"],
       "videoGames":["Disney Princess Enchanting Storybooks","Hidden Worlds","Disney Crossy Road","Kingdom Hearts III"],
       "parkAttractions":["Celebrate the Magic","Jingle Bell, Jingle BAM!"],
       "allies":[],
       "enemies":[],
       "sourceUrl":"https://disney.fandom.com/wiki/Queen_Arianna",
       "name":"Queen Arianna",
       "imageUrl":"https://static.wikia.nocookie.net/disney/images/1/15/Arianna_Tangled.jpg/revision/latest?cb=20160715191802",
       "createdAt":"2021-04-12T01:33:34.458Z",
       "updatedAt":"2021-04-12T01:33:34.458Z",
       "url":"https://api.disneyapi.dev/characters/308",
       "__v":0
     },
     {
       "_id":308,
       "films":["Tangled","Tangled: Before Ever After"],
       "shortFilms":["Tangled Ever After","Hare Peace"],
       "tvShows":["Once Upon a Time","Tangled: The Series"],
       "videoGames":["Disney Princess Enchanting Storybooks","Hidden Worlds","Disney Crossy Road","Kingdom Hearts III"],
       "parkAttractions":["Celebrate the Magic","Jingle Bell, Jingle BAM!"],
       "allies":[],
       "enemies":[],
       "sourceUrl":"https://disney.fandom.com/wiki/Queen_Arianna",
       "name":"Queen Arianna",
       "imageUrl":"https://static.wikia.nocookie.net/disney/images/1/15/Arianna_Tangled.jpg/revision/latest?cb=20160715191802",
       "createdAt":"2021-04-12T01:33:34.458Z",
       "updatedAt":"2021-04-12T01:33:34.458Z",
       "url":"https://api.disneyapi.dev/characters/308",
       "__v":0
     }, {
       "_id":308,
       "films":["Tangled","Tangled: Before Ever After"],
       "shortFilms":["Tangled Ever After","Hare Peace"],
       "tvShows":["Once Upon a Time","Tangled: The Series"],
       "videoGames":["Disney Princess Enchanting Storybooks","Hidden Worlds","Disney Crossy Road","Kingdom Hearts III"],
       "parkAttractions":["Celebrate the Magic","Jingle Bell, Jingle BAM!"],
       "allies":[],
       "enemies":[],
       "sourceUrl":"https://disney.fandom.com/wiki/Queen_Arianna",
       "name":"Queen Arianna",
       "imageUrl":"https://static.wikia.nocookie.net/disney/images/1/15/Arianna_Tangled.jpg/revision/latest?cb=20160715191802",
       "createdAt":"2021-04-12T01:33:34.458Z",
       "updatedAt":"2021-04-12T01:33:34.458Z",
       "url":"https://api.disneyapi.dev/characters/308",
       "__v":0
     }
     , {
       "_id":308,
       "films":["Tangled","Tangled: Before Ever After"],
       "shortFilms":["Tangled Ever After","Hare Peace"],
       "tvShows":["Once Upon a Time","Tangled: The Series"],
       "videoGames":["Disney Princess Enchanting Storybooks","Hidden Worlds","Disney Crossy Road","Kingdom Hearts III"],
       "parkAttractions":["Celebrate the Magic","Jingle Bell, Jingle BAM!"],
       "allies":[],
       "enemies":[],
       "sourceUrl":"https://disney.fandom.com/wiki/Queen_Arianna",
       "name":"Queen Arianna",
       "imageUrl":"https://static.wikia.nocookie.net/disney/images/1/15/Arianna_Tangled.jpg/revision/latest?cb=20160715191802",
       "createdAt":"2021-04-12T01:33:34.458Z",
       "updatedAt":"2021-04-12T01:33:34.458Z",
       "url":"https://api.disneyapi.dev/characters/308",
       "__v":0
     },
      {
       "_id":308,
       "films":["Tangled","Tangled: Before Ever After"],
       "shortFilms":["Tangled Ever After","Hare Peace"],
       "tvShows":["Once Upon a Time","Tangled: The Series"],
       "videoGames":["Disney Princess Enchanting Storybooks","Hidden Worlds","Disney Crossy Road","Kingdom Hearts III"],
       "parkAttractions":["Celebrate the Magic","Jingle Bell, Jingle BAM!"],
       "allies":[],
       "enemies":[],
       "sourceUrl":"https://disney.fandom.com/wiki/Queen_Arianna",
       "name":"Queen Arianna",
       "imageUrl":"https://static.wikia.nocookie.net/disney/images/1/15/Arianna_Tangled.jpg/revision/latest?cb=20160715191802",
       "createdAt":"2021-04-12T01:33:34.458Z",
       "updatedAt":"2021-04-12T01:33:34.458Z",
       "url":"https://api.disneyapi.dev/characters/308",
       "__v":0
     } , {
       "_id":308,
       "films":["Tangled","Tangled: Before Ever After"],
       "shortFilms":["Tangled Ever After","Hare Peace"],
       "tvShows":["Once Upon a Time","Tangled: The Series"],
       "videoGames":["Disney Princess Enchanting Storybooks","Hidden Worlds","Disney Crossy Road","Kingdom Hearts III"],
       "parkAttractions":["Celebrate the Magic","Jingle Bell, Jingle BAM!"],
       "allies":[],
       "enemies":[],
       "sourceUrl":"https://disney.fandom.com/wiki/Queen_Arianna",
       "name":"Queen Arianna",
       "imageUrl":"https://static.wikia.nocookie.net/disney/images/1/15/Arianna_Tangled.jpg/revision/latest?cb=20160715191802",
       "createdAt":"2021-04-12T01:33:34.458Z",
       "updatedAt":"2021-04-12T01:33:34.458Z",
       "url":"https://api.disneyapi.dev/characters/308",
       "__v":0
     } , {
       "_id":308,
       "films":["Tangled","Tangled: Before Ever After"],
       "shortFilms":["Tangled Ever After","Hare Peace"],
       "tvShows":["Once Upon a Time","Tangled: The Series"],
       "videoGames":["Disney Princess Enchanting Storybooks","Hidden Worlds","Disney Crossy Road","Kingdom Hearts III"],
       "parkAttractions":["Celebrate the Magic","Jingle Bell, Jingle BAM!"],
       "allies":[],
       "enemies":[],
       "sourceUrl":"https://disney.fandom.com/wiki/Queen_Arianna",
       "name":"Queen Arianna",
       "imageUrl":"https://static.wikia.nocookie.net/disney/images/1/15/Arianna_Tangled.jpg/revision/latest?cb=20160715191802",
       "createdAt":"2021-04-12T01:33:34.458Z",
       "updatedAt":"2021-04-12T01:33:34.458Z",
       "url":"https://api.disneyapi.dev/characters/308",
       "__v":0
     } , {
       "_id":308,
       "films":["Tangled","Tangled: Before Ever After"],
       "shortFilms":["Tangled Ever After","Hare Peace"],
       "tvShows":["Once Upon a Time","Tangled: The Series"],
       "videoGames":["Disney Princess Enchanting Storybooks","Hidden Worlds","Disney Crossy Road","Kingdom Hearts III"],
       "parkAttractions":["Celebrate the Magic","Jingle Bell, Jingle BAM!"],
       "allies":[],
       "enemies":[],
       "sourceUrl":"https://disney.fandom.com/wiki/Queen_Arianna",
       "name":"Queen Arianna",
       "imageUrl":"https://static.wikia.nocookie.net/disney/images/1/15/Arianna_Tangled.jpg/revision/latest?cb=20160715191802",
       "createdAt":"2021-04-12T01:33:34.458Z",
       "updatedAt":"2021-04-12T01:33:34.458Z",
       "url":"https://api.disneyapi.dev/characters/308",
       "__v":0
     } , {
       "_id":308,
       "films":["Tangled","Tangled: Before Ever After"],
       "shortFilms":["Tangled Ever After","Hare Peace"],
       "tvShows":["Once Upon a Time","Tangled: The Series"],
       "videoGames":["Disney Princess Enchanting Storybooks","Hidden Worlds","Disney Crossy Road","Kingdom Hearts III"],
       "parkAttractions":["Celebrate the Magic","Jingle Bell, Jingle BAM!"],
       "allies":[],
       "enemies":[],
       "sourceUrl":"https://disney.fandom.com/wiki/Queen_Arianna",
       "name":"Queen Arianna",
       "imageUrl":"https://static.wikia.nocookie.net/disney/images/1/15/Arianna_Tangled.jpg/revision/latest?cb=20160715191802",
       "createdAt":"2021-04-12T01:33:34.458Z",
       "updatedAt":"2021-04-12T01:33:34.458Z",
       "url":"https://api.disneyapi.dev/characters/308",
       "__v":0
     } , {
       "_id":308,
       "films":["Tangled","Tangled: Before Ever After"],
       "shortFilms":["Tangled Ever After","Hare Peace"],
       "tvShows":["Once Upon a Time","Tangled: The Series"],
       "videoGames":["Disney Princess Enchanting Storybooks","Hidden Worlds","Disney Crossy Road","Kingdom Hearts III"],
       "parkAttractions":["Celebrate the Magic","Jingle Bell, Jingle BAM!"],
       "allies":[],
       "enemies":[],
       "sourceUrl":"https://disney.fandom.com/wiki/Queen_Arianna",
       "name":"Queen Arianna",
       "imageUrl":"https://static.wikia.nocookie.net/disney/images/1/15/Arianna_Tangled.jpg/revision/latest?cb=20160715191802",
       "createdAt":"2021-04-12T01:33:34.458Z",
       "updatedAt":"2021-04-12T01:33:34.458Z",
       "url":"https://api.disneyapi.dev/characters/308",
       "__v":0
     }
   ],
   "count": 50,
   "previousPage": "https://api.disneyapi.dev/characters?page=3",
   "nextPage": "https://api.disneyapi.dev/characters?page=5",
 }
 
 
 const CharacterList = () => {
 
   const fetchPosts = async () => {
     const { data } = await axios.get('https://api.disneyapi.dev/characters');
     return data;
   }
   const usePosts = () => useQuery('posts', fetchPosts);
 
 
   const { data, isLoading, isSuccess } = usePosts();
 
 
   const renderItem = ({ item }) => (
     <CharacterListItem data={item} />
   );
 
 
 
     return (
         <SafeAreaView style={tw`bg-white h-full   `} >
       <ScrollView style={tw`my-5 px-5  `}>
         
       <Text style={tw`text-2xl text-black font-bold my-5 `}>List of Characters</Text>
      <View style={tw`w-full`} >
  
      <FlatList
        horizontal={false}
      columnWrapperStyle={{flex:1, justifyContent: 'space-between'}}
   data={data.data}
   numColumns={2}
   keyExtractor={(_item, index) => index.toString()}
   renderItem={({ item }) => (
     <CharacterListItem
       data={item}
     />
   )}
 />
 <View style={tw`flex-1 flex-row`}>
 <Button className='flex-1 mr-4 h-16' title='Show 1' />
 <Button className='flex-1 mr-4 h-16' title='Show 2' />
 </View>
      </View>
      </ScrollView>
         </SafeAreaView>
     );
 };
 
 
 
 
  const CharacterListItem = ({
    data
  }) => (
   <View style={tw`mr-4 flex-1  text-center items-center justify-center 	rounded-lg mb-4 	py-2 	 bg-background_primary ` } >
   <View style={tw`w-20 h-20 rounded-full bg-indigo-50`}>
       <Image
         style={tw`w-28 h-28 rounded-full`}
         source={data.imageUrl }
       />
     </View>
          <Text style={tw`text-white pt-4`}>{data.name}</Text>
          <View style={tw`w-full px-4 pt-4`}>
     <Button title='Show More' />
     </View>
        </View>
  )
 
 
  const RightArrow=()=>{
    return (
     <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
    )
  }
 
 export default CharacterList;
 