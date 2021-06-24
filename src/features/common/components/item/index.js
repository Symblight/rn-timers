import React from 'react';

import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

export const Item = ({name, username, onPress, id}) => {
  const handlePress = () => {
    onPress(id);
  };
  return (
    <TouchableHighlight onPress={handlePress}>
      <View style={styles.container}>
        <Text>{name}</Text>
        <Text>{username}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: 100,
    width: '100%',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
});

Item.defaultProps = {
  name: '',
  username: '',
  id: null,
  onPress: () => null,
};
