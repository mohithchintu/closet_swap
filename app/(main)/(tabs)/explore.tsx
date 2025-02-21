import {
    Text,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const Explore = () => {

    return (
        <SafeAreaView className="h-full bg-white">
            <View className="px-5">
                <Text className="text-base">
                    Explore Page yui
                </Text>
            </View>
        </SafeAreaView>
    );
};

export default Explore;