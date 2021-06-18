import React from 'react';
import { Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { colores } from '../theme/appTheme';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

    const { top } = useSafeAreaInsets();

    return (
        <Tab.Navigator
            style={{
                paddingTop: top
            }}
            sceneContainerStyle={{
                backgroundColor: 'white'
            }}
            tabBarOptions={{
                pressColor: colores.primary,
                showIcon: true,
                indicatorStyle: {
                    backgroundColor: colores.primary
                },
                style: {
                    shadowColor: 'transparent',
                    elevation: 0,
                },
            }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, focused }) => {
                    let iconName: string = '';
                    switch (route.name) {
                        case 'ChatScreen':
                            iconName = 'chatbox-ellipses-outline'
                            break;
                        case 'ContactsScreen':
                            iconName = 'people-outline'
                            break;
                        case 'AlbumsScreen':
                            iconName = 'albums-outline'
                            break;
                    }
                    return <Icon name={iconName} size={20} color={color} />
                }
            })}
        >
            <Tab.Screen name="ChatScreen" component={ChatScreen} />
            <Tab.Screen name="ContactsScreen" component={ContactsScreen} />
            <Tab.Screen name="AlbumsScreen" component={AlbumsScreen} />
        </Tab.Navigator>
    );
};