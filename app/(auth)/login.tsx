import {
    Text,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const Login = () => {

    return (
        <SafeAreaView className="h-full bg-white">
            <View className="px-5">
                <Text className="text-base">
                    Login Page
                </Text>
            </View>
        </SafeAreaView>
    );
};

export default Login;