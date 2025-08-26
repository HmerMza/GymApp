import { ScreenLayout } from "@/layouts/ScreenLayout";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <ScreenLayout>
      <View>
        <Text className="text-primary-400">Home Screen</Text>
        <Link href="/(auth)/login">Login</Link>
      </View>
    </ScreenLayout>
  );
}
