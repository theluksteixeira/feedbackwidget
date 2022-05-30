import React from 'react';
import { Text, View } from 'react-native';
import { feedbackTypes } from '../../utils/feedbackTypes';
import { Copyright } from '../Copyright';
import { Option } from '../Option';

import { styles } from './styles';

export function Options() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Deixe seu feedback
      </Text>
      <View style={styles.options}>
        {
          Object.entries(feedbackTypes).map(([key, values]) => (
            <Option key={key} title={values.title} image={values.image}></Option>
          ))
        }
      </View>
      <Copyright />
    </View>
  );
}