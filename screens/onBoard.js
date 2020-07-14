import React, {Component} from 'react';
import {Image, View, StyleSheet, TouchableOpacity, Button} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

export default class OnBoard extends Component {
    render() {
        return (
            <Onboarding
                onDone={() => console.log('Message')}
                onDone={() => this.props.navigation.navigate('Login', { screenName: "Login" })}
                pages={[
                    {
                        backgroundColor: '#ffffff',
                        image: (
                            <Image source={require('../assets/pic1.png')} style={styles.img1} />
                        ),
                        title: 'Watch on any device',
                        subtitle: '\n',
                    },
                    {
                        backgroundColor: '#ffffff',
                        image: (
                            <Image source={require('../assets/pic2.png')} style={styles.img2} />
                        ),
                        title: '3, 2, 1... Download',
                        subtitle: '\n',
                    },
                    {
                        backgroundColor: '#ffffff',
                        image: (
                            <Image source={require('../assets/pic3.png')} style={styles.img3} />
                        ),
                        title: 'No annoying contracts',
                    },

                ]}

            />

        );
    }
}


const styles = StyleSheet.create({
    img1: {
        height: 400,
        width: 400,
        marginLeft: 100,
        marginBottom: 0,
    },

    img2: {
        height: 400,
        width: 400,
    },

    img3: {
        height: 300,
        width: 450,
        // marginRight: 100,
        // marginLeft: 50,
    },
    buttonContainer : {
        bottom:0,
        marginTop:120,
        marginBottom: 40,
        borderWidth: 1,
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderColor: '#05C167',
        backgroundColor: '#05C167',
    },
});

