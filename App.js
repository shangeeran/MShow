import React, { Component } from 'react';

import {Welcome} from './screens/welcome';
import Login from './screens/login';
import SignUp from './screens/signup';
import Success from './screens/success';
import Movies from './screens/movies';
import Account from './screens/account';
import OnBoard from './screens/onBoard'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


export default class App extends Component {

    createHomeStack = () =>
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{
                    title: "Welcome to MShow",
                    headerStyle: { backgroundColor: "white" },
                    headerTintColor: "#000000"
                }}
            />
            <Stack.Screen
                name="OnBoard"
                component={OnBoard}
                options={{
                    title: "xxxxxx",
                    headerStyle: { backgroundColor: "white" },
                    headerTintColor: "#000000"
                }}
            />
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    title: "xxxxxx",
                    headerStyle: { backgroundColor: "white" },
                    headerTintColor: "#000000"
                }}
            />
            <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{
                    title: "xxxxxx",
                    headerStyle: { backgroundColor: "white" },
                    headerTintColor: "#000000"
                }}
            />
            <Stack.Screen
                name="Success"
                component={Success}
                options={{
                    title: "xxxxxx",
                    headerStyle: { backgroundColor: "white" },
                    headerTintColor: "#000000"
                }}
            />
            <Stack.Screen
                name="Movies"
                component={Movies}
                options={{
                    title: "xxxxxx",
                    headerStyle: { backgroundColor: "white" },
                    headerTintColor: "#000000"
                }}
            />
            <Stack.Screen
                name="Account"
                component={Account}
                options={{
                    title: "xxxxxx",
                    headerStyle: { backgroundColor: "white" },
                    headerTintColor: "#000000"
                }}
            />


        </Stack.Navigator>



    render() {
        return (
            <NavigationContainer>
                {this.createHomeStack()}
            </NavigationContainer>
        );
    }
}
