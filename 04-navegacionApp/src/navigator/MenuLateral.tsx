import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView } from '@react-navigation/drawer';
import { Image, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { SettingsScreen } from '../screens/SettingsScreen';
import { styles } from '../theme/appTheme';
import { Tabs } from './Tabs';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

    const { width } = useWindowDimensions(); // 709 x 360

    return (
        <Drawer.Navigator
            drawerType={width >= 650 ? 'permanent' : 'front'}
            drawerContent={(props) => <MenuInterno {...props} />}
        >
            <Drawer.Screen name="Tabs" component={Tabs} />
            <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
        </Drawer.Navigator>
    );
};

const MenuInterno = ({ navigation }: DrawerContentComponentProps<DrawerContentOptions>) => {
    return (
        <DrawerContentScrollView>
            {/* Parte del avatar */}
            <View style={styles.avatarContainer}>
                <Image
                    source={{
                        uri: 'https://thumbs.dreamstime.com/z/omita-al-avatar-placeholder-de-la-foto-imagen-del-perfil-125707135.jpg'
                    }}
                    style={styles.avatar}
                />
            </View>
            {/* Opciones de menu */}
            <View style={styles.menuContainer}>
                <TouchableOpacity
                    style={{
                        ...styles.menuBoton,
                        flexDirection: 'row'
                    }}
                    onPress={() => navigation.navigate('Tabs')}
                >
                    <Icon name='compass-outline' size={20} color="black" />
                    <Text style={styles.menuTexto}> Navegacion Stack</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        ...styles.menuBoton,
                        flexDirection: 'row'
                    }}
                    onPress={() => navigation.navigate('SettingsScreen')}
                >
                    <Icon name='cog-outline' size={20} color="black" />
                    <Text style={styles.menuTexto}> Settings</Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    )
};