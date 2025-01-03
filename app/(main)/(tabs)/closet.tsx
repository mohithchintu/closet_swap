import {
    Text,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const Closet = () => {

    return (
        <SafeAreaView className="h-full bg-white">
            <View className="px-5">
                <Text className="text-base">
                    Closet Page
                </Text>
            </View>
        </SafeAreaView>
    );
};

export default Closet;