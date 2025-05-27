import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { colors } from "../constants/colors";
import GlobalState from "../context/GlobalState";

export default function RootLayout() {
  return (
    <GlobalState>
      <StatusBar backgroundColor={colors.primary} style="light" />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </GlobalState>
  );
}
