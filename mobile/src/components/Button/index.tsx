import { isLoading } from 'expo-font';
import React from 'react';
import { ActivityIndicator, Text, TouchableOpacityProps } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { theme } from '../../theme';

import { styles } from './styles';

interface Props extends TouchableOpacityProps {
    isLoading: boolean;
}

export function Button({ isLoading }: Props) {
    return (
        <TouchableOpacity style={styles.container}>
            {
                isLoading ? <ActivityIndicator color={theme.colors.text_on_brand_color} /> : <Text style={styles.title}> Enviar Feedback</Text>
            }
        </TouchableOpacity>
    );
}