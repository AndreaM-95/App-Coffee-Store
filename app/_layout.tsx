import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Colors } from '@/constants/Colors';
import { Appearance } from 'react-native';


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack screenOptions={{headerStyle: {backgroundColor: theme.headerBackground}, headerTintColor: theme.text, headerShadowVisible: false}}>
      <Stack.Screen name="index" options={{ headerShown: false, title:'Inicio' }} />
      <Stack.Screen name="menu" options={{ headerShown: true, title:'Menu', headerTitle:'Menu tienda de cafe' }} />
      <Stack.Screen name="contact" options={{ headerShown: true, title:'Contacto', headerTitle:'Contáctanos' }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
