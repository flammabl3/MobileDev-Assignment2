import { StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router'; 
import React from 'react';


export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="calgary"
                options={{
                    title: "Calgary",
                    tabBarLabel: "Calgary",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons 
                            name="city" 
                            size={size} 
                            color={color} 
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="edmonton"
                options={{
                    title: "Edmonton",
                    tabBarLabel: "Edmonton",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons 
                            name="office-building" 
                            size={size} 
                            color={color} 
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="welcome"
                options={{
                  href: null,
                }}
            />
        </Tabs>
    );
}
