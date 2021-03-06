import React, {Component} from 'react';
import {StyleSheet, Button, View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import { StackNavigator } from 'react-navigation';
export default class Login extends Component {
    // state = {
    //     userReq:{}
    // };
    //
    // onChangeText = (refer, value) => {
    //     const {userReq} = this.state;
    //     userReq[refer] = value;
    //     this.setState({userReq})
    // };
    static navigationOptions =
    {
       title: 'LoginActivity',
    };

    constructor(props) {
 
        super(props)
     
        this.state = {
     
          UserEmail: '',
          UserPassword: ''
     
        }
     
      }

      UserLoginFunction = () =>{
 
        const { UserEmail }  = this.state ;
        const { UserPassword }  = this.state ;
        
        
       fetch('https://localhost/User_Login.php', {
         method: 'POST',
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
         },
         body: JSON.stringify({
        
           email: UserEmail,
        
           password: UserPassword
        
         })
        
       }).then((response) => response.json())
             .then((responseJson) => {
        
               // If server response message same as Data Matched
              if(responseJson === 'Data Matched')
               {
        
                   //Then open Profile activity and send user email to profile activity.
                   this.props.navigation.navigate('Movies');
        
               }
               else{
        
                 Alert.alert(responseJson);
               }
        
             }).catch((error) => {
               console.error(error);
             });
        
        
         }

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
                        <Text>Password</Text>
                    </View>
                    <TextInput
                        placeholder="Enter the password"
                        style={styles.input}
                        autoCapitalize="none"
                        onChangeText={val => this.onChangeText('password', val)}
                    />

                    <TouchableOpacity style = {styles. buttonContainer}
                                      onPress={this.UserLoginFunction}
                    >
                        <Text style = {styles.textNext}>
                            Sign In
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.t1}>Need help?</Text>
                    <Text style={styles.t2}>New to
                        <Text style={styles.t3}> MShow</Text>?
                        <Text style={{color: 'blue'}} onPress={() => this.props.navigation.navigate('SignUp', { screenName: "SignUp" })}> Sign up</Text> Now.</Text>

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