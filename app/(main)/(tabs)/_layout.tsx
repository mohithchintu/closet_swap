import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import tabs from '@/constants/tabs'

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
                    borderTopColor: '#8B5DFF1A',
                    borderTopWidth: 1,
                    minHeight: 70
                }
            }}
        >
            <Tabs.Screen
                name='index'
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon icon={tabs.search} focused={focused} title="Home" />
                    )
                }}
            />
            <Tabs.Screen
                name='search'
                options={{
                    title: 'search',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon icon={tabs.search} focused={focused} title="Search" />
                    )
                }}
            />
            <Tabs.Screen
                name='explore'
                options={{
                    title: 'Explore',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon icon={tabs.explore} focused={focused} title="Explore" />
                    )
                }}
            />
            <Tabs.Screen
                name='closet'
                options={{
                    title: 'closet',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon icon={tabs.closet} focused={focused} title="Closet" />
                    )
                }}
            />
            <Tabs.Screen
                name='swap'
                options={{
                    title: 'swap',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon icon={tabs.swap} focused={focused} title="Swap" />
                    )
                }}
            />
        </Tabs>
    )
}

export default TabsLayout