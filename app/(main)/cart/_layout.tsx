import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Stack, useRouter } from 'expo-router';
import icons from '@/constants/icons';

const Layout = () => {
    const router = useRouter();

    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#ffffff'
                },
                headerTitleAlign: 'left',
                headerTitle: () => (
                    <TouchableOpacity onPress={() => router.replace('/')}>
                        <Text className='text-gray-400 font-semibold text-3xl'>Closet Swap</Text>
                    </TouchableOpacity>
                ),
                headerRight: () => (
                    <View className='flex flex-row gap-4 mr-4'>
                        <TouchableOpacity onPress={() => console.log('search')}>
                            <Image source={icons.search} className='w-6 h-6' />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => router.replace('/(main)/cart')}>
                            <Image source={icons.cart} className='w-6 h-6' />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => router.replace('/(main)/profile')}>
                            <Image source={icons.profile} className='w-6 h-6' />
                        </TouchableOpacity>
                    </View>
                ),
            }}
        />
    );
};

export default Layout;