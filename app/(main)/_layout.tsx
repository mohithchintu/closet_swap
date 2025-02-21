import { Redirect, Stack, Tabs } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";


export default function TabLayout() {
    const { isSignedIn } = useAuth();

    if (!isSignedIn) {
        return <Redirect href="/auth" />;
    }

    //   if (isSignedIn && user?.unsafeMetadata?.onboarding_completed !== true) {
    //     return <Redirect href="/auth/complete-your-account" />;
    //   }

    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            {/* <Stack.Screen name="profile" options={{ headerShown: false }} /> */}
            {/* <Stack.Screen name="cart" options={{ headerShown: false }} /> */}
        </Stack>
    );
}