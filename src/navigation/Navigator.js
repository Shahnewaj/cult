import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import JobListScreen from '../screens/JobListScreen';
import AddJobScreen from '../screens/AddJobScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const AuthStack = () => (
    <Stack.Navigator >
        <Stack.Screen name="Authentication" component={LoginScreen} />
    </Stack.Navigator>
)

const AppStack = () => (
    <Tab.Navigator>
        <Tab.Screen
            options={{
                tabBarLabel: 'Job List',
                tabBarIcon: ({ color }) => (
                    <Text></Text>
                ),
            }}
            name="JobList"
            component={JobListScreen}
        />
        <Tab.Screen
            options={{
                tabBarLabel: 'Add Job',
                tabBarIcon: ({ color }) => (
                    <Text></Text>
                ),
            }}
            name="AddJob"
            component={AddJobScreen} />
    </Tab.Navigator>
)

const AppNavigator = () => (
    <NavigationContainer>
        <Stack.Navigator >
            <Stack.Screen name="AuthStack" component={AuthStack} options={{ headerShown: false }} />
            <Stack.Screen name="HomeStack" component={AppStack} options={{ headerShown: false }} />
        </Stack.Navigator>

    </NavigationContainer>
)

export default AppNavigator;