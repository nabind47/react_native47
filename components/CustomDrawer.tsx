import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const CustomDrawer = (props: any) => {
  const router = useRouter();
  const { top, bottom } = useSafeAreaInsets();

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        scrollEnabled={false}
        contentContainerStyle={{
          backgroundColor: "#dde3fe",
        }}
      >
        <View style={{ padding: 20 }}>
          <Image
            source={{
              uri: "https://th.bing.com/th/id/R.a499e7f6fcdbc35cd4dbbbc9fec6bb65?rik=Tr7wR9xOEXyHWg&pid=ImgRaw&r=0",
            }}
            style={{
              width: 100,
              height: 100,
              alignSelf: "center",
              borderRadius: 50,
            }}
          />
          <Text
            style={{
              alignSelf: "center",
              fontWeight: "500",
              fontSize: 18,
              paddingTop: 10,
            }}
          >
            Randy Orton
          </Text>
        </View>

        <View style={{ paddingTop: 10 }}>
          <DrawerItemList {...props} />
          <DrawerItem label="Logout" onPress={() => router.replace("/")} />
        </View>
      </DrawerContentScrollView>

      <View
        style={{
          borderTopColor: "#dde3fe",
          borderWidth: 1,
          padding: 20,
          paddingBottom: 20 + bottom,
        }}
      >
        <Text>Footer</Text>
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({});
