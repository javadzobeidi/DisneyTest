import React from 'react';
import renderer from 'react-test-renderer';
import {Character} from '../Screens/Character'
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();

jest.useFakeTimers();
const mockedNavigate = jest.fn();

const mockedProps=`{
  "_id": 6,
  "films": [
    "Alice in Wonderland (2010 film)",
    "Alice Through the Looking Glass"
  ],
  "shortFilms": [
    "Alice in Wonderland (2010 film)",
    "Alice Through the Looking Glass"
  ],
  "tvShows": [
    "Alice in Wonderland (2010 film)",
    "Alice Through the Looking Glass"
  ],
  "videoGames": [
    "Alice in Wonderland (2010 film)",
    "Alice Through the Looking Glass"
  ],
  "parkAttractions": [
    
  ],
  "allies": [
    
  ],
  "enemies": [
    
  ],
  "name": "'Olu Mel",
  "imageUrl": "https://static.wikia.nocookie.net/disney/images/6/61/Olu_main.png",
  "url": "https://api.disneyapi.dev/characters/6"
}`



jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

test('renders correctly', () => {
  const tree = renderer.create(
    <QueryClientProvider client={queryClient}>
    <Character props={mockedProps} />
</QueryClientProvider>
).toJSON();
  expect(tree).toMatchSnapshot();
});
