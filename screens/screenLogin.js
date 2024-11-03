
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from 'react';



export default function App({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = async () => {
        if(!username || !password){
            Alert.alert("Error", "Nhap username va password!");
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
    
                },
                body: JSON.stringify({username: username, password: password}),
            });

            const data = await response.json();
            if(response.ok){
                if(data.success){
                    navigation.navigate("Screen4")
                }else{
                    Alert.alert("Error", data.massage || "Loi dang nhap!");
                }
            }else{
                Alert.alert("Error", data.massage || "Loi dang nhap!");
            }
            
        } catch (error) {
            console.error("Loi khi dang nhap!", error);
            Alert.alert("Loi", "Loi khi ket noi server!");
        }
    };


  return (
    <View style={styles.container}>

      <Image
        source={require('../assets/img/Image_20.png')}
        style={styles.banner}
      />

      <View style={styles.inputContent}>
        <View style={styles.formBox}>
          <Text style={styles.title} >Welcome!</Text>
          <Text style={styles.lable}>Username</Text>
          <View style={styles.inputContainer}>
            <Image source={require('../assets/img/codicon_account.png')} style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Enter your username "
              placeholderTextColor="#C0C0C0"
              value={username}
              onChangeText={setUsername}
            />
          </View>
          <Text style={styles.lable}>Password</Text>
          <View style={styles.inputContainer}>
            <Image source={require('../assets/img/lock.png')} style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Enter Password"
              placeholderTextColor="#C0C0C0"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            {/* <Image source={require('../assets/img/eye.png')} style={styles.inputIcon} /> */}
          </View>
          <TouchableOpacity style={styles.btn}
            onPress={handleLogin}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.backButton}
            onPress={() => { navigation.navigate("Screen1") }}
          >
            <Image source={require('../assets/img/BackBtn.png')} style={styles.backArrow} />
          </TouchableOpacity>
        </View>

      </View>

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
  banner: {
    width: 400,
    height: 200
  },
  inputContent: {
    flex: 1,
    width: 400,
    backgroundColor: '#fff',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    alignItems: 'center',
    marginTop: -20
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 70,
  },
  lable: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5
  },
  btn: {
    backgroundColor: '#5CC1D6',
    padding: 15,
    marginTop: 20,
    borderRadius: 20,
    width: 350,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 10,

  },
  input: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
  },
  inputIcon: {
    width: 20,
    height: 19,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  backButton: {
    marginRight: 300,
    marginTop: 200

  },
  backArrow: {
    width: 30,
    height: 30
  }
});
