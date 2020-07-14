import React, {Component} from 'react';
import {StyleSheet, Button, View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import Movies from './movies';

class SignUp extends Component {
    // state = {
    //     userReq:{}
    // };
    //
    // onChangeText = (refer, value) => {
    //     const {userReq} = this.state;
    //     userReq[refer] = value;
    //     this.setState({userReq})
    // };

    render() {
        // console.debug(this.state.userReq);
        return (
            <View style={styles.container}>
                {/*<View style={styles.proImg}>*/}
                {/*    <Image source={require('../assets/farmer.png')} style={{width: 150, height: 150}} />*/}
                {/*</View>*/}

                <View style={styles.textVisible}>
                    <Text>User Name</Text>
                </View>
                <TextInput
                    placeholder="Enter your user name"
                    style={styles.input}
                    autoCapitalize="none"
                    onChangeText={val => this.onChangeText('userName', val)}
                />

                <View style={styles.textVisible}>
                    <Text>E-Mail Address</Text>
                </View>
                <TextInput
                    placeholder="Enter your email address"
                    style={styles.input}
                    autoCapitalize="none"
                    onChangeText={val => this.onChangeText('userName', val)}
                />

                <View style={styles.textVisible}>
                    <Text>Contact  Number</Text>
                </View>
                <TextInput
                    placeholder="Enter your contact number"
                    style={styles.input}
                    autoCapitalize="none"
                    onChangeText={val => this.onChangeText('userName', val)}
                />

                <View style={styles.textVisible}>
                    <Text>Password</Text>
                </View>
                <TextInput
                    placeholder="Enter the password"
                    style={styles.input}
                    autoCapitalize="none"
                    onChangeText={val => this.onChangeText('password', val)}
                />

                <TouchableOpacity style = {styles. buttonContainer}
                                  onPress={() => this.props.navigation.navigate('Success', { screenName: "Success" })}
                >
                    <Text style = {styles.textNext}>
                        Sign Up
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    input: {
        width: 350,
        height: 40,
        backgroundColor: '#FFFFFF',
        marginTop: 5,
        marginBottom: 15,
        padding: 8,
        color: 'black',
        borderRadius: 14,
        fontSize: 18,
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    proImg: {
        padding: '5%'
    },
    textVisible: {
        paddingRight: 250,
        fontSize: 28,
        fontWeight: 'bold',
    },
    buttonContainer : {
        bottom:20,
        borderWidth: 1,
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderColor: '#05C167',
        backgroundColor: '#05C167',
        marginTop: 70,
    },
    textNext: {
        fontFamily: 'serif',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    t1: {
        textAlign: 'left',
        fontSize: 20,
        fontFamily: 'product-sans',
        top: 10,
        padding: 10,
    },

    t2: {
        textAlign: 'left',
        fontSize: 20,
        fontFamily: 'product-sans',
        top: 20,
        paddingLeft: 30,
        padding: 10,
    },
    t3: {
        textAlign: 'left',
        fontSize: 20,
        fontFamily: 'product-sans',
        fontWeight: 'bold',
        top: 20,
        paddingLeft: 30,
        padding: 10,
        color: '#CE4646',
    },
});

export default SignUp;
