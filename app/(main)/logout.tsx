import { SignedIn, useClerk } from "@clerk/clerk-expo";
import {
    Button,
    Text,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const Logout = () => {
    const { signOut } = useClerk();
    return (
        <SafeAreaView className="h-full bg-white">
            <View className="px-5">
                <Text className="text-base">
                    Main Page
                </Text>
                <SignedIn>
                    <Text>Signed in</Text>
                    <Button title="Sign out" onPress={() => signOut()} />
                </SignedIn>
            </View>
        </SafeAreaView>
    );
};

export default Logout;
