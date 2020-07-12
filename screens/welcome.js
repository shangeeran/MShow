import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

export class Welcome extends Component {
    render() {
        return (
            <View>
                <Text style={styles.t1}>Welcome to</Text>
                <Text style={styles.t2}>MShow</Text>
                <TouchableHighlight
                    style={styles.b1}
                    onPress={() => this.props.navigation.navigate('Login', { screenName: "Login" })}
                >
                    <Text style={styles.b2}>Get Start</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    body: {

    },

    t1: {
        textAlign: 'left',
        fontSize: 40,
        fontFamily: 'product-sans',
        top: 80,
        padding: 10,
    },

    t2: {
        textAlign: 'left',
        fontSize: 60,
        fontFamily: 'product-sans',
        fontWeight: 'bold',
        top: 50,
        paddingLeft: 30,
        padding: 10,
        color: '#CE4646',


    },

    b1: {
        marginTop: 380,
        marginLeft: 220,
        // marginRight: 110,
        backgroundColor: '#05C167',
        borderRadius: 50,
        height: 50,
    },

    b2: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        margin: 10,
    },
});
