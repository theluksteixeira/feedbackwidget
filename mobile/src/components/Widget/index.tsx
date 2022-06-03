import React, { useRef, useState } from 'react';
import { ChatTeardropDots } from 'phosphor-react-native';
import BottomSheet from '@gorhom/bottom-sheet'
import { TouchableOpacity } from 'react-native';
import { theme } from '../../theme';

import { styles } from './styles';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { feedbackTypes } from '../../utils/feedbackTypes';
import { Options } from '../Options';
import { Form } from '../Form';
import { Success } from '../Success';

export type FeedbackType = keyof typeof feedbackTypes;

function Widget() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);
  
  const BottomSheetRef = useRef<BottomSheet>(null);

  function handleOpen() {
    BottomSheetRef.current?.expand();
  }

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={handleOpen}>
        <ChatTeardropDots size={24} weight="bold" color={theme.colors.text_on_brand_color} />
      </TouchableOpacity>

      <BottomSheet ref={BottomSheetRef} snapPoints={[1, 200]} backgroundStyle={styles.modal} handleIndicatorStyle={styles.indicator}>
        {
          feedbackSent ? <Success />
            :
            <>
              {feedbackType ? <Form feedbackType={feedbackType} /> : <Options />}
            </>
        }
      </BottomSheet>
    </>
  );
}

export default gestureHandlerRootHOC(Widget);