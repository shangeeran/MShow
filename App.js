import React, { Component } from 'react';

import Splash from './screens/splash';
import Welcome from './screens/welcome';
import Login from './screens/login';
import SignUp from './screens/signup';
import Success from './screens/success';
import Movies from './screens/movies';
import Account from './screens/account';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


export default class App extends Component {

    createHomeStack = () =>
        <Stack.Navigator>
            <Stack.Screen
                name="SplashScreen"
                component={Splash}
                options={{
                    title: "Welcome to MShow",
                    headerStyle: { backgroundColor: "white" },
                    headerTintColor: "#000000"
                }}
            />
            <Stack.Screen
                name="WelcomeScreen"
                component={Welcome}
                options={{
                    title: "xxxxxx",
                    headerStyle: { backgroundColor: "white" },
                    headerTintColor: "#000000"
                }}
            />

            <Stack.Screen
                name="LoginScreen"
                component={Login}
                options={{
                    title: "xxxxxx",
                    headerStyle: { backgroundColor: "white" },
                    headerTintColor: "#000000"
                }}
            />
            <Stack.Screen
                name="SignUpScreen"
                component={SignUp}
                options={{
                    title: "xxxxxx",
                    headerStyle: { backgroundColor: "white" },
                    headerTintColor: "#000000"
                }}
            />
            <Stack.Screen
                name="SuccessScreen"
                component={Success}
                options={{
                    title: "xxxxxx",
                    headerStyle: { backgroundColor: "white" },
                    headerTintColor: "#000000"
                }}
            />
            <Stack.Screen
                name="MoviesScreen"
                component={Movies}
                options={{
                    title: "xxxxxx",
                    headerStyle: { backgroundColor: "white" },
                    headerTintColor: "#000000"
                }}
            />
            <Stack.Screen
                name="AccountScreen"
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
