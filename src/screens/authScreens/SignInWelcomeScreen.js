import React, { useState, useRef } from 'react';

import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { colors, parameters, title } from '../../global/styles';

import Swiper from 'react-native-swiper';

import { Icon, Button, SocialIcon } from '@rneui/themed';

export default function SignInWelcomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <View
                style={{
                    flex: 1,
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    paddingTop: 20,
                }}
            >
                <Text
                    style={{
                        fontSize: 26,
                        color: colors.buttons,
                        fontWeight: 'bold',
                    }}
                >
                    DISCOVER RESTAURANTS
                </Text>
                <Text
                    style={{
                        fontSize: 26,
                        color: colors.buttons,
                        fontWeight: 'bold',
                    }}
                >
                    IN YOUR AREA
                </Text>
            </View>

            <View style={{ flex: 4, justifyContent: 'center' }}>
                <Swiper autoplay={true}>
                    <View style={styles.slide1}>
                        <Image
                            source={{
                                uri: 'https://images.unsplash.com/photo-1512152272829-e3139592d56f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
                            }}
                            style={{ height: '100%', width: '100%' }}
                        />
                    </View>

                    <View style={styles.slide2}>
                        <Image
                            source={{
                                uri: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                            }}
                            style={{ height: '100%', width: '100%' }}
                        />
                    </View>

                    <View style={styles.slide3}>
                        <Image
                            source={{
                                uri: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=481&q=80',
                            }}
                            style={{ height: '100%', width: '100%' }}
                        />
                    </View>

                    <View style={styles.slide3}>
                        <Image
                            source={{
                                uri: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&q=80',
                            }}
                            style={{ height: '100%', width: '100%' }}
                        />
                    </View>
                </Swiper>
            </View>

            <View style={{ flex: 4, justifyContent: 'flex-end', marginBottom: 20 }}>
                <View style={{ marginHorizontal: 20, marginTop: 30 }}>
                    <Button
                        title="SIGN IN"
                        buttonStyle={parameters.styledButton}
                        titleStyle={parameters.buttonTitle}
                        onPress={() => navigation.navigate('SignInScreen')}
                    />
                </View>

                <View style={{ marginHorizontal: 20, marginTop: 30 }}>
                    <Button
                        title="Create an account"
                        buttonStyle={styles.createButton}
                        titleStyle={styles.createButtonTitle}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    slide1: {
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },

    createButton: {
        backgroundColor: 'white',
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#ff8c52',
        height: 50,
        paddingHorizontal: 20,
        borderColor: colors.buttons,
    },

    createButtonTitle: {
        color: colors.grey1,
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -3,
    },
});
