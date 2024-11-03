
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from './screens/screen1';
import ScreenLogin from './screens/screenLogin';
import ScreenSigin from './screens/screenSigin';
import ScreenResetPw from './screens/screenResetPw';
import Screen4 from './screens/screen4';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Screen1' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Screen1' component={Screen1} />
        <Stack.Screen name='ScreenLogin' component={ScreenLogin} />
        <Stack.Screen name='ScreenSigin' component={ScreenSigin} />
        <Stack.Screen name='ScreenResetPw' component={ScreenResetPw} />
        <Stack.Screen name='Screen4' component={Screen4} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
