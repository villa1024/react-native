import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from '../theme/appTheme';

export const Tab1Screen = () => {

    useEffect(() => {
        console.log('Tab1Screen');
    }, []);

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Tab1Screen</Text>
            <Text>
                <Icon name="airplane-outline" size={50} color="#900" />
            </Text>
        </View>
    );
};