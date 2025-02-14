import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Title } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<Props> = ({ navigation, route }) => {
    const { userRut } = route.params;

    return (
        <View style={styles.container}>
            <Title>Bienvenido, {userRut}</Title>
            <Button mode="contained" onPress={() => navigation.navigate('QRScanner', { userRut })}>
                Escanear QR
            </Button>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
});
