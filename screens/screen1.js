
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View, Image } from 'react-native';



export default function App({navigation}) {

    return (
        <View style={styles.container}>
            <Image source={require("../assets/img/Container_screen1.png")} style={styles.container_screen1} />
            <TouchableOpacity style={styles.btn_login} onPress={() => { navigation.navigate("ScreenLogin") }}>
                <Text style={styles.txtBtn}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn_sigin} onPress={() => { navigation.navigate("ScreenSigin") }}>
                <Text style={styles.txtBtn2}>Sign up</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn_reset} onPress={() => { navigation.navigate("ScreenResetPw") }}>
                <Text style={styles.txtBtn2}>Reset Password</Text>
            </TouchableOpacity>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container_screen1: {
        width: 350,
        height: 450,
        borderRadius: 30,
    },
    btn_login:{
        backgroundColor: "#5CC1D6",
        padding: 15,
        marginTop: 20,
        borderRadius: 20,
        width: 350,
        justifyContent: "center",
        alignItems: "center",
    },
    txtBtn:{
        color:  '#fff',
        fontSize: 20,
        fontWeight: "600"
    },
    btn_sigin:{
        padding: 15,
        marginTop: 10,
        borderRadius: 20,
        width: 350,
        justifyContent: "center",
        alignItems: "center",
    },
    txtBtn2:{
        fontSize: 20,
        fontWeight: "400"
    },
});
