import React, { useRef } from 'react';
import { ChatTeardropDots } from 'phosphor-react-native';
import BottomSheet from '@gorhom/bottom-sheet'
import { TouchableOpacity } from 'react-native';
import { theme } from '../../theme';

import { styles } from './styles';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

function Widget() {

  const BottomSheetRef = useRef<BottomSheet>(null);

  function handleOpen() {
    BottomSheetRef.current?.expand();
  }

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={handleOpen}>
        <ChatTeardropDots size={24} weight="bold" color={theme.colors.text_on_brand_color} />
      </TouchableOpacity>

      <BottomSheet ref={BottomSheetRef} snapPoints={[1, 200]} backgroundStyle={styles.modal} >

      </BottomSheet>
    </>
  );
}

export default gestureHandlerRootHOC(Widget);