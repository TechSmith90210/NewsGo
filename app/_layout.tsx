import darkTheme from "@/theme/darkTheme";
import lightTheme from "@/theme/lightTheme";
import * as Font from "expo-font";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { useColorScheme } from "react-native";
import { ThemeProvider } from "styled-components/native";

export default function RootLayout() {
  const theme = useColorScheme() == "light" ? lightTheme : darkTheme;
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      "Sora-Regular": require("../assets/fonts/Sora-Regular.ttf"),
      "Sora-Medium": require("../assets/fonts/Sora-Medium.ttf"),
      "Sora-SemiBold": require("../assets/fonts/Sora-SemiBold.ttf"),
      "Sora-Bold": require("../assets/fonts/Sora-Bold.ttf"),
    }).then(() => setFontsLoaded(true));
  }, []);

  if (!fontsLoaded) return null;

  return (
    <ThemeProvider theme={theme}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
