import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

const Home = () => {
  const navigation = useNavigation();
  const onToggle = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home</Text>

      <Button title="Toggle Drawer" onPress={onToggle} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
