import React from 'react';
import {StyleSheet, SafeAreaView, Platform, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default function AppScreen({children, style}) {
  return (
    <>
      <SafeAreaView style={[styles.screen, style]}>
        {children}
        <View style={styles.backColor} />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backColor: {
    width: wp(45),
    position: 'absolute',
    right: 0,
    top: 0,
    height: hp(100),
    backgroundColor: '#F5F8FD',
    zIndex: -10,
  },
});
