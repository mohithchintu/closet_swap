import {
    Text,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const Register = () => {

    return (
        <SafeAreaView className="h-full bg-white">
            <View className="px-5">
                <Text className="text-base">
                    Register Page
                </Text>
            </View>
        </SafeAreaView>
    );
};

export default Register;