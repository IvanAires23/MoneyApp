import { Tabs } from "expo-router";
import { colors } from "../../constants/colors";

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerStyle: { backgroundColor: colors.primary },
                headerTintColor: colors.primaryContrast,
                headerTitleAlign: "center"
            }}
        >
            <Tabs.Screen name="index" />
            <Tabs.Screen name="add-transaction" />
            <Tabs.Screen name="summary" />
        </Tabs>
    )
}