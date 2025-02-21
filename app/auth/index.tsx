import {
    ActivityIndicator,
    Alert,
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as WebBrowser from 'expo-web-browser'
import { useCallback, useEffect, useState } from "react";
import { useSSO, useUser } from "@clerk/clerk-expo";
import icons from "@/constants/icons";
import { Redirect, router } from "expo-router";
import images from "@/constants/images";


export const useWarmUpBrowser = () => {
    useEffect(() => {
        // Preloads the browser for Android devices to reduce authentication load time
        // See: https://docs.expo.dev/guides/authentication/#improving-user-experience
        void WebBrowser.warmUpAsync()
        return () => {
            // Cleanup: closes browser when component unmounts
            void WebBrowser.coolDownAsync()
        }
    }, [])
}

WebBrowser.maybeCompleteAuthSession()


const SignIn = () => {
    useWarmUpBrowser()
    const { startSSOFlow } = useSSO();
    const { isSignedIn, isLoaded } = useUser();
    const [loadingProvider, setLoadingProvider] = useState<string | null>(null);

    if (isLoaded && isSignedIn) return <Redirect href="/" />

    const handleLogin = useCallback(async (provider: 'oauth_google' | 'oauth_apple' | 'oauth_facebook') => {
        try {
            setLoadingProvider(provider);
            const { createdSessionId, setActive } = await startSSOFlow({
                strategy: provider,
            })

            if (createdSessionId) {
                // console.log("Session created", createdSessionId);
                setActive!({ session: createdSessionId })
                setLoadingProvider(null);
                router.push('/')

            } else {
                Alert.alert("Error", "Failed to login")
                setLoadingProvider(null);
            }
        } catch (err) {
            // See https://clerk.com/docs/custom-flows/error-handling
            console.error(JSON.stringify(err, null, 2))
            Alert.alert("Error", "An unexpected error occurred");
            setLoadingProvider(null);
        }
    }, [startSSOFlow, router])
    return (
        <SafeAreaView className='bg-slate-100 h-screen'>
            <ScrollView contentContainerClassName='h-full'>
                <Image source={images.closet} className='w-full h-1/2' resizeMode='contain' />
                <View className='px-10'>
                    <Text className="text-base text-center uppercase text-black">Welcome to Closet Swap</Text>
                    <Text className="text-3xl text-center text-black mt-2">Create your own {'\n'}
                        <Text className='font-medium'>Closet</Text>
                    </Text>
                    <Text className='text-lg text-black text-center mt-12'>Login to Closet Swap</Text>

                    {/* Google Login */}
                    <TouchableOpacity
                        onPress={() => handleLogin("oauth_google")}
                        className="bg-white border border-zinc-100 shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5"
                        disabled={loadingProvider === "oauth_google"}
                    >
                        {loadingProvider === "oauth_google" ? (
                            <ActivityIndicator size="small" color="black" className="ml-2" />
                        ) : (
                            <View className="flex flex-row items-center justify-center">
                                <Image source={icons.google} className="w-5 h-5" resizeMode="contain" />
                                <Text className="text-lg text-black ml-2">Continue with GOOGLE</Text>
                            </View>
                        )}
                    </TouchableOpacity>

                    {/* Apple Login */}
                    <TouchableOpacity
                        onPress={() => handleLogin("oauth_apple")}
                        className="bg-white border border-zinc-100 shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5"
                        disabled={loadingProvider === "oauth_apple"}
                    >
                        {loadingProvider === "oauth_apple" ? (
                            <ActivityIndicator size="small" color="black" className="ml-2" />
                        ) : (
                            <View className="flex flex-row items-center justify-center">
                                <Image source={icons.apple} className="w-6 h-6" resizeMode="contain" />
                                <Text className="text-lg text-black ml-2">Continue with APPLE</Text>
                            </View>
                        )}
                    </TouchableOpacity>

                    {/* Facebook Login */}
                    <TouchableOpacity
                        onPress={() => handleLogin("oauth_facebook")}
                        className="bg-white border border-zinc-100 shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5"
                        disabled={loadingProvider === "oauth_facebook"}
                    >
                        {loadingProvider === "oauth_facebook" ? (
                            <ActivityIndicator size="small" color="black" className="ml-2" />
                        ) : (
                            <View className="flex flex-row items-center justify-center">
                                <Image source={icons.facebook} className="w-6 h-6" resizeMode="contain" />
                                <Text className="text-lg text-black ml-2">Continue with FACEBOOK</Text>
                            </View>
                        )}
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView >
    );
};

export default SignIn;
