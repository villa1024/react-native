import { useNavigation } from '@react-navigation/core';
import React from 'react';

import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

export const Pagina2Screen = () => {

    const navigator = useNavigation();

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pagina2Screen</Text>
            <Button
                title="Ir pagina 3"
                onPress={() => navigator.navigate('Pagina3Screen')}
            />
        </View>
    );
};