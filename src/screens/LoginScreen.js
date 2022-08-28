import React, { useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native'
import { Input, Icon } from '@rneui/themed';
import { Button } from '@rneui/base';
import auth from '@react-native-firebase/auth';
import Wrapper from '../components/Wrapper';

const LoginScreen = ({ navigation }) => {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signIn, setSignIn] = useState(true);


    const handleSignInRegisterOption = () => {
        setSignIn(!signIn)
    };

    const handleCreateAccount = () => {
        if (!email || !password) {
            return alert('One or more fields are required')
        }
        setLoading(true);
        auth()
            .createUserWithEmailAndPassword(email, password)
            ?.then((res) => {
                navigation.navigate('Home');
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    alert('That email address is already in use!');
                }
                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }
            })
            .finally(() => {
                setLoading(false);
                setEmail('');
                setPassword('');
            })
    };


    const handleSignIn = () => {
        if (!email || !password) {
            return alert('One or more fields are required')
        }
        setLoading(true);
        auth()
            .signInWithEmailAndPassword(email, password)
            ?.then((res) => {
                navigation.navigate('HomeStack');
            })
            .catch(error => {
                if (error.code === 'auth/user-not-found') {
                    alert('user not found');
                }
                if (error.code === 'auth/invalid-email') {
                    alert('That email address is invalid!');
                }
            })
            .finally(() => {
                setLoading(false)
                setEmail('');
                setPassword('')
            })
    };



    return (
        <Wrapper loading={loading}>
            <SafeAreaView>
                <Input
                    placeholder="Enter Email"
                    value={email}
                    onChangeText={value => setEmail(value)}
                />
                <Input
                    placeholder="Enter Password"
                    value={password}
                    onChangeText={value => setPassword(value)}
                />
                {signIn &&
                    <View>
                        <Button title="Sign In" onPress={!loading && handleSignIn} />
                        <TouchableOpacity onPress={handleSignInRegisterOption} style={styles.additionalStep}>
                            <Text style={styles.helpText}>Don't Have An Account?</Text>
                            <Text style={styles.actionText}>Register Now</Text>
                        </TouchableOpacity>
                    </View>
                }
                {!signIn &&
                    <View>
                        <Button title="Register" onPress={!loading && handleCreateAccount} />
                        <TouchableOpacity onPress={handleSignInRegisterOption} style={styles.additionalStep}>
                            <Text style={styles.helpText} >Already Have An Account?</Text>
                            <Text style={styles.actionText}>Sign in</Text>
                        </TouchableOpacity>
                    </View>
                }

            </SafeAreaView>
        </Wrapper>
    )
}

const styles = StyleSheet.create({
    additionalStep: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    helpText: {
        color: '#000',
        fontWeight: 'bold',
        paddingHorizontal: 5
    },
    actionText: {
        color: '#1018A3',
        fontWeight: 'bold',
        paddingHorizontal: 5
    }
})

export default LoginScreen