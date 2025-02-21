import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome, Feather } from "@expo/vector-icons";

const Cart = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Bohemian A-Line Dress",
            price: 45.99,
            image: "https://via.placeholder.com/80",
            quantity: 1,
            size: "S",
        },
        {
            id: 2,
            name: "Beach Co-Ord",
            price: 70.0,
            image: "https://via.placeholder.com/80",
            quantity: 1,
            size: "S",
        },
    ]);

    // Handle quantity change
    const updateQuantity = (id: number, type: any) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id
                    ? {
                        ...item,
                        quantity: type === "increase" ? item.quantity + 1 : Math.max(1, item.quantity - 1),
                    }
                    : item
            )
        );
    };

    // Handle item removal
    const removeItem = (id: number) => {
        setCartItems(cartItems.filter((item) => item.id !== id));
    };

    // Calculate total
    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const gst = (subtotal * 0.05).toFixed(2);
    const total = (subtotal + parseFloat(gst)).toFixed(2);

    return (
        <SafeAreaView className="h-full bg-white p-5">
            {/* Header */}
            <Text className="text-lg font-bold text-center pb-3">My Cart</Text>

            {/* Cart Items */}
            <FlatList
                data={cartItems}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View className="bg-gray-100 p-3 mb-3 rounded-lg flex-row items-center">
                        <Image source={{ uri: item.image }} className="w-16 h-16 rounded-md" />
                        <View className="ml-3 flex-1">
                            <Text className="text-base font-semibold">{item.name}</Text>
                            <Text className="text-sm text-gray-600">${item.price.toFixed(2)}</Text>

                            {/* Quantity & Size */}
                            <View className="flex-row items-center mt-2">
                                <Text className="text-sm">Quantity:</Text>
                                <TouchableOpacity onPress={() => updateQuantity(item.id, "decrease")} className="px-2">
                                    <Feather name="minus-circle" size={20} color="black" />
                                </TouchableOpacity>
                                <Text className="text-sm">{item.quantity}</Text>
                                <TouchableOpacity onPress={() => updateQuantity(item.id, "increase")} className="px-2">
                                    <Feather name="plus-circle" size={20} color="black" />
                                </TouchableOpacity>

                                <Text className="text-sm ml-5">Size:</Text>
                                <Text className="text-sm font-semibold ml-2">{item.size}</Text>
                            </View>
                        </View>

                        {/* Actions */}
                        <TouchableOpacity onPress={() => removeItem(item.id)}>
                            <FontAwesome name="trash" size={20} color="black" />
                        </TouchableOpacity>
                    </View>
                )}
            />

            {/* Price Summary */}
            <View className="border p-3 rounded-lg mt-3">
                {cartItems.map((item) => (
                    <View key={item.id} className="flex-row justify-between pb-1">
                        <Text>{item.name}</Text>
                        <Text>${(item.price * item.quantity).toFixed(2)}</Text>
                    </View>
                ))}
                <View className="flex-row justify-between border-t mt-2 pt-2">
                    <Text>GST</Text>
                    <Text>${gst}</Text>
                </View>
                <View className="flex-row justify-between mt-2 font-bold">
                    <Text>Total</Text>
                    <Text>${total}</Text>
                </View>
            </View>

            {/* Checkout Button */}
            <TouchableOpacity className="bg-blue-500 p-3 rounded-lg mt-5">
                <Text className="text-center text-white font-bold">Proceed To Checkout</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default Cart;
