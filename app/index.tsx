import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "styled-components/native";

export default function Index() {
  const theme = useTheme();
  const insets = useSafeAreaInsets()
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background,
      flex:1,
      padding: insets.bottom,
      justifyContent: "flex-end"
    },
    tagline: {
      color: theme.colors.textPrimary
    }
  });

  return (
    <View style={styles.container}>
      <Text style={styles.tagline}>Clean news, no clutter</Text>
    </View>
  );
}
