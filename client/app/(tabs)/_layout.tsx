import {Tabs} from 'expo-router';
import React from 'react';

import {TabBarIcon} from '@/components/navigation/TabBarIcon';
import {Colors} from '@/constants/Colors';
import {useColorScheme} from '@/hooks/useColorScheme';
import {MaterialIcons} from "@expo/vector-icons";

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                headerShown: false,
                tabBarItemStyle: {
                    flexDirection: 'column',
                    // alignItems: 'center',
                    // justifyContent: 'flex-start',
                    // height: 64,
                },
                tabBarStyle: {
                    height: 64,
                    paddingTop: 12,
                    paddingBottom: 6,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    marginTop: 6,
                },
            }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Map',
                    tabBarIcon: ({color, focused}) => (
                        <TabBarIcon name={focused ? 'map' : 'map-outline'} color={color}/>
                    ),
                }}
            />
            {/* Translate */}
            <Tabs.Screen
                name="translate"
                options={{
                    title: 'Translate',
                    tabBarIcon: ({color, focused}) => (
                        <MaterialIcons name={focused ? 'translate' : 'translate'} size={28} color={color}/>
                    ),
                }}
            />
            {/* Information */}
            <Tabs.Screen
                name="information"
                options={{
                    title: 'Information',
                    tabBarIcon: ({color, focused}) => (
                        <TabBarIcon name={focused ? 'information-circle' : 'information-circle-outline'} color={color}/>
                    ),
                }}
            />
            {/* Leaderboard */}
            <Tabs.Screen
                name="leaderboard"
                options={{
                    title: 'Leaderboard',

                    tabBarIcon: ({color, focused}) => (
                        <TabBarIcon name={focused ? 'bar-chart' : 'bar-chart-outline'} color={color}/>
                    ),
                }}
            />

            {/* Personalize */}
            <Tabs.Screen
                name="personalize"
                options={{
                    title: 'Personalize',
                    tabBarIcon: ({color, focused}) => (
                        <TabBarIcon name={focused ? 'person-circle' : 'person-circle-outline'} color={color}/>
                    ),
                }}
            />
        </Tabs>
    );
}
