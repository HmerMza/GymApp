import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export const ScreenLayout = ({ children }: { children: React.ReactNode }) => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={{ paddingTop: insets.top }}>{children}</SafeAreaView>
  );
};
