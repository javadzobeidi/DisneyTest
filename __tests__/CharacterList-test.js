import React from 'react';
import renderer from 'react-test-renderer';
import {CharacterList} from '../Screens/CharacterList'
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();

jest.useFakeTimers();

test('renders correctly', () => {
  const tree = renderer.create(
    <QueryClientProvider client={queryClient}>
    <CharacterList />
</QueryClientProvider>
).toJSON();
  expect(tree).toMatchSnapshot();
});