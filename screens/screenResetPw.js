import { useState } from 'react';
import { TouchableOpacity, Alert, StyleSheet, Text, View, TextInput } from 'react-native';

export default function ResetPasswordComponent({ navigation }) {
    const [username, setUsername] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleResetPassword = async () => {
        if (!username || !newPassword || !confirmPassword) {
            Alert.alert("Error", "Nhap day du thong tin!");
            return;
        }
        try {
            const response = await fetch('http://localhost:3000/api/reset-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username: username, newPassword: newPassword }),
            });

            const data = await response.json();
            if (response.ok) {
                Alert.alert("Thanh cong", data.message);
                navigation.navigate("ScreenLogin");
            } else {
                Alert.alert("Error", data.message || "Loi reset password!");
            }
        } catch (error) {
            console.error("Loi khi reset password!", error);
            Alert.alert("Loi", "Loi khi ket noi server!");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Reset Password</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your username"
                placeholderTextColor="#C0C0C0"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter new Password"
                placeholderTextColor="#C0C0C0"
                secureTextEntry
                value={newPassword}
                onChangeText={setNewPassword}
            />
            <TextInput
                style={styles.input}
                placeholder="Confirm new Password"
                placeholderTextColor="#C0C0C0"
                secureTextEntry
                value={confirmPassword}
                onChangeText={setConfirmPassword}
            />
            <TouchableOpacity style={styles.btn} onPress={handleResetPassword}>
                <Text style={styles.btnTxt}>Reset Password</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#996699",
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        color: "#fff",
    },
    input: {
        width: "80%",
        padding: 10,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
    },
    btn: {
        backgroundColor: "#5CC1D6",
        padding: 15,
        borderRadius: 5,
        width: "80%",
        alignItems: "center",
    },
    btnTxt: {
        color: "#fff",
        fontSize: 16,
    },
});
