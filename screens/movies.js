import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Success from './success';

class Movies extends Component {
    render() {
        return (
            // Logout function
            <View>
                <TouchableOpacity style = {styles. buttonContainer}
                                  onPress={() => this.props.navigation.navigate('Success', { screenName: "Success" })}
                >
                    <Text style = {styles.textNext}>
                        Log out
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonContainer : {
        borderWidth: 1,
        borderRadius: 30,
        paddingVertical: 8,
        paddingHorizontal: 40,
        borderColor: '#05C167',
        backgroundColor: '#05C167',
        marginTop: 20,
        marginLeft: 260,
    },
    textNext: {
        fontFamily: 'serif',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
});

export default Movies;


