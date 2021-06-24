import React, {useCallback, useState} from 'react';
import {View, StyleSheet, Alert, SafeAreaView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {useFocusEffect} from '@react-navigation/native';

import {getUsers} from '../../features/common/model/services';

import {List} from '../../features/common/containers/list';
import {useTimerUpdate} from '../../features/common/hooks/useTimerUpdate';
import {useTimerLimit} from '../../features/common/hooks/useTimerLimit';

export const MainScreen = ({navigation}) => {
  const [refreshing, setRefreshing] = useState(false);
  const {users} = useSelector(state => state.user);
  const [startPolling, stopPolling] = useTimerUpdate();
  const [startLimitTimer, stopTimerLimit, can] = useTimerLimit(15000);
  const dispatch = useDispatch();

  const fetchUser = useCallback(async () => {
    try {
      await dispatch(getUsers());
    } catch (e) {
      Alert.alert(e.message);
    }
    return () => Alert.alert('un focus');
  }, [dispatch]);

  useFocusEffect(
    useCallback(() => {
      startLimitTimer();
      return () => stopTimerLimit();
    }, [startLimitTimer, stopTimerLimit]),
  );

  useFocusEffect(
    useCallback(() => {
      fetchUser();
      startPolling(fetchUser, 60000);
      return () => stopPolling();
    }, [fetchUser, startPolling, stopPolling]),
  );

  const handlePress = id => {
    navigation.navigate('SecondScreen', {id});
  };

  const handleResetFetch = useCallback(async () => {
    try {
      if (can) {
        setRefreshing(true);
        stopPolling();
        stopTimerLimit();
        await fetchUser();
      }
    } finally {
      setRefreshing(false);
    }
  }, [can, fetchUser, stopPolling, stopTimerLimit]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <List
          data={users}
          onPress={handlePress}
          refreshing={refreshing}
          onRefresh={handleResetFetch}
        />
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    height: '100%',
  },
});
