import {
    Text,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const Product = () => {

    return (
        <SafeAreaView className="h-full bg-white">

            <View className="px-5">
                <Text className="text-xs font-rubik text-black-100">
                    Good Morning
                </Text>
                <Text className="text-base font-rubik-medium text-black-300">
                    chintu
                </Text>
            </View>

        </SafeAreaView>
    );
};

export default Product;