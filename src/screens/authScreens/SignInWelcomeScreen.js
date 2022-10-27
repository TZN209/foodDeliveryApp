import React from 'react';

import { View, Text, StyleSheet, Image } from 'react-native';
import { colors, parameters } from '../../global/styles';

import Swiper from 'react-native-swiper';

import { Button } from '@rneui/themed';

export default function SignInWelcomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            {/* Title */}
            <View
                style={{
                    flex: 3,
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

            {/* Carousel */}
            <View style={{ flex: 4, justifyContent: 'center' }}>
                <Swiper autoplay={true}>
                    <View style={styles.slide1}>
                        <Image
                            source={require('../../assets/signIn/Carousel1.jpeg')}
                            style={{ height: '100%', width: '100%' }}
                        />
                    </View>

                    <View style={styles.slide2}>
                        <Image
                            source={require('../../assets/signIn/Carousel2.jpeg')}
                            style={{ height: '100%', width: '100%' }}
                        />
                    </View>

                    <View style={styles.slide3}>
                        <Image
                            source={require('../../assets/signIn/Carousel3.jpeg')}
                            style={{ height: '100%', width: '100%' }}
                        />
                    </View>

                    <View style={styles.slide3}>
                        <Image
                            source={require('../../assets/signIn/Carousel4.jpeg')}
                            style={{ height: '100%', width: '100%' }}
                        />
                    </View>
                </Swiper>
            </View>

            {/* Button */}
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
