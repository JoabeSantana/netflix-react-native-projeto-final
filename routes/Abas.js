import React from 'react';
import { View, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, AntDesign, MaterialIcons, Feather } from '@expo/vector-icons';
import Home from '../screen/Home';
import Search from '../screen/Search';
import Soon from '../screen/Soon';
import Downloads from '../screen/Downloads';
import More from '../screen/More';
import { translate } from '../languages/utils';

const Tab = createBottomTabNavigator();

const Abas = (props) => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: translate('Home'),
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name='home' size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Busca"
                component={Search}
                options={{
                    tabBarLabel: translate('Search'),
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name='search1' size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Em Breve"
                component={Soon}
                options={{
                    tabBarLabel: translate('Soon'),
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name='perm-media' size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Downloads"
                component={Downloads}
                options={{
                    tabBarLabel: 'Downloads',
                    tabBarIcon: ({ color, size }) => (
                        <Feather name='download' size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="More"
                component={More}
                options={{
                    tabBarLabel: translate('More'),
                    tabBarIcon: ({ color, size }) => (
                        <Feather name='menu' size={size} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
export default Abas;