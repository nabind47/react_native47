# [Expo Router](https://docs.expo.dev/router/installation/#quick-start)

```tsx
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
```

```tsx
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
```

```tsx
import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: "Home" }} />
      <Stack.Screen name="users/[id]" options={{ headerTitle: "Profile" }} />
    </Stack>
  );
};

export default RootLayout;
```

---

```tsx
import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;
```

```tsx
import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{ headerTitle: "Home", title: "Home" }}
      />
      <Tabs.Screen
        name="users/[id]"
        options={{ headerTitle: "Profile", title: "Profile" }}
      />
    </Tabs>
  );
};

export default TabsLayout;
```

## [Drawer](https://docs.expo.dev/router/advanced/drawer/)

```sh
npx expo install @react-navigation/drawer react-native-gesture-handler react-native-reanimated
```

```tsx
import "react-native-gesture-handler";

import Ionicons from "@expo/vector-icons/Ionicons";
import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Home",
            headerTitle: "Home",
            drawerIcon: ({ size, color }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="news"
          options={{
            drawerLabel: "News",
            headerTitle: "News",
            drawerIcon: ({ size, color }) => (
              <Ionicons name="newspaper-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="profile"
          options={{
            drawerLabel: "Profile",
            headerTitle: "Profile",
            drawerIcon: ({ size, color }) => (
              <Ionicons name="person-outline" size={size} color={color} />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
```

```tsx
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
```
