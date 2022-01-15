import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";
import styling from '../styling'
import auth from '@react-native-firebase/auth';

const styles = StyleSheet.create(styling)

function Login() {
    const [LoginObj, setLoginObj] = useState({})

    const Login = () => {
        console.log(LoginObj)
        auth()
            .signInWithEmailAndPassword(LoginObj.email, LoginObj.password)
            .then((user) => {
                console.log('User account signed in!');
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }

                console.error(error);
            });
    }
    return <>
        <View >
            <Text style={styles.fs1}>Login</Text>
            
            <View style={[styles.py1, styles.px4]}>
                <TextInput onChangeText={(e) => setLoginObj({ ...LoginObj, email: e })} placeholder="email" style={styles.input} />
            </View>
            <View style={[styles.py1, styles.px4]}>
                <TextInput onChangeText={(e) => setLoginObj({ ...LoginObj, password: e })} placeholder="password" style={styles.input} />
            </View>
            <View style={[styles.py1, styles.px4]}>
                <TouchableOpacity onPress={Login} style={styles.btn}>
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    </>
}

export default Login