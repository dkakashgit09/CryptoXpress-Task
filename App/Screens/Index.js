import React, {useState} from 'react';
import {Alert, Image, StyleSheet, View} from 'react-native';
import * as yup from 'yup';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import AppScreen from '../Components/AppScreen';
import AppText from '../Components/AppText';
import AppForm from '../Components/formComponents/AppForm';
import AppFormField from '../Components/formComponents/AppFormField';
import AppFormSubmitButton from '../Components/formComponents/AppFormSubmitButton';
import defaultStyles from '../Config/defaultStyles';

const Index = ({navigation}) => {
  const Schema = yup.object().shape({
    trnxValue: yup.number().required(),
    address: yup.string().required(),
  });

  const handleSubmit = values => {
    // calling Backend
    Alert.alert(
      values.trnxValue +
        ' had send successfully to the address - ' +
        values.address,
    );
  };

  return (
    <AppScreen>
      <View style={styles.screen}>
        <AppText style={styles.heading}>Welcome To TestNet Wallet</AppText>
        <View style={styles.headingUnder} />

        <AppForm
          initialValues={{trnxValue: '', address: ''}}
          validationSchema={Schema}
          onSubmit={values => handleSubmit(values)}>
          <AppFormField
            name="trnxValue"
            startText="$"
            placeholder="TRNX Value"
            preCheck={true}
            keyboardType="number-pad"
            maxLength={10}
          />
          <View style={{marginVertical: hp(2)}} />
          <AppFormField
            name="address"
            placeholder="Target Address"
            preCheck={false}
            maxLength={100}
          />
          <AppFormSubmitButton style={styles.button} title="Send TRNX" />
        </AppForm>
      </View>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: wp(7),
  },
  logo: {
    height: wp(20),
    marginTop: hp(2),
    width: wp(20),
  },
  heading: {
    color: defaultStyles.colors.black,
    fontWeight: '500',
    letterSpacing: 1.5,
    marginTop: hp(3.5),
  },
  headingUnder: {
    height: hp(0.8),
    width: wp(9),
    backgroundColor: defaultStyles.colors.primary,
    marginTop: hp(1),
    borderRadius: 4,
    marginBottom: hp(4),
  },
  button: {
    bottom: hp(2),
    left: wp(7),
    position: 'absolute',
  },
});

export default Index;
