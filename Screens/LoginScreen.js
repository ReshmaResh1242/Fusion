import React, { useRef } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import OTPTextInput from 'react-native-otp-textinput';

// --------- Component Imports ---------------
import { COLORS } from '../Constants/colors.js'

const LoginScreen = ({ navigation }) => {

    const otpInput = useRef(null)
    const [number, onChangeNumber] = React.useState('');
    const [otp, setOtp] = React.useState(false);

    return (

        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <Image
                    style={{ with: '100%', height: '100%' }}
                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZl4YFMq4BD4CsERV0jTYEXx40lvbt-UJDB15cG-O5_VXGy2aoIQYGKS9DMA&s' }}
                />
            </View>
            <View style={{ flex: 1, paddingHorizontal: 16, marginTop: 20 }}>
                {!otp
                    ?
                    <>
                        <Text style={styles.signTextHead}>Log In </Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeNumber}
                            value={number}
                            placeholder="Enter phone number"
                            placeholderTextColor={COLORS.borderColor}
                            keyboardType="numeric"
                        />
                        <TouchableOpacity
                            style={{ height: 50, backgroundColor: COLORS.primColor3, borderRadius: 10, alignItems: 'center', justifyContent: 'center', marginTop: 10 }}
                            onPress={() => {
                                setOtp(true)
                                setTimeout(() => {
                                    otpInput?.current?.setValue("1234")
                                }, 1500);
                                setTimeout(() => {
                                    navigation.navigate('HomeScreen')
                                }, 3000);
                            }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: COLORS.primaryColor }}>Login</Text>
                        </TouchableOpacity>
                    </> : null}
                {otp
                    ? <View style={{ alignItems: 'center', paddingTop: 30 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: COLORS.borderColor, paddingBottom: 10 }}>Enter OTP</Text>
                        <OTPTextInput
                            ref={otpInput}
                            textInputStyle={{ borderWidth: 1 }} />
                        <Text style={{ fontSize: 14, color: COLORS.borderColor, paddingTop: 2 }}>Didnt get otp?  Resend</Text>
                    </View> : null}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primaryColor,
    },
    input: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10
    },
    signTextHead: {
        fontSize: 28,
        fontWeight: 'bold',
        color: COLORS.borderColor,
        paddingLeft: 10,
        marginBottom: 20,
        textAlign: 'center'
    }
});

export default LoginScreen;