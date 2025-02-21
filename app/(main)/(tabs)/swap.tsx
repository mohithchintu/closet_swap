import React, { useState } from "react";
import { Text, View, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-deck-swiper";
import images from "@/constants/images";

interface CardData {
    name: string;
    img: any;
}

const db: CardData[] = [
    { name: "Image1", img: images.beach },
    { name: "Image2", img: images.boho },
    { name: "Image3", img: images.closet },
    { name: "Image4", img: images.footwear },
    { name: "Image5", img: images.nightout },
    { name: "Image1", img: images.beach },
    { name: "Image2", img: images.boho },
    { name: "Image3", img: images.closet },
    { name: "Image4", img: images.footwear },
    { name: "Image5", img: images.nightout }
];

const Swipe: React.FC = () => {
    const [lastDirection, setLastDirection] = useState<string | null>(null);

    const swiped = (direction: string, index: number) => {
        console.log(`Swiped ${direction} on ${db[index].name}`);
        setLastDirection(direction);
    };

    return (
        <SafeAreaView className="flex-1 bg-white">

            <View className="flex-1 justify-center items-center">
                <Swiper
                    cards={db}
                    renderCard={(character) => (
                        <View className="w-72 h-96 rounded-2xl shadow-lg bg-white overflow-hidden mx-auto">
                            <ImageBackground className="w-full h-full justify-end p-3" source={character.img}>
                                <Text className="text-white text-lg font-bold">{character.name}</Text>
                            </ImageBackground>
                        </View>
                    )}
                    onSwiped={(index) => swiped("swipe", index)}
                    onSwipedAll={() => console.log("No more cards!")}
                    backgroundColor="transparent"
                    stackSize={3}
                    cardIndex={0}
                    containerStyle={{ alignSelf: "center" }}
                />
            </View>

            {lastDirection && (
                <Text className="text-center text-base text-gray-600 mb-6">You swiped {lastDirection}</Text>
            )}
        </SafeAreaView>
    );
};

export default Swipe;
