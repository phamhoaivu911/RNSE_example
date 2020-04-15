import {TextInput} from 'react-native';
import React from 'react';

const SearchInput = props => (
  <TextInput
    {...props}
    placeholder="Search"
    style={{width: '80%', height: 40, borderWidth: 1, borderColor: 'red'}}
  />
);

export default SearchInput;
