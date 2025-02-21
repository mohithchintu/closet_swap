import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { router, Tabs } from 'expo-router'
import tabs from '@/constants/tabs'
import icons from '@/constants/icons';

interface TabIconType {
    focused: boolean;
    icon: any;
    title: string;
}

const TabIcon = ({ focused, icon, title }: TabIconType) => (
    <View className='flex-1 mt-3 flex flex-col items-center'>
        <Image source={icon} resizeMode='contain' className='size-6' />
        <Text className="text-xs w-full text-center mt-1">
            {title}
        </Text>
    </View>
)

const TabsLayout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: 'white',
                    position: 'absolute',
                    borderTopColor: '#fff000',
                    borderTopWidth: 1,
                    minHeight: 70,
                },
                headerStyle: {
                    backgroundColor: '#ffffff',
                    elevation: 0,
                    shadowOpacity: 0,
                },
                headerTitleAlign: 'left',
                headerTitle: () => (
                    <View>
                        <Text className='text-gray-400 font-semibold text-3xl'>Closet Swap</Text>
                    </View>
                ),
                headerRight: () => (
                    <View className='flex flex-row gap-4 mr-4'>
                        <TouchableOpacity onPress={() => (console.log('search'))}>
                            <Image source={icons.search} className='w-6 h-6' />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => router.replace('/(main)/cart')}>
                            <Image source={icons.cart} className='w-6 h-6' />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => router.replace('/(main)/profile')}>
                            <Image source={icons.profile} className='w-6 h-6' />
                        </TouchableOpacity>
                    </View >
                ),
            }}
        >
            <Tabs.Screen
                name='index'
                options={{
                    title: 'Home',
                    headerShown: true,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon icon={tabs.home} focused={focused} title="Home" />
                    )
                }}
            />
            <Tabs.Screen
                name='search'
                options={{
                    title: 'Search',
                    headerShown: true,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon icon={tabs.search} focused={focused} title="Search" />
                    )
                }}
            />
            <Tabs.Screen
                name='explore'
                options={{
                    title: 'Explore',
                    headerShown: true,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon icon={tabs.explore} focused={focused} title="Explore" />
                    )
                }}
            />
            <Tabs.Screen
                name='closet'
                options={{
                    title: 'Closet',
                    headerShown: true,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon icon={tabs.closet} focused={focused} title="Closet" />
                    )
                }}
            />
            <Tabs.Screen
                name='swap'
                options={{
                    title: 'Swap',
                    headerShown: true,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon icon={tabs.swap} focused={focused} title="Swap" />
                    )
                }}
            />
        </Tabs >
    )
}

export default TabsLayout;
