import { Link, router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

const Home = () => {
  return (
    <View>
      <Link href="/users/1">Profile</Link>
      <Pressable onPress={() => router.push("/users/2")}>
        <Text>Profile</Text>
      </Pressable>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
