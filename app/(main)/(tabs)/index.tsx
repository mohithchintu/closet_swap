import images from "@/constants/images";
import React from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const users = [
    { id: "0", name: "Chintu", image: images.chintu },
    { id: "1", name: "Kavya", image: images.kavya },
    { id: "2", name: "Vineetha", image: images.vineetha },
    { id: "3", name: "Kousik", image: images.kousik },
    { id: "4", name: "Owais", image: images.owais },
    { id: "5", name: "Karen", image: images.karen }

];

const categories = [
    { id: "0", name: "Trending", image: images.trendy },
    { id: "1", name: "Boho Chic", image: images.boho },
    { id: "2", name: "Beach Vibes", image: images.beach },
    { id: "3", name: "Night Out", image: images.nightout },
    { id: "4", name: "Footwear", image: images.footwear },
    { id: "5", name: "Jewellery", image: images.jew },
    { id: "6", name: "Bags", image: images.purse },
];

const Main = () => {
    return (
        <SafeAreaView className="flex-1 bg-white">
            <FlatList
                data={categories}
                keyExtractor={(item) => item.id}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: "space-between", marginBottom: 16 }}
                contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 100 }}
                ListHeaderComponent={
                    <>
                        <FlatList
                            data={users}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item) => item.id}
                            nestedScrollEnabled
                            renderItem={({ item }) => (
                                <View className="items-center mx-2 mb-5">
                                    <View className="w-[65px] h-[65px] rounded-full border-2 border-blue-500 overflow-hidden">
                                        {item.image ? (
                                            <Image source={item.image} className="w-full h-full" />
                                        ) : (
                                            <View className="w-full h-full bg-white" />
                                        )}
                                    </View>
                                    <Text className="text-xs mt-1">{item.name}</Text>
                                </View>
                            )}
                        />
                    </>
                }
                renderItem={({ item }) => (
                    <TouchableOpacity className="w-[48%] rounded-lg overflow-hidden">
                        <Image source={item.image} className="w-full h-80" />
                        <View className="absolute inset-0 bg-black/30 flex items-center justify-center">
                            <Text className="text-white text-lg font-semibold">{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </SafeAreaView>
    );
};

export default Main;
