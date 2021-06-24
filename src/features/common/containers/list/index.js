import React, {useState} from 'react';
import {View, VirtualizedList, StyleSheet} from 'react-native';

import {Item} from '../../components/item';

export const List = ({data = [], refreshing, onPress, onRefresh}) => {
  const getItem = (data, index) => {
    return data[index];
  };
  const getItemCount = data => data.length;

  return (
    <View>
      <VirtualizedList
        data={data}
        contentContainerStyle={styles.list}
        renderItem={({item, index}) => (
          <Item
            key={`${item.id}-${index}`}
            id={item.id}
            name={item.name}
            username={item.username}
            onPress={onPress}
          />
        )}
        refreshing={refreshing}
        // ListFooterComponent={Distruction}
        onRefresh={onRefresh}
        keyExtractor={item => item.id}
        getItemCount={getItemCount}
        getItem={getItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flexGrow: 1,
  },
});
