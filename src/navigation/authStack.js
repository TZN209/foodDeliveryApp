import React from 'react';

import { createNativeStackNavigator, TransitionPresets } from '@react-navigation/native-stack';
import SignInWelcomeScreen from '../screens/authScreens/SignInWelcomeScreen';
import SignInScreen from '../screens/authScreens/SignInScreen';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="SignInWelcomeScreen"
                component={SignInWelcomeScreen}
                options={{
                    headerShown: false,
                    // ...TransitionPresets.ModalTransition,
                    // ...TransitionPresets.RevealFromBottomAndroid
                }}
            />

            <Stack.Screen
                name="SignInScreen"
                component={SignInScreen}
                options={{
                    headerShown: false,
                    // ...TransitionPresets.ModalTransition,
                    // ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
        </Stack.Navigator>
    );
}
