import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";

export default function App({navigation}) {

    const [username, setUsername] = useState('');
    const [gmail, setGmail] = useState('');
    const [password, setPassword] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxPress = () =>{
        setIsChecked(!isChecked);
    };
    const handleSignUp = async () =>{
        if(!username||!gmail||!password){
            Alert.alert("Error", "Nhap day du thong tin!");
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
    
                },
                body: JSON.stringify({username: username,gmail: gmail, password: password}),
            });

            const data = await response.json();
            if(response.ok){
                Alert.alert("Thanh cong", data.massage);
                navigation.navigate("ScreenLogin")
            }else{
                Alert.alert("Error", data.massage || "Loi dang ky!");
            }
        } catch (error) {
            console.error("Loi khi dang ky!", error);
            Alert.alert("Loi", "Loi khi ket noi server!");
        }
    }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TouchableOpacity style={styles.backButton}
       onPress={()=>{navigation.navigate("Screen1")}}
      >
        <Image source={require('../assets/img/BackBtn.png')} style={styles.backArrow} /> 
      </TouchableOpacity>
      <View style={styles.content}>
        <Image source={require('../assets/img/logoicon.png')} style={styles.logo} />
        <Text style={styles.title}>Nice to see you!</Text>
        <Text style={styles.subtitle}>Create your account</Text>
        
        {/* Input tên người dùng */}
        <View style={styles.inputContainer}>
          <Image source={require('../assets/img/codicon_account.png')} style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Enter your user name"
            placeholderTextColor="#C0C0C0"
            value={username}
            onChangeText={setUsername} 
          />
        </View>

        {/* Input gmail */}
        <View style={styles.inputContainer}>
          <Image source={require('../assets/img/Vector.png')} style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Enter your gmail address"
            placeholderTextColor="#C0C0C0"
            value={gmail}
            onChangeText={setGmail} 
          />
        </View>

        {/* Input mật khẩu */}
        <View style={styles.inputContainer}>
          <Image source={require('../assets/img/lock.png')} style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Enter your Password"
            placeholderTextColor="#C0C0C0"
            secureTextEntry
            value={password}
            onChangeText={setPassword} // Cập nhật giá trị state khi nhập
          />
          {/* <Image source={require('../assets/img/eye.png')} style={styles.inputIcon}/> */}
        </View>

        {/* Checkbox điều khoản */}
        <TouchableOpacity style={styles.checkboxContainer} onPress={handleCheckboxPress}>
          <MaterialIcons
            name={isChecked ? "check-box" : "check-box-outline-blank"}
            size={24}
            color={isChecked ? "#06b6d4" : "#64748b"} 
          />
          <Text style={styles.checkboxText}>
            I agree with <Text style={styles.link}>Terms & Conditions</Text>
          </Text>
        </TouchableOpacity>

        {/* Nút Sign up */}
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
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
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  backArrow: {
    width: 40,
    height: 40,
  },
  content: {
    padding: 30,
    width: '97%',
    maxWidth: 400,
    backgroundColor: "#996699",
    borderRadius: 10,
    
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 30,
    marginLeft: 120,
    borderRadius: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: "#fff"
  },
  subtitle: {
    fontSize: 16,
    color: '#C0C0C0',
    marginBottom: 50,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
    backgroundColor: '#f5f5f5',
    padding: 10,
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
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  checkboxText: {
    fontSize: 16,
  },
  link: {
    color: '#00c0ff',
  },
  button: {
    backgroundColor: '#00c0ff',
    padding: 15,
    borderRadius: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
