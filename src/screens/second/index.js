import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';

export const SecondScreen = ({route}) => {
  const {id} = route.params;
  const user = useSelector(state => {
    const {users} = state.user;
    return users.find(user => user.id === id);
  });

  useEffect(() => {}, []);
  return (
    <View>
      <Text>{user?.username}</Text>
      <Text>{user?.name}</Text>
    </View>
  );
};

export default SecondScreen;
