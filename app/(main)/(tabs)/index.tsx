import {
    Text,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const Main = () => {

    return (
        <SafeAreaView className="h-full bg-white">
            <View className="px-5">
                <Text className="text-base">
                    Main Page
                </Text>
            </View>
        </SafeAreaView>
    );
};

export default Main;