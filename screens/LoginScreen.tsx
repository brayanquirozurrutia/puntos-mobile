import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, TextInput, Title } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen: React.FC<Props> = ({ navigation }) => {
    const [rut, setRut] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Aquí se haría la llamada al backend para validar las credenciales.
        // Si el login es exitoso, navega a la pantalla Home pasando el RUT.
        navigation.replace('Home', { userRut: rut });
    };

    return (
        <View style={styles.container}>
            <Title>Iniciar Sesión</Title>
            <TextInput
                label="RUT"
                value={rut}
                onChangeText={setRut}
                style={styles.input}
            />
            <TextInput
                label="Contraseña"
                value={password}
                secureTextEntry
                onChangeText={setPassword}
                style={styles.input}
            />
            <Button mode="contained" onPress={handleLogin}>
                Ingresar
            </Button>
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20 },
    input: { marginBottom: 16 },
});
