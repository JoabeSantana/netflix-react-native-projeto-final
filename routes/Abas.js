import React from 'react';
import { View, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, AntDesign, MaterialIcons, Feather } from '@expo/vector-icons';
import Home from '../screen/Home';
import More from '../screen/More';

const Tab = createBottomTabNavigator();

const Abas = (props) => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name='home' size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Busca"
                component={Home}
                options={{
                    tabBarLabel: 'Busca',
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name='search1' size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Em Breve"
                component={Home}
                options={{
                    tabBarLabel: 'Em Breve',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name='perm-media' size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Downloads"
                component={Home}
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
                    tabBarLabel: 'More',
                    tabBarIcon: ({ color, size }) => (
                        <Feather name='menu' size={size} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
export default Abas;