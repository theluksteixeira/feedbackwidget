import { Camera, Trash } from 'phosphor-react-native';
import React from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { theme } from '../../theme';

import { styles } from './styles';

interface Props {
    screenshot: string | null;
    onTakeShot: () => void;
    onRemoveShot: () => void;
}


export function ScreenshotButton({ screenshot, onTakeShot, onRemoveShot }: Props) {
    return (
        <TouchableOpacity style={styles.container} onPress={screenshot ? onRemoveShot : onTakeShot}>
            {screenshot ?
                <Trash size={22} />
                :
                <Camera size={24} color={theme.colors.text_primary} weight="bold" />
            }
        </TouchableOpacity>
    );
}