import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const Profile = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Profile {id}</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
