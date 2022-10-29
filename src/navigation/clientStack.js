import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from '../screens/SearchScreen';
import SearchResultScreen from '../screens/SearchResultScreen';

const ClientSearch = createNativeStackNavigator();

export function ClientStack() {
    return (
        <ClientSearch.Navigator>
            <ClientSearch.Screen
                name="SearchScreen"
                component={SearchScreen}
                options={() => ({
                    headerShown: false,
                })}
            />
            <ClientSearch.Screen
                name="SearchResultScreen"
                component={SearchResultScreen}
                options={() => ({
                    headerShown: false,
                })}
            />
        </ClientSearch.Navigator>
    );
}