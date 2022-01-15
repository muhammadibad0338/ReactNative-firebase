import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";
import styling from '../styling'
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const reference = database().ref('/users/');

const styles = StyleSheet.create(styling)

function SignUp() {
    const [signUpObj, setSignUpObj] = useState({})

    const signUp = () => {
        console.log(signUpObj)
        auth()
            .createUserWithEmailAndPassword(signUpObj.email, signUpObj.password)
            .then((user) => {
                console.log('User account created & signed in!');
                signUpObj.uid = user.user.uid
                reference.child(signUpObj.uid).set(signUpObj).then(() => {
                    console.log('Data Saved in Database Succesfully')
                })
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
            <Text style={styles.fs1}>Sign Up</Text>
            <View style={[styles.py1, styles.px4]}>
                <TextInput onChangeText={(e) => setSignUpObj({ ...signUpObj, name: e })} placeholder="Name" style={styles.input} />
            </View>
            <View style={[styles.py1, styles.px4]}>
                <TextInput onChangeText={(e) => setSignUpObj({ ...signUpObj, email: e })} placeholder="email" style={styles.input} />
            </View>
            <View style={[styles.py1, styles.px4]}>
                <TextInput onChangeText={(e) => setSignUpObj({ ...signUpObj, password: e })} placeholder="password" style={styles.input} />
            </View>
            <View style={[styles.py1, styles.px4]}>
                <TouchableOpacity onPress={signUp} style={styles.btn}>
                    <Text>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    </>
}

export default SignUp