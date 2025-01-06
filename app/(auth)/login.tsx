import {
    Button,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as WebBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session/providers/google'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useState } from "react";

WebBrowser.maybeCompleteAuthSession();
const Login = () => {
    const [userInfo, setUserInfo] = useState(null);
    const [request, response, promptAsync] = Google.useAuthRequest({
        webClientId: process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID,
        androidClientId: process.env.EXPO_PUBLIC_GOOGLE_ANDROID_CLIENT_ID,
        iosClientId: process.env.EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID,
    })

    const handleToken = () => {
        console.log("ddd")
        if (response?.type === 'success') {
            const { authentication } = response;
            const token = authentication?.accessToken;
            console.log(token);
        }
    }

    useEffect(() => {
        handleToken();
    }, [response])

    return (
        <SafeAreaView className="h-full bg-white">
            <View className="px-5">
                <Text className="text-base">
                    Login Page
                </Text>
                <Button title="SignIn with Google" onPress={() => promptAsync} />
            </View>
        </SafeAreaView>
    );
};

export default Login;