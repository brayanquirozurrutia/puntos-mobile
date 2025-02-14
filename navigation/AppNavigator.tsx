import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '@screens/LoginScreen';
import HomeScreen from '@screens/HomeScreen';
import QRScannerScreen from '@screens/QRScannerScreen';

export type RootStackParamList = {
    Login: undefined;
    Home: { userRut: string };
    QRScanner: { userRut: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Iniciar Sesión' }} />
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Inicio' }} />
            <Stack.Screen name="QRScanner" component={QRScannerScreen} options={{ title: 'Escanear QR' }} />
        </Stack.Navigator>
    </NavigationContainer>
);

export default AppNavigator;
