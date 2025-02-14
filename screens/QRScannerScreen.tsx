import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import {
    CameraView,
    CameraType,
    useCameraPermissions,
    PermissionStatus
} from 'expo-camera';

export default function QRScannerScreen() {
    const [permission, requestPermission] = useCameraPermissions();
    const [scanned, setScanned] = useState(false);
    const [facing, setFacing] = useState<CameraType>('back');

    useEffect(() => {
        if (!permission || permission.status !== PermissionStatus.GRANTED) {
            requestPermission().then(r => {
                console.log('Permiso concedido:', r);
            });
        }
    }, [permission]);

    const handleBarCodeScanned = ({ type, data }: { type: string; data: string }) => {
        setScanned(true);
        console.log('QR Data:', data);
    };

    if (!permission) {
        return <View style={styles.container}><Text>Cargando permisos...</Text></View>;
    }
    if (permission.status !== PermissionStatus.GRANTED) {
        return (
            <View style={styles.container}>
                <Text>Necesitamos acceso a la cámara para escanear códigos</Text>
                <Button onPress={requestPermission}>Conceder permisos</Button>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <CameraView
                style={StyleSheet.absoluteFillObject}
                facing={facing}
                onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
            >
                {scanned && (
                    <Button
                        mode="contained"
                        style={styles.button}
                        onPress={() => setScanned(false)}
                    >
                        Escanear de nuevo
                    </Button>
                )}
            </CameraView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    button: {
        position: 'absolute',
        bottom: 50,
        alignSelf: 'center',
    },
});
