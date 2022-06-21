import React from 'react';
import { Text, View } from 'react-native';
import { feedbackTypes } from '../../utils/feedbackTypes';
import { Copyright } from '../Copyright';
import { Option } from '../Option';
import { FeedbackType } from '../Widget';

import { styles } from './styles';

interface Props {
  onFeedbackChanged: (FeedbackType: FeedbackType) => void;
}

export function Options({ onFeedbackChanged }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Deixe seu feedback
      </Text>
      <View style={styles.options}>
        {
          Object.entries(feedbackTypes).map(([key, values]) => (
            <Option key={key} title={values.title} image={values.image} onPress={() => onFeedbackChanged(key as FeedbackType )}></Option>
          ))
        }
      </View>
      <Copyright />
    </View>
  );
}